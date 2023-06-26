'use client'
import AppBar from './AppBar'
import './globals.css'
import { Inter } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
  session
}: {
  session: any
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <AppBar />
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
