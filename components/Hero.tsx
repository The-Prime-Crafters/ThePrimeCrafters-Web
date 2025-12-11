"use client";

import { useEffect, useRef, useState } from "react";
import type * as THREE_TYPES from "three";

export default function Hero() {
  const [activeOption, setActiveOption] = useState(3);
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let animationFrameId: number;

    const loadThreeJS = async () => {
      const THREE = await import('three');

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current!,
        alpha: true,
        antialias: true,
      });

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      camera.position.z = 5;

      // OPTION 1: Particle Network System
      if (activeOption === 1) {
        const particleCount = 100;
        const particles: THREE_TYPES.Mesh[] = [];
        const connections: THREE_TYPES.Line[] = [];

        const particleGeometry = new THREE.SphereGeometry(0.05, 8, 8);
        const particleMaterial = new THREE.MeshBasicMaterial({
          color: 0xd4af37,
          transparent: true,
          opacity: 0.8,
        });

        // Create particles
        for (let i = 0; i < particleCount; i++) {
          const particle = new THREE.Mesh(particleGeometry, particleMaterial);
          particle.position.set(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          );
          particle.userData.velocity = new THREE.Vector3(
            (Math.random() - 0.5) * 0.02,
            (Math.random() - 0.5) * 0.02,
            (Math.random() - 0.5) * 0.02
          );
          scene.add(particle);
          particles.push(particle);
        }

        const mouse = { x: 0, y: 0 };
        const handleMouseMove = (e: MouseEvent) => {
          mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
          animationFrameId = requestAnimationFrame(animate);

          // Clear old connections
          connections.forEach(line => scene.remove(line));
          connections.length = 0;

          // Update particles
          particles.forEach((particle, i) => {
            particle.position.add(particle.userData.velocity);

            // Bounce off boundaries
            (['x', 'y', 'z'] as const).forEach((axis: 'x' | 'y' | 'z') => {
              if (Math.abs(particle.position[axis]) > 5) {
                particle.userData.velocity[axis] *= -1;
              }
            });

            // Mouse attraction
            const mouseVector = new THREE.Vector3(mouse.x * 5, mouse.y * 5, 0);
            const direction = mouseVector.sub(particle.position);
            particle.position.add(direction.multiplyScalar(0.001));

            // Draw connections
            for (let j = i + 1; j < particles.length; j++) {
              const distance = particle.position.distanceTo(particles[j].position);
              if (distance < 2) {
                const lineGeometry = new THREE.BufferGeometry().setFromPoints([
                  particle.position,
                  particles[j].position
                ]);
                const lineMaterial = new THREE.LineBasicMaterial({
                  color: 0xd4af37,
                  transparent: true,
                  opacity: (2 - distance) / 2 * 0.3,
                });
                const line = new THREE.Line(lineGeometry, lineMaterial);
                scene.add(line);
                connections.push(line);
              }
            }
          });

          renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", handleResize);

        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
          window.removeEventListener("resize", handleResize);
          cancelAnimationFrame(animationFrameId);
          renderer.dispose();
        };
      }

      // OPTION 2: Morphing Sphere
      if (activeOption === 2) {
        const geometry = new THREE.SphereGeometry(2, 64, 64);
        const material = new THREE.MeshPhongMaterial({
          color: 0xd4af37,
          emissive: 0xd4af37,
          emissiveIntensity: 0.1,
          wireframe: true,
          transparent: true,
          opacity: 0.6,
        });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        const innerMaterial = new THREE.MeshPhongMaterial({
          color: 0xf2d06b,
          emissive: 0xf2d06b,
          emissiveIntensity: 0.2,
          transparent: true,
          opacity: 0.3,
        });
        const innerSphere = new THREE.Mesh(new THREE.SphereGeometry(1.5, 32, 32), innerMaterial);
        scene.add(innerSphere);

        const light = new THREE.PointLight(0xd4af37, 2, 100);
        light.position.set(0, 0, 5);
        scene.add(light);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        scene.add(ambientLight);

        const positions = geometry.attributes.position;
        const originalPositions = positions.array.slice();

        const mouse = { x: 0, y: 0 };
        const handleMouseMove = (e: MouseEvent) => {
          mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener("mousemove", handleMouseMove);

        let time = 0;
        const animate = () => {
          animationFrameId = requestAnimationFrame(animate);
          time += 0.01;

          // Morph sphere vertices
          for (let i = 0; i < positions.count; i++) {
            const x = originalPositions[i * 3];
            const y = originalPositions[i * 3 + 1];
            const z = originalPositions[i * 3 + 2];

            const noise = Math.sin(x * 2 + time) * Math.cos(y * 2 + time) * 0.3;
            positions.setXYZ(
              i,
              x * (1 + noise),
              y * (1 + noise),
              z * (1 + noise)
            );
          }
          positions.needsUpdate = true;

          sphere.rotation.x += 0.001;
          sphere.rotation.y += 0.002;
          innerSphere.rotation.x -= 0.002;
          innerSphere.rotation.y -= 0.001;

          // Mouse interaction
          sphere.rotation.y += mouse.x * 0.01;
          sphere.rotation.x += mouse.y * 0.01;

          renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", handleResize);

        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
          window.removeEventListener("resize", handleResize);
          cancelAnimationFrame(animationFrameId);
          renderer.dispose();
        };
      }

      // OPTION 3: Golden Wave Grid
      if (activeOption === 3) {
        const gridSize = 40;
        const spacing = 0.5;
        const geometry = new THREE.PlaneGeometry(
          gridSize * spacing,
          gridSize * spacing,
          gridSize,
          gridSize
        );

        const material = new THREE.MeshPhongMaterial({
          color: 0xd4af37,
          emissive: 0xd4af37,
          emissiveIntensity: 0.1,
          wireframe: true,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.8,
        });

        const plane = new THREE.Mesh(geometry, material);
        plane.rotation.x = -Math.PI / 3;
        scene.add(plane);

        const light = new THREE.PointLight(0xd4af37, 1, 100);
        light.position.set(0, 5, 5);
        scene.add(light);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambientLight);

        camera.position.set(0, 8, 8);
        camera.lookAt(0, 0, 0);

        const positions = geometry.attributes.position;
        const originalPositions = positions.array.slice();

        const mouse = { x: 0, y: 0 };
        const handleMouseMove = (e: MouseEvent) => {
          mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener("mousemove", handleMouseMove);

        let time = 0;
        const animate = () => {
          animationFrameId = requestAnimationFrame(animate);
          time += 0.03;

          for (let i = 0; i < positions.count; i++) {
            const x = originalPositions[i * 3];
            const y = originalPositions[i * 3 + 1];

            const distance = Math.sqrt(x * x + y * y);
            const wave = Math.sin(distance - time) * 2;
            const mouseDistance = Math.sqrt(
              Math.pow(x - mouse.x * 10, 2) + Math.pow(y - mouse.y * 10, 2)
            );
            const mouseEffect = Math.max(0, 3 - mouseDistance) * 0.5;

            positions.setZ(i, wave + mouseEffect);
          }
          positions.needsUpdate = true;

          renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", handleResize);

        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
          window.removeEventListener("resize", handleResize);
          cancelAnimationFrame(animationFrameId);
          renderer.dispose();
        };
      }
    };

    loadThreeJS();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [activeOption]);

  return (
    <div ref={heroRef} className="relative h-screen w-full overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 h-full w-full"
      />



      <div className="absolute inset-0 z-[5] bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-black/40 px-6 py-2 backdrop-blur-md opacity-0 animate-[fadeInDown_0.8s_ease-out_forwards]">
          <div className="h-2 w-2 animate-pulse rounded-full bg-[#D4AF37]" />
          <span className="text-sm font-medium tracking-wider text-[#D4AF37]">
            AI-POWERED INNOVATION
          </span>
        </div>

        <h1 className="mb-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <div className="mb-2 text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
            Transform Your Business
          </div>
          <div className="bg-gradient-to-r from-[#D4AF37] via-[#F2D06B] to-[#D4AF37] bg-clip-text text-6xl font-bold tracking-tight text-transparent md:text-8xl lg:text-9xl bg-[length:200%_auto] animate-[gradient_3s_ease_infinite]">
            with AI Automation
          </div>
        </h1>

        <p className="mb-12 max-w-3xl text-xl leading-relaxed text-gray-300 md:text-2xl opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
          We deliver cutting-edge AI solutions that <span className="font-semibold text-white">streamline operations</span>,
          <span className="font-semibold text-white"> boost efficiency</span>, and drive
          <span className="font-semibold text-white"> measurable results</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F2D06B] px-10 py-4 text-lg font-bold text-black shadow-lg shadow-[#D4AF37]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/40 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book a Consultation
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#F2D06B] to-[#D4AF37] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>

          <a
            href="#projects"
            className="group relative overflow-hidden rounded-full border-2 border-[#D4AF37] bg-black/40 px-10 py-4 text-lg font-bold text-[#D4AF37] backdrop-blur-sm transition-all duration-300 hover:border-[#F2D06B] hover:bg-[#D4AF37]/10 hover:text-[#F2D06B] hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Our Work
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </span>
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400 opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]">
          <div className="flex items-center gap-2">
            <div className="h-1 w-8 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span>Cutting-Edge Technology</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1 w-8 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span>Scalable Solutions</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1 w-8 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span>24/7 Support</span>
          </div>
        </div>
      </div>



      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
