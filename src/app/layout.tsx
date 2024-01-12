import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const inter = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MicroTraks Ranch',
  description: 'Track your valuable exotics with MicroTraks Ranch.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
