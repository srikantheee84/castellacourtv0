"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function GalleryCommunityRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the gallery page and scroll to the community section
    router.push("/gallery#community")
  }, [router])

  return null
}

