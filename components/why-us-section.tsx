"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Sparkles, Truck, Shield, Heart, Palette, Award } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Handpicked supplies from world-renowned brands trusted by professional artists.",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Free express delivery on orders over $50. Get your supplies within 2-3 days.",
  },
  {
    icon: Shield,
    title: "Satisfaction Guaranteed",
    description: "30-day hassle-free returns. Not happy? We will make it right.",
  },
  {
    icon: Heart,
    title: "Artist Community",
    description: "Join thousands of artists sharing tips, tutorials, and inspiration.",
  },
  {
    icon: Palette,
    title: "Expert Curation",
    description: "Our team of artists curate the best tools for every skill level.",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized as the top art supply destination by Creative Magazine.",
  },
]

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.23, 1, 0.32, 1] }}
      className="group"
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative h-full"
      >
        {/* Gradient glow on hover */}
        <motion.div 
          className="absolute -inset-2 bg-gradient-to-r from-gradient-start/25 via-gradient-mid/25 to-gradient-end/25 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        
        <div className="relative glass rounded-3xl p-8 h-full overflow-hidden transition-all duration-300">
          {/* Animated Icon */}
          <motion.div
            whileHover={{ scale: 1.15, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gradient-start/20 to-gradient-mid/20 flex items-center justify-center mb-6 relative"
          >
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gradient-start to-gradient-mid opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <feature.icon className="w-7 h-7 text-primary relative z-10 group-hover:text-primary-foreground transition-colors duration-300" />
          </motion.div>

          <motion.h3 
            className="text-xl font-bold mb-3"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            {feature.title}
          </motion.h3>
          <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

          {/* Hover Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gradient-start/5 via-transparent to-gradient-end/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
        </div>
      </motion.div>
    </motion.div>
  )
}

export function WhyUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="why-us" ref={sectionRef} className="py-32 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-sm uppercase tracking-widest text-muted-foreground"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-balance"
          >
            Why Artists <span className="gradient-text">Love Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground text-pretty"
          >
            We&apos;re more than just a store. We&apos;re a community of creators dedicated to helping you 
            bring your artistic vision to life.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 glass rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50K+", label: "Happy Artists" },
              { value: "10K+", label: "Products" },
              { value: "4.9", label: "Average Rating" },
              { value: "99%", label: "Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
