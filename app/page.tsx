import HeroSection from "@/components/sections/hero-section"
import IntroductionSection from "@/components/sections/introduction-section"
import BuildingPurposeSection from "@/components/sections/building-purpose-section"
import LiveWorkPlaySection from "@/components/sections/live-work-play-section"
import ModernTownhomeSection from "@/components/sections/modern-townhome-section"
import ExploreSection from "@/components/sections/explore-section"
import BestOfLeanderSection from "@/components/sections/best-of-leander-section"
import ContactSection from "@/components/sections/contact-section"
import TeamContactSection from "@/components/sections/team-contact-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf8f3] pt-20 md:pt-32">
      <HeroSection />
      <IntroductionSection />
      <BuildingPurposeSection />
      <LiveWorkPlaySection />
      <ModernTownhomeSection />
      <ExploreSection />
      <BestOfLeanderSection />
      <div className="bg-white">
        <TeamContactSection />
      </div>
      <ContactSection />
    </div>
  )
}

