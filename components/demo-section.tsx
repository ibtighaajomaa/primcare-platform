"use client"

import { Button } from "@/components/ui/button"
import { Play, FileText, Video, Eye } from "lucide-react"

export function DemoSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
            Vidéo Explicative
          </div>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Découvrez PrimCare en action
          </h2>
          <p className="text-pretty text-muted-foreground">
            Prenez 30 secondes pour découvrir notre solution. Regardez cette vidéo pour explorer ses fonctionnalités clés et comprendre l’impact de PrimCare sur votre quotidien.
          </p>
        </div>

        {/* Video player */}
        <div className="mt-12 mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-3xl border border-border bg-black shadow-2xl">
            <video
              className="w-full aspect-video"
              controls
              preload="metadata"
              poster="/logo.png"
            >
              <source src="/video.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>
          </div>
        </div>


      </div>
    </section>
  )
}

function Mic({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  )
}
