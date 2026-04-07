import React, { useRef, useEffect } from 'react'

export default function WebGLBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId
    let time = 0
    let mouseX = -10
    let mouseY = -10

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.scale(dpr, dpr)
    }

    resize()
    window.addEventListener('resize', resize)

    const handleMouseMove = (e) => {
      mouseX = e.clientX / window.innerWidth
      mouseY = e.clientY / window.innerHeight
    }
    window.addEventListener('mousemove', handleMouseMove)

    const draw = () => {
      time += 0.003
      const w = window.innerWidth
      const h = window.innerHeight

      // Base background
      ctx.fillStyle = '#f7f9fa'
      ctx.fillRect(0, 0, w, h)

      // Organic blobs
      const blobs = [
        {
          x: w * 0.3 + Math.sin(time * 0.7) * w * 0.08 + mouseX * 30,
          y: h * 0.35 + Math.cos(time * 0.5) * h * 0.06 + mouseY * 20,
          r: Math.min(w, h) * 0.28,
          color: 'rgba(186, 210, 235, 0.18)',
        },
        {
          x: w * 0.7 + Math.cos(time * 0.6) * w * 0.06,
          y: h * 0.5 + Math.sin(time * 0.8) * h * 0.08,
          r: Math.min(w, h) * 0.25,
          color: 'rgba(200, 220, 240, 0.15)',
        },
        {
          x: w * 0.5 + Math.sin(time * 0.4) * w * 0.1,
          y: h * 0.65 + Math.cos(time * 0.3) * h * 0.05,
          r: Math.min(w, h) * 0.32,
          color: 'rgba(210, 225, 245, 0.12)',
        },
        {
          x: w * 0.2 + Math.cos(time * 0.9) * w * 0.05,
          y: h * 0.7 + Math.sin(time * 0.6) * h * 0.04,
          r: Math.min(w, h) * 0.2,
          color: 'rgba(195, 215, 240, 0.1)',
        },
      ]

      blobs.forEach((blob) => {
        const gradient = ctx.createRadialGradient(
          blob.x, blob.y, 0,
          blob.x, blob.y, blob.r
        )
        gradient.addColorStop(0, blob.color)
        gradient.addColorStop(1, 'rgba(247, 249, 250, 0)')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, w, h)
      })

      // Subtle highlight near mouse
      if (mouseX > 0) {
        const mx = mouseX * w
        const my = mouseY * h
        const mgradient = ctx.createRadialGradient(mx, my, 0, mx, my, 200)
        mgradient.addColorStop(0, 'rgba(200, 220, 255, 0.06)')
        mgradient.addColorStop(1, 'rgba(247, 249, 250, 0)')
        ctx.fillStyle = mgradient
        ctx.fillRect(0, 0, w, h)
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} id="webgl-canvas" />
}