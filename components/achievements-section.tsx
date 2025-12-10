"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Script from "next/script"

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 px-6">
      <Script src="//cdn.credly.com/assets/utilities/embed.js" strategy="lazyOnload" />
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Recognition of my technical expertise and contributions to the open-source community.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Hacktoberfest Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="text-primary" />
              Open Source Badges
            </h3>
            <Card className="p-6 overflow-hidden bg-muted/30">
              <div className="relative aspect-[2/1] w-full">
                <img
                  src="https://holopin.me/sehmaluva"
                  alt="Hacktoberfest and Open Source Badges"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="text-muted-foreground mb-4">
                  Collected through contributions to various open-source projects during Hacktoberfest and other events.
                </p>
                <Button variant="outline" asChild>
                  <a href="https://holopin.io/@sehmaluva" target="_blank" rel="noopener noreferrer">
                    View Full Profile <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="text-primary" />
              Certifications
            </h3>
            
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <div 
                data-iframe-width="150" 
                data-iframe-height="270" 
                data-share-badge-id="3f4f7a9f-b470-49c0-a80f-fc9b8c584976" 
                data-share-badge-host="https://www.credly.com"
              ></div>
              <div 
                data-iframe-width="150" 
                data-iframe-height="270" 
                data-share-badge-id="e0b6d724-15e4-473a-b8e8-ff22d50b7409" 
                data-share-badge-host="https://www.credly.com"
              ></div>

              {/* Postman Certification */}
              <Card className="w-[150px] h-[270px] flex flex-col items-center justify-between p-4 bg-white dark:bg-secondary/10 border border-border/50">
                <div className="flex-1 flex items-center justify-center w-full">
                    <img 
                        src="https://voyager.postman.com/logo/postman-logo-icon-orange.svg" 
                        alt="Postman Student Expert" 
                        className="w-20 h-20 object-contain"
                    />
                </div>
                <div className="text-center w-full">
                    <h4 className="font-bold text-sm mb-1 leading-tight">Postman Student Expert</h4>
                    <p className="text-xs text-muted-foreground mb-3">Postman</p>
                    <Button variant="outline" size="sm" className="w-full text-xs h-8" asChild>
                        <a href="https://www.linkedin.com/in/malvin-t-machingura/details/certifications/" target="_blank" rel="noopener noreferrer">
                            Verify
                        </a>
                    </Button>
                </div>
              </Card>
            </div>

            <div className="mt-6 text-center sm:text-left">
                 <Button variant="link" asChild className="text-muted-foreground hover:text-primary p-0">
                  <a href="https://www.credly.com/users/malvin-t-machingura/badges" target="_blank" rel="noopener noreferrer">
                    View all on Credly <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
