import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Head from 'next/head'
import * as gtag from '../lib/gtag'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Shooketh – AI bot fine-tuned on Shakespeare's literary works",
  description:
    "Shooketh is an AI bot built with the Vercel AI SDK and fine-tuned on Shakespeare's literary works."
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
