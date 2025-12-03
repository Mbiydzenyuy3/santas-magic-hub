import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Santa Magic',
  description:
    'A magical Santa-themed application with various holiday features'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
