"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Server, Shield, Code, Database } from "lucide-react"
import { advancedFeatures } from "@/lib/data"

const iconMap = {
  server: Server,
  shield: Shield,
  code: Code,
  database: Database,
}

export function AdvancedFeatures() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12 max-w-5xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-primary font-mono text-lg md:text-xl">04.</span>{" "}
            Technical Expertise
          </motion.h2>
          <motion.div
            className="h-px bg-border flex-grow max-w-xs"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {advancedFeatures.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]

            return (
              <motion.div
                key={feature.title}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent -translate-y-1/2 translate-x-1/2 rounded-full" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
