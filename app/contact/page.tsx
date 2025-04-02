"use client"

import { useEffect } from "react"
import ContactCTASection from "@/components/sections/contact-cta-section"
import ExperienceUltimateSection from "@/components/sections/experience-ultimate-section"

export default function ContactPage() {
  // Ensure proper mounting
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-24 sm:pt-28 md:pt-32 pb-0 min-h-screen bg-[#faf8f3] mb-0">
      <ContactCTASection />
      <div className="bg-white">
        <ExperienceUltimateSection />
      </div>
    </main>
  )
}

