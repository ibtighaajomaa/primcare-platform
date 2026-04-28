"use client"

import { Button } from "@/components/ui/button"
import { Play, FileText, Video, Eye } from "lucide-react"

export function DemoSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
            Démo Interactive
          </div>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Découvrez PrimCare en action
          </h2>
          <p className="text-pretty text-muted-foreground">
            Une démonstration vaut mille mots. Explorez nos modules clés et voyez comment PrimCare transforme votre pratique quotidienne.
          </p>
        </div>

        {/* Demo preview mockup */}
        <div className="mt-12 mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-muted p-2">
            {/* Browser bar */}
            <div className="flex items-center gap-2 rounded-t-2xl bg-background px-4 py-3 border-b border-border">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-destructive/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-400/60" />
                <div className="h-3 w-3 rounded-full bg-green-400/60" />
              </div>
              <div className="ml-4 flex-1 rounded-lg bg-muted px-4 py-1.5 text-sm text-muted-foreground">
                app.primcare.tn/consultation
              </div>
            </div>

            {/* App interface mockup */}
            <div className="bg-background p-6">
              <div className="grid gap-6 lg:grid-cols-3">
                {/* Sidebar */}
                <div className="rounded-2xl border border-border bg-muted p-4">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20" />
                    <div>
                      <div className="font-medium text-foreground">Patient: Ahmed B.</div>
                      <div className="text-xs text-muted-foreground">Consultation en cours</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-lg bg-background p-3 text-sm">
                      <span className="font-medium text-primary">Motif:</span>
                      <span className="ml-2 text-muted-foreground">Contrôle diabète</span>
                    </div>
                    <div className="rounded-lg bg-background p-3 text-sm">
                      <span className="font-medium text-secondary">HbA1c:</span>
                      <span className="ml-2 text-muted-foreground">7.2%</span>
                    </div>
                  </div>
                </div>

                {/* Main content */}
                <div className="lg:col-span-2 rounded-2xl border border-border bg-accent/30 p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Mic className="h-4 w-4" />
                      </div>
                      <span className="font-medium text-foreground">Agent Scribe Actif</span>
                      <span className="flex h-2 w-2 animate-pulse rounded-full bg-green-500" />
                    </div>
                    <div className="text-xs text-muted-foreground">Transcription SOAP</div>
                  </div>

                  <div className="space-y-3 rounded-xl bg-background p-4">
                    <div>
                      <span className="text-xs font-semibold text-primary">S - Subjectif</span>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Patient signale fatigue persistante depuis 2 semaines...
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-secondary">O - Objectif</span>
                      <p className="mt-1 text-sm text-muted-foreground">
                        TA: 130/85 mmHg, Poids: 78kg, IMC: 26.2
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary">A - Analyse</span>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Diabète type 2 équilibré (E11.9 - CIM-11)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Video className="h-6 w-6" />
            </div>
            <div>
              <div className="font-medium text-foreground">Téléconsultation</div>
              <div className="text-sm text-muted-foreground">Jitsi WebRTC</div>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <div className="font-medium text-foreground">Notes SOAP</div>
              <div className="text-sm text-muted-foreground">Auto-générées</div>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Eye className="h-6 w-6" />
            </div>
            <div>
              <div className="font-medium text-foreground">Rétinopathie</div>
              <div className="text-sm text-muted-foreground">IA Prédictive</div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
            <Play className="h-4 w-4" />
            Voir la démo complète
          </Button>
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
