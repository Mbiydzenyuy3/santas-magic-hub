'use client'
import { useEffect, useRef } from 'react'

export default function RealSnowfall() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)
    let animationId: number

    const snowflakes = Array.from({ length: 120 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 1,
      d: Math.random() + 1
    }))

    function draw() {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = 'white'
      ctx.beginPath()
      snowflakes.forEach((f) => {
        ctx.moveTo(f.x, f.y)
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2)
      })
      ctx.fill()
      update()
    }

    function update() {
      snowflakes.forEach((f) => {
        f.y += Math.pow(f.d, 2)
        f.x += Math.sin(f.y * 0.01)

        if (f.y > height) {
          f.y = -5
          f.x = Math.random() * width
        }
      })
    }

    function animate() {
      draw()
      animationId = requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1]"
    />
  )
}
