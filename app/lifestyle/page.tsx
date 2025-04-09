import LifestyleHero from "@/components/sections/lifestyle-hero"
import LifestyleGallerySection from "@/components/sections/lifestyle-gallery-section"
import ExperienceUltimateSection from "@/components/sections/experience-ultimate-section"
import TeamContactSection from "@/components/sections/team-contact-section"

export default function LifestylePage() {
  return (
    <main className="pt-24 sm:pt-28 md:pt-32 min-h-screen bg-[#faf8f3]">
      {/* Hero Section */}
      <LifestyleHero />

      {/* Gallery Section */}
      <LifestyleGallerySection />

      <div className="bg-white">
        <TeamContactSection />
        <ExperienceUltimateSection />
      </div>
    </main>
  )
}

