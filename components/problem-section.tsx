import { AlertTriangle, Clock, Link2Off, FileX } from "lucide-react"

const problems = [
  {
    icon: FileX,
    title: "Classeurs numériques passifs",
    description:
      "Vos dossiers médicaux actuels vous obligent à chercher l'information au lieu de vous la présenter intelligemment.",
  },
  {
    icon: Link2Off,
    title: "Silos de données",
    description:
      "Des logiciels 'en vase clos' qui refusent de communiquer entre eux, faute d'adopter le standard HL7 FHIR.",
  },
  {
    icon: Clock,
    title: "Temps perdu",
    description:
      "Condamné à la ressaisie manuelle, vous perdez un temps inestimable en tâches administratives répétitives.",
  },
  {
    icon: AlertTriangle,
    title: "Défis techniques",
    description:
      "La téléconsultation et le télédépistage deviennent des défis complexes au lieu d'être des prolongements naturels de votre pratique.",
  },
]

export function ProblemSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Nous savons que votre temps est précieux.
          </h2>
          <p className="text-xl font-medium text-primary">
            Vos logiciels actuels l&apos;ont oublié.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-muted-foreground">
            Chaque jour, vous faites face à une réalité frustrante : la technologie dresse un mur entre vous et vos patients.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border bg-background p-6 transition-all hover:border-destructive/30 hover:shadow-lg hover:shadow-destructive/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <problem.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">{problem.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-primary/20 bg-muted p-8 text-center">
          <p className="text-lg font-medium text-foreground">
            Vous n&apos;avez pas besoin d&apos;un énième gadget prédictif.
          </p>
          <p className="mt-2 text-muted-foreground">
            Vous avez besoin d&apos;une solution qui <strong className="text-primary">agit de manière autonome</strong>, brise les silos de données et vous rend votre <strong className="text-primary">liberté de soigner</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}
