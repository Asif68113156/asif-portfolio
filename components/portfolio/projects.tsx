"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, ChevronRight, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { projects, techCategories, type TechCategory } from "@/lib/data"
import { cn } from "@/lib/utils"

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState<TechCategory>("all")
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="py-20 md:py-32 relative" ref={ref}>
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-8 max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-primary font-mono text-lg md:text-xl">03.</span>{" "}
            Featured Projects
          </motion.h2>
          <motion.div
            className="h-px bg-border flex-grow max-w-xs"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        {/* Category filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {techCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Projects list */}
        <div className="max-w-6xl mx-auto space-y-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300">
                {/* Project header */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Layers className="h-5 w-5 text-primary" />
                        <span className="text-primary font-mono text-sm">
                          Featured Project
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="rounded-full"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button asChild size="sm" className="rounded-full">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="font-mono text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Expand/Collapse button */}
                  <button
                    onClick={() =>
                      setExpandedProject(
                        expandedProject === project.id ? null : project.id
                      )
                    }
                    className="flex items-center gap-1 text-primary text-sm font-medium hover:underline"
                  >
                    {expandedProject === project.id ? "Show Less" : "View Details"}
                    <ChevronRight
                      className={cn(
                        "h-4 w-4 transition-transform",
                        expandedProject === project.id && "rotate-90"
                      )}
                    />
                  </button>
                </div>

                {/* Expanded details */}
                {expandedProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-border"
                  >
                    <div className="p-6 md:p-8 bg-secondary/30">
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Problem & Solution */}
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-3">
                            The Problem
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            {project.problem}
                          </p>

                          <h4 className="text-lg font-semibold text-foreground mb-3">
                            The Solution
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {project.solution}
                          </p>
                        </div>

                        {/* Features & Architecture */}
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-3">
                            Key Features
                          </h4>
                          <ul className="space-y-2 mb-6">
                            {project.features.map((feature, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-muted-foreground text-sm"
                              >
                                <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>

                          <h4 className="text-lg font-semibold text-foreground mb-3">
                            Architecture
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {project.architecture}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
