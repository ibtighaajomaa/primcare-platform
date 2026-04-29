"use client"

import { GraduationCap, Stethoscope, Code, Users, Github, Linkedin, Mail, type LucideIcon } from "lucide-react"
import Link from "next/link"
interface TeamMember {
  name: string
  role: string
  image?: string
  github?: string
  linkedin?: string
  email?: string
}

interface TeamGroup {
  title: string
  icon: LucideIcon
  members: TeamMember[]
}

const teamGroups: TeamGroup[] = [
  {
    title: "Encadrants Académiques",
    icon: GraduationCap,
    members: [
      { name: "Pr. Hanene Boussi", role: "", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-USwga8vFjcD9UDMMw8k2RXP2cPxQiC.png" },
      { name: "Dr. Chamseddine Barki", role: "", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-97LimHGMCfyDcEyAkv77c4AmHPvKEs.png" },
    ],
  },
  {
    title: "Encadrants Professionnels",
    icon: Stethoscope,
    members: [
      { name: "Pr. Chiheb Romdhani", role: "", image: "/chiheb.png" },
      { name: "Dr. Kaouther Nehdi", role: "", image: "/Kaouther.png" },
    ],
  },
  {
    title: "Encadrant Ingénieur",
    icon: Code,
    members: [{ name: "Firas Hajlaoui", role: "", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jijjEkfipT5MSLrN3ye3KAUOy5NDwq.png" }],
  },
  {
    title: "Étudiants",
    icon: Users,
    members: [
      { 
        name: "Ibtigha Jomaa", 
        role: "Développeur IA", 
        image: "/ibtigha.png",
        github: "https://github.com/ibtighaajomaa",
        linkedin: "https://www.linkedin.com/in/ibtighaa-jomaa-85b70239a/",
        email: "mailto:ibtighaa.jomaa@etudiant-istmt.utm.tn"
      },
      { name: "Hiba Trablsi", role: "Développeur Frontend", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aWrG4zgTnhaDkFQOMvoa6ofgBmXU9t.png" },
      { name: "Rached Hamemi", role: "Développeur Backend", image: "/rached.png" },
    ],
  },
]

export function TeamSection() {
  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            L&apos;Équipe
          </div>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Une équipe pluridisciplinaire
          </h2>
          <p className="text-pretty text-muted-foreground">
            Experts en développement, santé et intelligence artificielle unis pour transformer la médecine numérique en Tunisie.
          </p>
        </div>

        {/* Partner Logos */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-48 w-48 items-center justify-center rounded-2xl bg-white p-6 shadow-md border border-border/50">
              <img
                src="/logo1.png"
                alt="Université de Tunis El Manar"
                className="h-full w-full object-contain mix-blend-multiply"
              />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Université de Tunis El Manar</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-48 w-48 items-center justify-center rounded-2xl bg-white p-6 shadow-md border border-border/50">
              <img
                src="/logo2.png"
                alt="Institut Supérieur des Technologies Médicales de Tunis"
                className="h-full w-full object-contain mix-blend-multiply"
              />
            </div>
            <span className="text-sm font-medium text-muted-foreground">ISTMT</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-48 w-48 items-center justify-center rounded-2xl bg-white p-6 shadow-md border border-border/50">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Mgxlhr7RmCI4WYraJMHIlrjo8XirEm.png"
                alt="Ministère de la Santé - République Tunisienne"
                className="h-full w-full object-contain mix-blend-multiply"
              />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Ministere de la Sante</span>
          </div>
        </div>

        {/* Team Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamGroups.map((group, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <group.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-foreground">{group.title}</h3>
              </div>
              <div className="space-y-5">
                {group.members.map((member, mIndex) => (
                  <div key={mIndex} className="flex items-center gap-4">
                    {member.image ? (
                      <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full border-3 border-primary/20 bg-white p-1 shadow-lg">
                        <div className="h-full w-full overflow-hidden rounded-full bg-white">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-primary/20 bg-white text-base font-semibold text-primary shadow-lg">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">{member.name}</div>
                      {member.role && <div className="text-sm text-muted-foreground">{member.role}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
