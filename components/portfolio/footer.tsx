"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Heart } from "lucide-react"
import { personalInfo } from "@/lib/data"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Copyright */}
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>by {personalInfo.name}</span>
          </div>

          {/* Tech stack */}
          <div className="text-muted-foreground text-xs font-mono">
            Next.js • Tailwind CSS • Framer Motion
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        {/* Credits */}
        <motion.p
          className="text-center text-muted-foreground text-xs mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          © {currentYear} {personalInfo.name}. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}
