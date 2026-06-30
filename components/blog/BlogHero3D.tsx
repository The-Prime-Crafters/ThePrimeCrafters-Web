'use client'

import { useEffect, useRef } from 'react'

export default function BlogHero3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let animId: number
    const mouse = { x: 0, y: 0 }

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)

    let cleanup: (() => void) | null = null

    ;(async () => {
      const THREE = await import('three')

      const w = canvas.clientWidth
      const h = canvas.clientHeight

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 100)
      camera.position.z = 5

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
      renderer.setSize(w, h)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

      const group = new THREE.Group()
      scene.add(group)

      // ── CORE WIREFRAME SPHERE ──
      const coreGeo = new THREE.SphereGeometry(1, 36, 36)
      const coreMat = new THREE.MeshBasicMaterial({
        color: 0xd4af37,
        wireframe: true,
        transparent: true,
        opacity: 0.07,
      })
      const core = new THREE.Mesh(coreGeo, coreMat)
      group.add(core)

      // inner solid glow
      const glowGeo = new THREE.SphereGeometry(0.9, 32, 32)
      const glowMat = new THREE.MeshBasicMaterial({ color: 0xd4af37, transparent: true, opacity: 0.025 })
      group.add(new THREE.Mesh(glowGeo, glowMat))

      // ── ORBITAL RINGS ──
      const addRing = (r: number, tube: number, rx: number, ry: number, opacity: number) => {
        const geo = new THREE.TorusGeometry(r, tube, 4, 140)
        const mat = new THREE.MeshBasicMaterial({ color: 0xd4af37, transparent: true, opacity })
        const mesh = new THREE.Mesh(geo, mat)
        mesh.rotation.x = rx
        mesh.rotation.y = ry
        group.add(mesh)
        return mesh
      }

      const ring1 = addRing(1.7, 0.006, Math.PI / 2.8, 0, 0.65)
      const ring2 = addRing(2.1, 0.004, -Math.PI / 4, Math.PI / 5, 0.38)
      const ring3 = addRing(2.6, 0.0025, Math.PI / 6, -Math.PI / 3, 0.2)

      // ── FLOATING PARTICLES ──
      const COUNT = 350
      const pos = new Float32Array(COUNT * 3)
      for (let i = 0; i < COUNT; i++) {
        const phi = Math.acos(2 * Math.random() - 1)
        const theta = Math.random() * Math.PI * 2
        const r = 0.9 + Math.random() * 2.2
        pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
        pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
        pos[i * 3 + 2] = r * Math.cos(phi)
      }
      const pGeo = new THREE.BufferGeometry()
      pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
      const pMat = new THREE.PointsMaterial({ color: 0xd4af37, size: 0.03, transparent: true, opacity: 0.75 })
      const particles = new THREE.Points(pGeo, pMat)
      group.add(particles)

      // ── EQUATORIAL DOTS RING ──
      const dotCount = 48
      const dotGeo = new THREE.SphereGeometry(0.018, 6, 6)
      const dotMat = new THREE.MeshBasicMaterial({ color: 0xffd700, transparent: true, opacity: 0.9 })
      for (let i = 0; i < dotCount; i++) {
        const angle = (i / dotCount) * Math.PI * 2
        const dot = new THREE.Mesh(dotGeo, dotMat)
        dot.position.set(Math.cos(angle) * 1.7, 0, Math.sin(angle) * 1.7)
        group.add(dot)
      }

      scene.add(new THREE.AmbientLight(0xffffff, 1))

      const onResize = () => {
        const w = canvas.clientWidth
        const h = canvas.clientHeight
        camera.aspect = w / h
        camera.updateProjectionMatrix()
        renderer.setSize(w, h)
      }
      window.addEventListener('resize', onResize)

      let t = 0
      const animate = () => {
        animId = requestAnimationFrame(animate)
        t += 0.012

        ring1.rotation.z += 0.005
        ring2.rotation.z -= 0.0035
        ring3.rotation.z += 0.002

        core.rotation.y += 0.0025
        particles.rotation.y -= 0.0012
        particles.rotation.x += 0.0005

        // pulse
        pMat.opacity = 0.55 + 0.2 * Math.sin(t)
        coreMat.opacity = 0.05 + 0.025 * Math.sin(t * 0.7)

        // mouse parallax — smooth lerp
        group.rotation.y += (mouse.x * 0.45 - group.rotation.y) * 0.04
        group.rotation.x += (-mouse.y * 0.3 - group.rotation.x) * 0.04

        renderer.render(scene, camera)
      }
      animate()

      cleanup = () => {
        cancelAnimationFrame(animId)
        window.removeEventListener('resize', onResize)
        renderer.dispose()
      }
    })()

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cleanup?.()
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full block" />
}
