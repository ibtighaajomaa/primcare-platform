"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-muted py-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background px-4 py-2 text-sm font-medium text-primary">
            <span className="flex h-2 w-2 rounded-full bg-primary" />
            Propulsé par l&apos;Intelligence Artificielle
          </div>

          {/* Main heading */}
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Le Premier{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Dossier Médical Intelligent
            </span>{" "}
            qui travaille pour vous
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            Oubliez les logiciels passifs et les clics interminables. Notre plateforme vous redonne ce que vous avez de plus précieux :{" "}
            <strong className="text-foreground">le temps du soin</strong>.
          </p>

          
      

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-border/50 bg-background/80 p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="mt-1 text-sm text-muted-foreground">Standard FHIR R4/R5</div>
            </div>
            <div className="rounded-2xl border border-border/50 bg-background/80 p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-secondary">IA</div>
              <div className="mt-1 text-sm text-muted-foreground">Agent Scribe Intégré</div>
            </div>
            <div className="rounded-2xl border border-border/50 bg-background/80 p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary">0</div>
              <div className="mt-1 text-sm text-muted-foreground">Clics pour documenter</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
