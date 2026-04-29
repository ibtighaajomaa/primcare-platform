import { Github, Linkedin, Mail, Heart, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FooterSection() {
  return (
    <footer className="border-t border-border bg-background">


      {/* Footer Links */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-xl font-bold">
              <img src="/logo.png" alt="PrimCare Logo" className="h-8 w-auto object-contain" />
              <span className="text-foreground">PrimCare</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Le premier Dossier Médical Intelligent propulsé par l&apos;IA. Interopérabilité FHIR, Agent Scribe, Téléconsultation et Télédépistage au service des professionnels de santé tunisiens.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/ibtighaajomaa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ibtighaa-jomaa-85b70239a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-[#0A66C2] hover:text-[#0A66C2]"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="mailto:ibtighaa.jomaa@etudiant-istmt.utm.tn"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-[#EA4335]"
              >
                <Mail className="h-5 w-5" />
                ibtighaa.jomaa@etudiant-istmt.utm.tn
              </a>
              <a
                href="tel:21866834"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-5 w-5" />
                21866834
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Solution</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Agent IA Scribe
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Interopérabilité FHIR
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Téléconsultation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Télédépistage
                </a>
              </li>
            </ul>
          </div>


        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PrimCare. Projet académique ISTMT - Université de Tunis El Manar.
          </p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Fait avec <Heart className="h-4 w-4 text-destructive" /> en Tunisie
          </p>
        </div>
      </div>
    </footer>
  )
}
