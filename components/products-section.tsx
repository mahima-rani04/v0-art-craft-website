"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ShoppingCart, Star } from "lucide-react"
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
  {
    id: 7,
    name: "Mixed Media Sketchbook",
    price: 29.99,
    rating: 4.7,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1517697471339-4aa32003c11a?w=400&h=400&fit=crop",
    category: "Paper",
  },
  {
    id: 8,
    name: "Craft Supplies Kit",
    price: 54.99,
    rating: 4.6,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&h=400&fit=crop",
    category: "DIY",
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
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className="flex-shrink-0 w-72 md:w-80"
    >
      <motion.div
        whileHover={{ y: -12, scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="group relative"
      >
        {/* Gradient glow on hover */}
        <motion.div 
          className="absolute -inset-2 bg-gradient-to-r from-gradient-start/30 via-gradient-mid/30 to-gradient-end/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        
        <div className="relative glass rounded-3xl overflow-hidden">
          {/* Image Container */}
          <div className="relative h-72 overflow-hidden">
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Quick Add Button with glow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end rounded-full opacity-70 blur-md" />
                <Button className="relative w-full rounded-full bg-foreground text-background hover:bg-foreground gap-2 font-semibold">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </Button>
              </div>
            </motion.div>

            {/* Category Badge */}
            <motion.span 
              className="absolute top-4 left-4 px-3 py-1 text-xs font-medium glass rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              {product.category}
            </motion.span>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center gap-1 mb-2">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviews})</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 line-clamp-1">{product.name}</h3>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold gradient-text">${product.price}</span>
              <motion.button
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 glass rounded-full hover:bg-primary/10 transition-colors"
                aria-label="Add to cart"
              >
                <ShoppingCart className="w-5 h-5" />
              </motion.button>
            </div>
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
    <section id="products" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-gradient-start/10 via-transparent to-transparent blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-sm uppercase tracking-widest text-muted-foreground"
            >
              Featured Products
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-balance"
            >
              Bestselling <span className="gradient-text">Art Supplies</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end rounded-full opacity-0 group-hover:opacity-60 blur-lg transition-all duration-500" />
            <Button variant="outline" className="relative rounded-full px-6 glass hover:bg-secondary/80">
              View All Products
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div className="flex gap-6 overflow-x-auto pb-6 px-6 scrollbar-hide snap-x snap-mandatory scroll-smooth">
          <div className="flex-shrink-0 w-[calc((100vw-theme(spacing.6)*2-theme(spacing.6)*7)/8)] md:hidden" />
          {products.map((product, index) => (
            <div key={product.id} className="snap-center">
              <ProductCard product={product} index={index} />
            </div>
          ))}
          <div className="flex-shrink-0 w-6" />
        </div>
        
        {/* Scroll Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-6 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-6 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
