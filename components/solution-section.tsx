import { Mic, Globe, Monitor } from "lucide-react"

const features = [
  {
    icon: Mic,
    title: "Agent IA Scribe",
    subtitle: "L'expérience \"Zéro-Clic\"",
    description: "Retrouvez le plaisir de regarder votre patient, l'IA s'occupe de la paperasse.",
    highlights: [
      "Dictée et transcription en temps réel avec accord du patient",
      "Structuration automatique au format SOAP (Subjectif, Objectif, Analyse, Plan)",
      "Codage invisible vers CIM-11 et LOINC",
    ],
    color: "primary" as const,
  },
  {
    icon: Globe,
    title: "Interopérabilité Native",
    subtitle: "La fin des silos de données",
    description: "Votre logiciel parle enfin la même langue que le reste du monde médical.",
    highlights: [
      "100% construit sur le standard FHIR R4/R5",
      "Connexion fluide avec laboratoires et Dossier National",
      "API ouverte pour une intégration sans friction",
    ],
    color: "secondary" as const,
  },
  {
    icon: Monitor,
    title: "Télémédecine Augmentée",
    subtitle: "Sans limites",
    description: "La médecine à distance, fluide et augmentée par la technologie.",
    highlights: [
      "Visioconférence native Jitsi WebRTC intégrée",
      "Agent Scribe actif pendant les téléconsultations",
      "Télédépistage rétinopathie diabétique avec IA prédictive",
    ],
    color: "primary" as const,
  },
]

export function SolutionSection() {
  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            La Solution
          </div>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Le premier Dossier Médical Intelligent qui travaille pour vous
          </h2>
          <p className="text-pretty text-muted-foreground">
            Conçue autour des derniers standards mondiaux d&apos;interopérabilité et propulsée par une Intelligence Artificielle &quot;Agentique&quot;, notre plateforme transforme votre pratique au quotidien.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-border bg-background p-8 transition-all hover:shadow-xl"
            >
              {/* Gradient accent */}
              <div
                className={`absolute top-0 left-0 h-1 w-full ${
                  feature.color === "primary" ? "bg-primary" : "bg-secondary"
                }`}
              />

              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${
                  feature.color === "primary"
                    ? "bg-primary/10 text-primary"
                    : "bg-secondary/10 text-secondary"
                }`}
              >
                <feature.icon className="h-7 w-7" />
              </div>

              <div className="mb-2 text-sm font-medium text-muted-foreground">
                {feature.subtitle}
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">{feature.title}</h3>
              <p className="mb-6 text-muted-foreground">{feature.description}</p>

              <ul className="space-y-3">
                {feature.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-1.5 flex h-2 w-2 shrink-0 rounded-full ${
                        feature.color === "primary" ? "bg-primary" : "bg-secondary"
                      }`}
                    />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
