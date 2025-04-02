"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function GalleryResidencesRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the gallery page and scroll to the residences section
    router.push("/gallery#residences")
  }, [router])

  return null
}

