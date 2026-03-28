"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send, Github, Linkedin, Mail, MapPin, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import { personalInfo } from "@/lib/data"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12 max-w-4xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-primary font-mono text-lg md:text-xl">05.</span>{" "}
            Get In Touch
          </motion.h2>
          <motion.div
            className="h-px bg-border flex-grow max-w-xs"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {"Let's Connect"}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {"I'm currently open to new opportunities and collaborations. Whether you have a project in mind, a question, or just want to say hi, feel free to reach out!"}
              </p>

              {/* Contact details */}
              <div className="space-y-4 mb-8">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm">{personalInfo.email}</span>
                </a>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-foreground" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-foreground" />
                </a>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-card border border-border rounded-xl p-6">
                {isSubmitted ? (
                  <motion.div
                    className="flex flex-col items-center justify-center py-12 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {"Thanks for reaching out. I'll get back to you soon."}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <FieldGroup>
                      <Field>
                        <FieldLabel htmlFor="name">Name</FieldLabel>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          required
                          className="bg-secondary/50"
                        />
                      </Field>

                      <Field>
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          required
                          className="bg-secondary/50"
                        />
                      </Field>

                      <Field>
                        <FieldLabel htmlFor="message">Message</FieldLabel>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Your message..."
                          rows={4}
                          required
                          className="bg-secondary/50 resize-none"
                        />
                      </Field>
                    </FieldGroup>

                    <Button
                      type="submit"
                      className="w-full mt-6 rounded-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
