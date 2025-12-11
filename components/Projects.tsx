"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import * as THREE from "three";
import { projectsData } from "@/app/data/projects";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 50;

    // Create starfield
    const starCount = 2000;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);

    const goldColor = new THREE.Color(0xD4AF37);
    const whiteColor = new THREE.Color(0xffffff);
    const blueColor = new THREE.Color(0x4444ff);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      // Random positions in a sphere
      const r = 100 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = r * Math.cos(phi);

      // Colors - mostly white/gold with some blue hints for "space" feel
      const colorChoice = Math.random();
      let color;
      if (colorChoice > 0.9) color = goldColor;
      else if (colorChoice > 0.8) color = blueColor;
      else color = whiteColor;

      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      sizes[i] = Math.random() * 0.5 + 0.1;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(0xffffff) },
      },
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        void main() {
          float r = distance(gl_PointCoord, vec2(0.5));
          if (r > 0.5) discard;
          gl_FragColor = vec4(vColor, 1.0);
        }
      `,
      transparent: true,
      vertexColors: true,
    });

    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    // Add some "nebula" fog particles (larger, softer)
    const fogCount = 50;
    const fogPositions = new Float32Array(fogCount * 3);
    const fogColors = new Float32Array(fogCount * 3);

    for (let i = 0; i < fogCount; i++) {
      const i3 = i * 3;
      fogPositions[i3] = (Math.random() - 0.5) * 100;
      fogPositions[i3 + 1] = (Math.random() - 0.5) * 50;
      fogPositions[i3 + 2] = (Math.random() - 0.5) * 50;

      const color = Math.random() > 0.5 ? goldColor : blueColor;
      fogColors[i3] = color.r;
      fogColors[i3 + 1] = color.g;
      fogColors[i3 + 2] = color.b;
    }

    const fogGeometry = new THREE.BufferGeometry();
    fogGeometry.setAttribute('position', new THREE.BufferAttribute(fogPositions, 3));
    fogGeometry.setAttribute('color', new THREE.BufferAttribute(fogColors, 3));

    const fogMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(0xffffff) },
      },
      vertexShader: `
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = 100.0 * (10.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        void main() {
          float r = distance(gl_PointCoord, vec2(0.5));
          if (r > 0.5) discard;
          float alpha = 1.0 - (r * 2.0);
          alpha = pow(alpha, 1.5);
          gl_FragColor = vec4(vColor, alpha * 0.15);
        }
      `,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const fog = new THREE.Points(fogGeometry, fogMaterial);
    scene.add(fog);


    // Animation loop
    const animate = () => {
      stars.rotation.y += 0.0005;
      stars.rotation.x += 0.0002;
      fog.rotation.y += 0.0002;

      renderer.render(scene, camera);
      sceneRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      fogGeometry.dispose();
      fogMaterial.dispose();
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-8 lg:py-10 bg-[#111111] relative overflow-hidden flex items-center"
    >
      {/* Three.js Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37] rounded-full opacity-[0.02] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full px-4 sm:px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-6 lg:mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span className="inline-block text-[#D4AF37] text-[10px] font-semibold tracking-widest uppercase mb-1.5">
            Our Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-[var(--font-cormorant)] mb-2">
            <span className="text-[#f5f5f5]">Delivered </span>
            <span className="text-gradient-gold">Projects</span>
          </h2>
          <p className="text-[#a3a3a3] text-sm lg:text-base max-w-2xl mx-auto">
            Explore our track record of successful AI automation implementations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {projectsData.map((project, index) => (
            <div
              key={project.title}
              className={`group relative rounded-xl glass-card border-[rgba(255,255,255,0.08)] overflow-hidden card-hover transition-all duration-700 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image/Icon Area */}
              <div className="relative h-32 glass flex items-center justify-center overflow-hidden">
                <span className="text-4xl transform group-hover:scale-125 transition-all duration-500 group-hover:rotate-12">
                  {project.image}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[rgba(10,10,10,0.5)] to-transparent opacity-80" />

                {/* Industry Badge */}
                <span className="absolute top-2 left-2 px-2 py-0.5 text-[9px] font-medium glass text-[#D4AF37] rounded-full border border-[rgba(212,175,55,0.3)] backdrop-blur-xl">
                  {project.industry}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 relative z-10">
                <h3 className="text-base font-semibold text-[#f5f5f5] mb-1 font-[var(--font-cormorant)] group-hover:text-[#D4AF37] transition-colors truncate">
                  {project.title}
                </h3>
                <p className="text-[#a3a3a3] text-[11px] mb-2 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Results */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.results.slice(0, 2).map((result) => (
                    <span
                      key={result}
                      className="px-1.5 py-0.5 text-[9px] bg-[rgba(255,255,255,0.03)] text-[#737373] rounded border border-[rgba(255,255,255,0.05)] whitespace-nowrap"
                    >
                      {result}
                    </span>
                  ))}
                </div>

                {/* View Case Study Link */}
                <Link
                  href={`/case-study/${project.slug}`}
                  className="inline-flex items-center gap-1 text-[#D4AF37] text-[10px] font-medium group/link hover:text-[#FFD700] transition-colors cursor-pointer"
                  onClick={() => console.log(`Navigating to case study: ${project.slug}`)}
                >
                  View Case Study
                  <svg
                    className="w-3 h-3 group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>

              {/* Bottom Border Accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_60px_rgba(212,175,55,0.1)]" />
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div
          className={`text-center mt-6 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <a href="#contact" className="btn-secondary inline-flex items-center gap-2 text-xs py-2 px-5">
            Discuss Your Project
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

