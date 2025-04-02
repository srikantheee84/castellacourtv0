"use client"

import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Add a scroll restoration component to ensure pages start at the top
import { useEffect } from "react"
import { usePathname } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })

function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          <ScrollToTop />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

