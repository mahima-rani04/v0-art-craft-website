"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ShoppingBag, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Professional Graphite Set",
    price: 49.99,
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&h=400&fit=crop",
    category: "Sketching",
  },
  {
    id: 2,
    name: "Watercolor Paint Collection",
    price: 89.99,
    rating: 4.8,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=400&fit=crop",
    category: "Painting",
  },
  {
    id: 3,
    name: "Canvas Pad Pro (12x16)",
    price: 34.99,
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1579762714453-51d9913984e2?w=400&h=400&fit=crop",
    category: "Canvas",
  },
  {
    id: 4,
    name: "Artist Brush Collection",
    price: 69.99,
    rating: 4.9,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&h=400&fit=crop",
    category: "Brushes",
  },
  {
    id: 5,
    name: "Calligraphy Pen Set",
    price: 59.99,
    rating: 4.8,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=400&fit=crop",
    category: "Calligraphy",
  },
  {
    id: 6,
    name: "Premium Acrylic Paints",
    price: 79.99,
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1615715616181-6ba85d724137?w=400&h=400&fit=crop",
    category: "Painting",
  },
]

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="flex-shrink-0 w-[280px] md:w-[320px]"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="group relative bg-card rounded-2xl border border-border/50 overflow-hidden"
      >
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
          
          {/* Category Badge */}
          <span className="absolute top-4 left-4 px-3 py-1.5 text-xs font-medium bg-background/90 backdrop-blur-sm rounded-full">
            {product.category}
          </span>

          {/* Add to Cart - appears on hover */}
          <motion.div
            className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <Button 
              className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90 gap-2"
              size="sm"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </Button>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center gap-1.5 mb-2">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-sm text-muted-foreground">({product.reviews})</span>
          </div>
          <h3 className="font-medium mb-3 line-clamp-1">{product.name}</h3>
          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold">${product.price}</span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="Quick view"
            >
              <ShoppingBag className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ProductsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="products" ref={sectionRef} className="py-32 lg:py-40 overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-6 lg:px-12 mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium tracking-wide text-muted-foreground mb-4"
            >
              Featured
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight"
            >
              Bestselling <span className="gradient-text">Supplies</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Button 
              variant="ghost" 
              className="rounded-full px-6 gap-2 group"
            >
              View All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Scroll */}
      <div className="relative">
        <div className="flex gap-5 overflow-x-auto pb-4 px-6 lg:px-12 scrollbar-hide scroll-smooth">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
          <div className="flex-shrink-0 w-6 lg:w-12" />
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-4 w-12 lg:w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-4 w-12 lg:w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
