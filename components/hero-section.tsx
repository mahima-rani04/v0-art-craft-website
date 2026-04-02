"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { ArrowRight, Palette, Brush, Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"

function FloatingElement({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4 + delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]), springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      onMouseMove={handleMouseMove}
    >
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y }}
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-start/20 blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 150]) }}
          className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-gradient-mid/20 blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
          className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-gradient-end/15 blur-3xl"
        />
      </div>

      <motion.div style={{ opacity }} className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <FloatingElement delay={0.2} className="absolute top-10 left-10 md:left-20">
              <div className="glass p-4 rounded-2xl">
                <Palette className="w-8 h-8 text-gradient-start" />
              </div>
            </FloatingElement>
            <FloatingElement delay={0.4} className="absolute top-20 right-10 md:right-20">
              <div className="glass p-4 rounded-2xl">
                <Brush className="w-8 h-8 text-gradient-mid" />
              </div>
            </FloatingElement>
            <FloatingElement delay={0.6} className="absolute bottom-32 left-20 md:left-32">
              <div className="glass p-4 rounded-2xl">
                <Pencil className="w-8 h-8 text-gradient-end" />
              </div>
            </FloatingElement>
          </div>

          {/* Main Content */}
          <motion.div
            style={{ rotateX, rotateY }}
            className="perspective-1000"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm md:text-base uppercase tracking-widest text-muted-foreground mb-6"
            >
              Premium Art Supplies
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
            >
              <span className="block text-balance">Create</span>
              <span className="gradient-text text-balance">Without Limits</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty"
            >
              Discover our curated collection of premium art supplies. From sketching to painting, 
              unleash your creativity with tools designed for artists who demand excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="relative overflow-hidden group px-8 py-6 text-lg rounded-full bg-foreground text-background hover:bg-foreground/90"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Shop Now
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.4 }}
                  />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-lg rounded-full glass border-border hover:bg-secondary/50"
                >
                  Explore Categories
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Scroll</span>
              <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
                <motion.div
                  animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-muted-foreground"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
