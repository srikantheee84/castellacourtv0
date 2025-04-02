import LifestyleHeroSection from "@/components/sections/lifestyle-hero-section"
import LifestyleDescriptionSection from "@/components/sections/lifestyle-description-section"
import LifestyleGallerySection from "@/components/sections/lifestyle-gallery-section"
import ExperienceUltimateSection from "@/components/sections/experience-ultimate-section"

export default function LifestylePage() {
  return (
    <main className="pt-24 sm:pt-28 md:pt-32 min-h-screen bg-[#faf8f3]">
      {/* Hero Section */}
      <LifestyleHeroSection />

      {/* Lifestyle Description Section */}
      <LifestyleDescriptionSection />

      {/* Lifestyle Gallery Section */}
      <LifestyleGallerySection />

      {/* Experience Ultimate Lifestyle Section */}
      <ExperienceUltimateSection />
    </main>
  )
}

