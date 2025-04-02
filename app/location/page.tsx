import LocationHero from "@/components/sections/location-hero"
import LocationBenefitsSection from "@/components/sections/location-benefits-section"
import MuellerAttractionsSection from "@/components/sections/mueller-attractions-section"
import LocationAdvantageSection from "@/components/sections/location-advantage-section"
import IdeallyLocatedSection from "@/components/sections/ideally-located-section"
import ExperienceUltimateSection from "@/components/sections/experience-ultimate-section"

export default function LocationPage() {
  return (
    <main className="pt-24 sm:pt-28 md:pt-32 min-h-screen bg-[#faf8f3]">
      {/* Hero Section */}
      <LocationHero />

      {/* Location Benefits Section */}
      <LocationBenefitsSection />

      {/* Leander Attractions Section */}
      <MuellerAttractionsSection />

      {/* Location Advantage Section */}
      <LocationAdvantageSection />

      {/* Ideally Located Section */}
      <IdeallyLocatedSection />

      {/* Experience Ultimate Lifestyle Section */}
      <ExperienceUltimateSection />
    </main>
  )
}

