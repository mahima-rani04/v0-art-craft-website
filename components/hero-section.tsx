"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

function FloatingCard({
  children,
  delay = 0,
  className = "",
  rotate = 0,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  rotate?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, rotate: rotate - 15, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, rotate, scale: 1 }}
      transition={{ delay, duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [rotate, rotate + 3, rotate - 1, rotate],
          scale: [1, 1.02, 0.98, 1],
        }}
        transition={{
          duration: 6 + delay * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ 
          scale: 1.05, 
          rotate: rotate + 5,
          transition: { duration: 0.3 }
        }}
        className="cursor-pointer"
      >
        {/* Subtle glow on hover */}
        <motion.div
          className="absolute -inset-4 bg-gradient-to-r from-gradient-start/20 via-gradient-mid/20 to-gradient-end/20 rounded-3xl blur-xl opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="relative">
          {children}
        </div>
      </motion.div>
    </motion.div>
  )
}

export function HeroSection() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const x = ((e.clientX - centerX) / (rect.width / 2)) * 5
    const y = ((e.clientY - centerY) / (rect.height / 2)) * -5
    setTilt({ x: y, y: x })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary large orb */}
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-gradient-start/30 via-gradient-mid/20 to-transparent blur-3xl"
        />
        
        {/* Secondary orb */}
        <motion.div
          animate={{ 
            y: [0, -40, 0],
            x: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -top-1/3 -right-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-gradient-mid/25 via-gradient-end/15 to-transparent blur-3xl"
        />
        
        {/* Accent orb */}
        <motion.div
          animate={{ 
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-t from-gradient-end/20 via-gradient-start/10 to-transparent blur-3xl"
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(128,128,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(128,128,128,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              animate={{ rotateX: tilt.x, rotateY: tilt.y }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
              style={{ transformPerspective: 1200 }}
              className="relative"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
              >
                <Sparkles className="w-4 h-4 text-gradient-mid" />
                <span className="text-sm font-medium text-foreground/80">Premium Art Supplies</span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight mb-6"
              >
                <span className="block text-balance">Create</span>
                <span className="gradient-text text-balance">Without</span>
                <span className="gradient-text text-balance">Limits</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 text-pretty leading-relaxed"
              >
                Discover our curated collection of premium art supplies. From sketching to painting, 
                unleash your creativity with tools designed for artists who demand excellence.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                {/* Primary Button with Gradient Glow */}
                <motion.div 
                  whileHover={{ scale: 1.03 }} 
                  whileTap={{ scale: 0.97 }}
                  className="relative group"
                >
                  {/* Gradient glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end rounded-full opacity-0 group-hover:opacity-70 blur-lg transition-all duration-500 group-hover:duration-200" />
                  <Button
                    size="lg"
                    className="relative px-8 py-6 text-base font-semibold rounded-full bg-foreground text-background hover:bg-foreground shadow-xl shadow-foreground/10"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Shop Collection
                      <motion.span
                        className="inline-block"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.span>
                    </span>
                  </Button>
                </motion.div>
                
                {/* Secondary Button with Gradient Glow */}
                <motion.div 
                  whileHover={{ scale: 1.03 }} 
                  whileTap={{ scale: 0.97 }}
                  className="relative group"
                >
                  {/* Gradient glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end rounded-full opacity-0 group-hover:opacity-50 blur-lg transition-all duration-500 group-hover:duration-200" />
                  <Button
                    variant="outline"
                    size="lg"
                    className="relative px-8 py-6 text-base font-semibold rounded-full glass border-border/50 hover:bg-secondary/80 hover:border-transparent"
                  >
                    Explore Categories
                  </Button>
                </motion.div>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-8 mt-12 pt-8 border-t border-border/50"
              >
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-foreground">50k+</span>
                  <span className="text-sm text-muted-foreground">Happy Artists</span>
                </div>
                <div className="w-px h-10 bg-border/50" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-foreground">4.9</span>
                  <span className="text-sm text-muted-foreground">Rating</span>
                </div>
                <div className="w-px h-10 bg-border/50" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-foreground">24h</span>
                  <span className="text-sm text-muted-foreground">Fast Delivery</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Floating Product Cards */}
          <div className="order-1 lg:order-2 relative h-[400px] sm:h-[500px] lg:h-[600px]">
            {/* Main Featured Card */}
            <FloatingCard
              delay={0.2}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
              rotate={-3}
            >
              <div className="glass-strong rounded-3xl p-2 shadow-2xl shadow-foreground/5">
                <div className="relative w-[220px] h-[293px] sm:w-[280px] sm:h-[373px] rounded-2xl overflow-hidden bg-gradient-to-br from-gradient-start/10 to-gradient-mid/10">
                  <Image
                    src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80"
                    alt="Premium watercolor set"
                    fill
                    sizes="(max-width: 640px) 220px, 280px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-lg">Watercolor Set</p>
                    <p className="text-white/80 text-sm">Professional Grade</p>
                  </div>
                </div>
              </div>
            </FloatingCard>

            {/* Secondary Card - Top Right */}
            <FloatingCard
              delay={0.4}
              className="absolute top-8 right-4 sm:right-8 lg:right-0 z-20"
              rotate={6}
            >
              <div className="glass rounded-2xl p-2 shadow-xl">
                <div className="relative w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] rounded-xl overflow-hidden bg-gradient-to-br from-gradient-mid/10 to-gradient-end/10">
                  <Image
                    src="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=400&q=80"
                    alt="Premium brushes"
                    fill
                    sizes="(max-width: 640px) 140px, 160px"
                    className="object-cover"
                  />
                </div>
                <div className="p-2">
                  <p className="font-medium text-sm">Brush Set</p>
                  <p className="text-muted-foreground text-xs">$49.99</p>
                </div>
              </div>
            </FloatingCard>

            {/* Tertiary Card - Bottom Left */}
            <FloatingCard
              delay={0.6}
              className="absolute bottom-12 left-4 sm:left-8 lg:left-0 z-20"
              rotate={-8}
            >
              <div className="glass rounded-2xl p-2 shadow-xl">
                <div className="relative w-[130px] h-[162px] sm:w-[150px] sm:h-[187px] rounded-xl overflow-hidden bg-gradient-to-br from-gradient-end/10 to-gradient-start/10">
                  <Image
                    src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&q=80"
                    alt="Sketch pencils"
                    fill
                    sizes="(max-width: 640px) 130px, 150px"
                    className="object-cover"
                  />
                </div>
                <div className="p-2">
                  <p className="font-medium text-sm">Pencil Set</p>
                  <p className="text-muted-foreground text-xs">$29.99</p>
                </div>
              </div>
            </FloatingCard>

            {/* Accent Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute top-16 left-8 w-16 h-16 rounded-full border border-gradient-start/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-24 right-12 w-12 h-12 rounded-full border border-gradient-mid/20"
            />
            
            {/* Floating dots */}
            <motion.div
              animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-gradient-start"
            />
            <motion.div
              animate={{ y: [0, 15, 0], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/3 left-1/4 w-3 h-3 rounded-full bg-gradient-mid"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll to explore</span>
          <div className="w-5 h-9 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1 rounded-full bg-muted-foreground"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
