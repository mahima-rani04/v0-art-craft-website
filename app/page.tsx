"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { CategoriesSection } from "@/components/categories-section"
import { ProductsSection } from "@/components/products-section"
import { WhyUsSection } from "@/components/why-us-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <ProductsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
