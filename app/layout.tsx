import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ChatWidget from '../components/ChatWidget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Apex AI Labs — AI Systems for Modern Business',
  description: 'Apex AI Labs builds and operates AI systems for businesses that are done leaving money on the table. The same AI that runs our agency can run yours.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#0a0a0f]`}>
        <main>{children}</main>
        <ChatWidget />
      </body>
    </html>
  )
}
