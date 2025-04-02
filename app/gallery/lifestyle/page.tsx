"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function GalleryLifestyleRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the gallery page and scroll to the lifestyle section
    router.push("/gallery#lifestyle")
  }, [router])

  return null
}

