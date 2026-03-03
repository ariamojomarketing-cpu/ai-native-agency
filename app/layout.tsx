import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ChatWidget from '../components/ChatWidget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Operations for STR Hosts | Mojo Manor Systems',
  description: 'Automated guest messaging, social media, review responses, and pricing. Powered by the same system running Mojo Manor.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="gradient-bg min-h-screen">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <main className="relative">
            {children}
          </main>
          <ChatWidget />
          <footer className="py-8 text-center text-gray-400 text-sm border-t border-gray-800 mt-20">
            <div className="container mx-auto px-4">
              <p>Built by the team behind Mojo Manor Waynesville • Contact: hello@mojomanorwaynesville.com</p>
              <p className="mt-2">© {new Date().getFullYear()} Mojo Manor Systems. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}