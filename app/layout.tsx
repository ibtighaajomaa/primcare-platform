import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'PrimCare - Le Premier Dossier Médical Intelligent',
  description: 'PrimCare: Dossier Médical Informatisé propulsé par l\'IA. Interopérabilité FHIR, Agent Scribe, Téléconsultation et Télédépistage.',
  generator: 'v0.app',
  icons: {
    icon: '/logo.png?v=2',
    apple: '/logo.png?v=2',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
