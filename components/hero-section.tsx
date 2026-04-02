"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
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
      initial={{ opacity: 0, y: 60, rotate: rotate - 5 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ delay, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5 + delay * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ 
          scale: 1.03, 
          transition: { duration: 0.4 }
        }}
        className="cursor-pointer"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Minimal Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-0 right-0 w-[60%] h-[80%] bg-gradient-to-bl from-gradient-start/8 via-gradient-mid/5 to-transparent blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-gradient-to-tr from-gradient-end/6 via-transparent to-transparent blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-32 lg:py-40 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-6 xl:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Eyebrow */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-sm font-medium tracking-wide text-muted-foreground mb-6"
              >
                Premium Art Supplies
              </motion.p>

              {/* Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[1.05] tracking-tight mb-8">
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  Create
                </motion.span>
                <motion.span 
                  className="block gradient-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  Without
                </motion.span>
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  Limits
                </motion.span>
              </h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg text-muted-foreground max-w-md mb-12 leading-relaxed"
              >
                Curated art supplies for creators who demand excellence. 
                From sketching to painting, find your perfect tools.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-wrap items-center gap-4"
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }} 
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end rounded-full opacity-0 group-hover:opacity-60 blur-lg transition-all duration-700" />
                  <Button
                    size="lg"
                    className="relative h-14 px-8 text-base font-medium rounded-full bg-foreground text-background hover:bg-foreground/90"
                  >
                    <span className="flex items-center gap-3">
                      Shop Collection
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }} 
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="ghost"
                    size="lg"
                    className="h-14 px-8 text-base font-medium rounded-full hover:bg-secondary"
                  >
                    Explore
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="lg:col-span-6 xl:col-span-7 relative h-[450px] sm:h-[550px] lg:h-[600px]">
            {/* Main Card */}
            <FloatingCard
              delay={0.3}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
              rotate={-2}
            >
              <div className="bg-card rounded-3xl p-3 shadow-2xl shadow-foreground/5 border border-border/50">
                <div className="relative w-[240px] h-[320px] sm:w-[280px] sm:h-[373px] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80"
                    alt="Premium watercolor set"
                    fill
                    sizes="(max-width: 640px) 240px, 280px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-white font-medium text-lg">Watercolor Set</p>
                    <p className="text-white/70 text-sm mt-1">Professional Grade</p>
                  </div>
                </div>
              </div>
            </FloatingCard>

            {/* Secondary Card */}
            <FloatingCard
              delay={0.5}
              className="absolute top-8 right-0 sm:right-8 z-20"
              rotate={4}
            >
              <div className="bg-card rounded-2xl p-2.5 shadow-xl border border-border/50">
                <div className="relative w-[140px] h-[140px] sm:w-[150px] sm:h-[150px] rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=400&q=80"
                    alt="Premium brushes"
                    fill
                    sizes="150px"
                    className="object-cover"
                  />
                </div>
                <div className="px-1 py-2">
                  <p className="font-medium text-sm">Brush Set</p>
                  <p className="text-muted-foreground text-xs">$49</p>
                </div>
              </div>
            </FloatingCard>

            {/* Tertiary Card */}
            <FloatingCard
              delay={0.7}
              className="absolute bottom-16 left-0 sm:left-8 z-20"
              rotate={-5}
            >
              <div className="bg-card rounded-2xl p-2.5 shadow-xl border border-border/50">
                <div className="relative w-[130px] h-[162px] sm:w-[140px] sm:h-[175px] rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&q=80"
                    alt="Sketch pencils"
                    fill
                    sizes="140px"
                    className="object-cover"
                  />
                </div>
                <div className="px-1 py-2">
                  <p className="font-medium text-sm">Pencil Set</p>
                  <p className="text-muted-foreground text-xs">$29</p>
                </div>
              </div>
            </FloatingCard>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full border border-border"
            />
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex items-center gap-12 mt-20 pt-12 border-t border-border/50"
        >
          {[
            { value: "50k+", label: "Artists" },
            { value: "4.9", label: "Rating" },
            { value: "24h", label: "Delivery" },
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
            >
              <span className="text-2xl font-semibold">{stat.value}</span>
              <span className="block text-sm text-muted-foreground mt-1">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-muted-foreground/30 flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-muted-foreground/50"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
