"use client"

import { useRef, useState } from "react"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Pencil, Palette, PenTool, Scissors, ArrowRight } from "lucide-react"

const categories = [
  {
    name: "Sketching",
    description: "Professional pencils, charcoal, and sketch pads",
    icon: Pencil,
    gradient: "from-blue-500 to-cyan-400",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    shadowColor: "shadow-blue-500/25",
    borderColor: "border-blue-500/30",
  },
  {
    name: "Painting",
    description: "Watercolors, acrylics, oils, and canvases",
    icon: Palette,
    gradient: "from-pink-500 to-rose-400",
    bgGradient: "from-pink-500/10 to-rose-500/10",
    shadowColor: "shadow-pink-500/25",
    borderColor: "border-pink-500/30",
  },
  {
    name: "Calligraphy",
    description: "Premium pens, inks, and specialty papers",
    icon: PenTool,
    gradient: "from-amber-500 to-orange-400",
    bgGradient: "from-amber-500/10 to-orange-500/10",
    shadowColor: "shadow-amber-500/25",
    borderColor: "border-amber-500/30",
  },
  {
    name: "DIY Crafts",
    description: "Tools, materials, and craft kits",
    icon: Scissors,
    gradient: "from-emerald-500 to-teal-400",
    bgGradient: "from-emerald-500/10 to-teal-500/10",
    shadowColor: "shadow-emerald-500/25",
    borderColor: "border-emerald-500/30",
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
  const [isHovered, setIsHovered] = useState(false)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 300 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="perspective-1000"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative cursor-pointer"
      >
        {/* Animated border glow */}
        <motion.div
          className={`absolute -inset-[2px] rounded-3xl bg-gradient-to-r ${category.gradient} opacity-0 blur-sm`}
          animate={{ opacity: isHovered ? 0.8 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Card content */}
        <motion.div
          className={`relative glass rounded-3xl p-8 h-full overflow-hidden border border-transparent transition-colors duration-300 ${isHovered ? category.borderColor : ""}`}
          animate={{ 
            y: isHovered ? -8 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Background gradient on hover */}
          <motion.div 
            className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 opacity-0"
            style={{
              background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 55%, transparent 60%)",
            }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              x: isHovered ? ["0%", "100%"] : "0%"
            }}
            transition={{ 
              opacity: { duration: 0.2 },
              x: { duration: 0.6, ease: "easeInOut" }
            }}
          />

          <div className="relative z-10">
            {/* Icon with animated background */}
            <motion.div
              className="relative w-16 h-16 mb-6"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.gradient}`}
                animate={{ opacity: isHovered ? 1 : 0.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 rounded-2xl glass flex items-center justify-center">
                <motion.div
                  animate={{ 
                    color: isHovered ? "#ffffff" : undefined,
                    scale: isHovered ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <category.icon className={`w-8 h-8 ${isHovered ? "text-white" : `bg-gradient-to-r ${category.gradient} bg-clip-text`}`} style={isHovered ? {} : { color: category.gradient.includes("blue") ? "#3b82f6" : category.gradient.includes("pink") ? "#ec4899" : category.gradient.includes("amber") ? "#f59e0b" : "#10b981" }} />
                </motion.div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h3 
              className="text-2xl font-bold mb-3"
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {category.name}
            </motion.h3>
            
            {/* Description */}
            <motion.p 
              className="text-muted-foreground leading-relaxed"
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              {category.description}
            </motion.p>

            {/* CTA with animated arrow */}
            <motion.div
              className="mt-6 flex items-center gap-2 font-medium"
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <span className={`bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                Explore
              </span>
              <motion.div
                className={`bg-gradient-to-r ${category.gradient} rounded-full p-1`}
                animate={{ 
                  x: isHovered ? 8 : 0,
                  scale: isHovered ? 1.2 : 1
                }}
                transition={{ duration: 0.3, type: "spring", stiffness: 400 }}
              >
                <ArrowRight className="w-4 h-4 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Drop shadow on hover */}
        <motion.div
          className={`absolute inset-0 rounded-3xl ${category.shadowColor} -z-10`}
          animate={{ 
            boxShadow: isHovered ? "0 25px 50px -12px currentColor" : "0 0 0 0 transparent"
          }}
          transition={{ duration: 0.3 }}
        />
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
