"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Server, Database, Wrench } from "lucide-react"
import { skills } from "@/lib/data"
import { Progress } from "@/components/ui/progress"

const categories = [
  { key: "frontend" as const, title: "Frontend", icon: Code2, color: "from-blue-500 to-cyan-500" },
  { key: "backend" as const, title: "Backend", icon: Server, color: "from-green-500 to-emerald-500" },
  { key: "database" as const, title: "Database", icon: Database, color: "from-orange-500 to-amber-500" },
  { key: "tools" as const, title: "Tools & DevOps", icon: Wrench, color: "from-purple-500 to-pink-500" },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12 max-w-4xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-primary font-mono text-lg md:text-xl">02.</span>{" "}
            Skills & Technologies
          </motion.h2>
          <motion.div
            className="h-px bg-border flex-grow max-w-xs"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {categories.map((category, categoryIndex) => {
            const Icon = category.icon
            const categorySkills = skills[category.key]

            return (
              <motion.div
                key={category.key}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-10`}>
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-4">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress
                        value={isInView ? skill.level : 0}
                        className="h-2 bg-secondary"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Tech icons cloud */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-center text-muted-foreground text-sm mb-6">
            Technologies I work with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React", "Next.js", "TypeScript", "Node.js", "Express",
              "MongoDB", "PostgreSQL", "Redis", "Docker", "Git",
              "Tailwind CSS", "REST APIs", "GraphQL", "AWS"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-mono hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.03 }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
