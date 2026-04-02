"use client"

import { motion } from "framer-motion"
import { Instagram, Twitter, Youtube, Facebook, Mail, MapPin, Phone } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
]

const footerLinks = {
  Shop: ["All Products", "Sketching", "Painting", "Calligraphy", "DIY Crafts"],
  Company: ["About Us", "Our Story", "Careers", "Press"],
  Support: ["Contact", "FAQ", "Shipping", "Returns"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
}

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-12 mb-16 gradient-border"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
                Join Our <span className="gradient-text">Creative Community</span>
              </h3>
              <p className="text-muted-foreground text-pretty">
                Subscribe for exclusive offers, artist tips, and early access to new products.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full glass border-border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <motion.a
              href="#"
              className="text-2xl font-bold gradient-text inline-block mb-4"
              whileHover={{ scale: 1.02 }}
            >
              Artistry
            </motion.a>
            <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">
              Premium art supplies for creators who demand excellence. Unleash your creativity with our curated collection.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors inline-block"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm text-muted-foreground">
          <motion.a
            href="mailto:hello@artistry.com"
            className="flex items-center gap-2 hover:text-foreground transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            <Mail className="w-4 h-4" />
            hello@artistry.com
          </motion.a>
          <motion.a
            href="tel:+1234567890"
            className="flex items-center gap-2 hover:text-foreground transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            <Phone className="w-4 h-4" />
            +1 (234) 567-890
          </motion.a>
          <motion.span
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <MapPin className="w-4 h-4" />
            San Francisco, CA
          </motion.span>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Artistry Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
