import './styles/globals.scss'
import 'hpm-ui/styles'
import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'nextjs app title',
  description: 'nextjs app description'
}

export const viewport: Viewport = {
  width: 'device-width',
  height: 'device-height',
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <section className="root-layout">
          {children}
        </section>
      </body>
    </html>
  )
}
