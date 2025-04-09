import TeamIntroSection from "@/components/sections/team-intro-section"
import TeamPartnersSection from "@/components/sections/team-partners-section"
import TeamPhotoSection from "@/components/sections/team-photo-section"
import TeamContactSection from "@/components/sections/team-contact-section"
import ExperienceUltimateSection from "@/components/sections/experience-ultimate-section"

export default function TeamPage() {
  return (
    <main className="pt-24 sm:pt-28 md:pt-32 min-h-screen bg-[#faf8f3]">
      {/* Team Intro Section */}
      <TeamIntroSection />

      {/* Team Partners Section */}
      <TeamPartnersSection />

      {/* Team Photo Section */}
      <TeamPhotoSection />

      <div className="bg-white">
        {/* Team Contact Section */}
        <TeamContactSection />

        {/* Experience Ultimate Lifestyle Section */}
        <ExperienceUltimateSection />
      </div>
    </main>
  )
}

