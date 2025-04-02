import type React from "react"
import ClientLayout from "./ClientLayout"

export const metadata = {
  title: "Castella Court - Luxury Residences",
  description: "Experience luxury living at Castella Court, a premier residential community.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}



import './globals.css'