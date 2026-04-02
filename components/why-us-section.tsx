"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Sparkles, Truck, Shield, Heart } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Handpicked supplies from world-renowned brands trusted by professionals.",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Free express delivery on orders over $50. Get supplies within 2-3 days.",
  },
  {
    icon: Shield,
    title: "Guaranteed",
    description: "30-day hassle-free returns. Not happy? We will make it right.",
  },
  {
    icon: Heart,
    title: "Community",
    description: "Join thousands of artists sharing tips, tutorials, and inspiration.",
  },
]

const stats = [
  { value: "50K+", label: "Happy Artists" },
  { value: "10K+", label: "Products" },
  { value: "4.9", label: "Rating" },
  { value: "99%", label: "Satisfaction" },
]

export function WhyUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="why-us" ref={sectionRef} className="py-32 lg:py-40">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium tracking-wide text-muted-foreground mb-4"
          >
            Why Choose Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6"
          >
            Why Artists <span className="gradient-text">Love Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            We&apos;re more than just a store. We&apos;re a community of creators 
            dedicated to helping you bring your artistic vision to life.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-secondary/50 rounded-3xl p-10 md:p-14"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-semibold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
