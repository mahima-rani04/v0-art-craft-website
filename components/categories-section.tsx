"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Pencil, Palette, PenTool, Scissors, ArrowUpRight } from "lucide-react"

const categories = [
  {
    name: "Sketching",
    description: "Professional pencils, charcoal, and sketch pads",
    icon: Pencil,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80",
  },
  {
    name: "Painting",
    description: "Watercolors, acrylics, oils, and canvases",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80",
  },
  {
    name: "Calligraphy",
    description: "Premium pens, inks, and specialty papers",
    icon: PenTool,
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80",
  },
  {
    name: "DIY Crafts",
    description: "Tools, materials, and craft kits",
    icon: Scissors,
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600&q=80",
  },
]

function CategoryCard({
  category,
  index,
}: {
  category: (typeof categories)[0]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.a
        href="#"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="group block relative overflow-hidden rounded-2xl bg-card border border-border/50 h-full"
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <motion.img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          
          {/* Arrow */}
          <motion.div
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100"
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUpRight className="w-5 h-5" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
              <category.icon className="w-5 h-5 text-foreground" />
            </div>
            <h3 className="text-xl font-semibold">{category.name}</h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{category.description}</p>
        </div>
      </motion.a>
    </motion.div>
  )
}

export function CategoriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="categories" ref={sectionRef} className="py-32 lg:py-40">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium tracking-wide text-muted-foreground mb-4"
          >
            Categories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight"
          >
            Find Your <span className="gradient-text">Creative Tools</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.name} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
