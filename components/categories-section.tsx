"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Pencil, Palette, PenTool, Scissors } from "lucide-react"

const categories = [
  {
    name: "Sketching",
    description: "Professional pencils, charcoal, and sketch pads",
    icon: Pencil,
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
  },
  {
    name: "Painting",
    description: "Watercolors, acrylics, oils, and canvases",
    icon: Palette,
    color: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-500",
  },
  {
    name: "Calligraphy",
    description: "Premium pens, inks, and specialty papers",
    icon: PenTool,
    color: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-500",
  },
  {
    name: "DIY Crafts",
    description: "Tools, materials, and craft kits",
    icon: Scissors,
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-500",
  },
]

function CategoryCard({
  category,
  index,
}: {
  category: (typeof categories)[0]
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <motion.div
        whileHover={{ 
          scale: 1.02, 
          rotateY: 5,
          rotateX: 5,
        }}
        whileTap={{ scale: 0.98 }}
        className="relative group cursor-pointer perspective-1000"
      >
        <div className="glass rounded-3xl p-8 h-full relative overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/10">
          {/* Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          
          {/* Glow Effect */}
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
          />

          <div className="relative z-10">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className={`w-16 h-16 rounded-2xl glass flex items-center justify-center mb-6 ${category.iconColor}`}
            >
              <category.icon className="w-8 h-8" />
            </motion.div>

            <h3 className="text-2xl font-bold mb-3">{category.name}</h3>
            <p className="text-muted-foreground leading-relaxed">{category.description}</p>

            <motion.div
              className="mt-6 flex items-center gap-2 text-primary font-medium"
              whileHover={{ x: 10 }}
            >
              <span>Explore</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function CategoriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="categories" ref={sectionRef} className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-sm uppercase tracking-widest text-muted-foreground"
          >
            Shop by Category
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-balance"
          >
            Find Your <span className="gradient-text">Creative Tools</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.name} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
