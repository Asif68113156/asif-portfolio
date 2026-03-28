"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"   // ✅ ADD THIS
import { aboutContent, personalInfo } from "@/lib/data"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={ref}>
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-primary font-mono text-lg md:text-xl">01.</span>{" "}
              About Me
            </motion.h2>
            <motion.div
              className="h-px bg-border flex-grow max-w-xs"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>

          <div className="grid md:grid-cols-5 gap-8 md:gap-12">
            {/* Text content */}
            <motion.div
              className="md:col-span-3 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {aboutContent.summary}
              </p>

              <ul className="space-y-3">
                {aboutContent.details.map((detail, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base">{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Profile card */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="relative group">
                {/* Decorative border */}
                <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />

                {/* Card */}
                <div className="relative bg-card border border-border rounded-lg p-6 shadow-lg">
                  <div className="flex flex-col items-center text-center">

                    {/* ✅ PROFILE IMAGE */}
                    <Image
                      src="/images/as.jpeg"
                      alt="Asifali Siddiqui"
                      width={130}
                      height={130}
                      className="rounded-full border-4 border-purple-500 shadow-xl mb-4 object-cover hover:scale-105 transition"
                    />

                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {personalInfo.name}
                    </h3>

                    <p className="text-primary font-mono text-sm mb-2">
                      {personalInfo.title}
                    </p>

                    <p className="text-muted-foreground text-sm">
                      {personalInfo.subtitle}
                    </p>

                    <p className="text-muted-foreground text-xs mt-2">
                      📍 {personalInfo.location}
                    </p>

                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}