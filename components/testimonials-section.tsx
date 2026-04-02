"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Professional Illustrator",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    content: "The quality of supplies from Artistry Studio is unmatched. My watercolor paintings have never looked better.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Art Teacher",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    content: "I recommend Artistry to all my students. The curated selection makes it easy to find exactly what you need.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Hobbyist Artist",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    content: "Started my art journey with their beginner kit and haven't looked back. The quality at these prices is incredible.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isPaused])

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % testimonials.length)
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" ref={sectionRef} className="py-32 lg:py-40 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium tracking-wide text-muted-foreground mb-4"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight"
          >
            What Artists <span className="gradient-text">Say</span>
          </motion.h2>
        </div>

        {/* Testimonial */}
        <div
          className="max-w-3xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-8">
                {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-foreground text-foreground" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-snug mb-10">
                &ldquo;{testimonials[activeIndex].content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{testimonials[activeIndex].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full h-10 w-10"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-foreground"
                      : "w-2 bg-foreground/20 hover:bg-foreground/40"
                  }`}
                  aria-label={`Go to ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full h-10 w-10"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
