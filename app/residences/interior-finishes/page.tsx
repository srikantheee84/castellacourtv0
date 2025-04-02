import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ExperienceUltimateSection from "@/components/sections/experience-ultimate-section"
import SectionHeader from "@/components/ui/section-header"

export default function InteriorFinishesPage() {
  return (
    <main className="pt-24 sm:pt-28 md:pt-32 min-h-screen bg-[#faf8f3]">
      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=Interior+Finishes"
          alt="Interior Finishes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </section>

      {/* Interior Finishes Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto bg-[#faf8f3]">
        <SectionHeader
          title="Interior Finishes"
          subtitle="Castell Court offers two distinct interior finish packages to suit your personal style. Choose between our warm and cool color schemes, both featuring premium materials and fixtures."
          accentColor="#C19A50"
        />

        {/* Interior Finish Option A - Warm */}
        <div className="mb-20">
          <div className="bg-[#C19A50] py-6 mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-light">OPTION A (WARM)</h2>
          </div>

          <div className="relative w-full max-w-4xl mx-auto">
            {/* Image placeholder for future upload */}
            <div className="aspect-[4/3] w-full bg-[#f2f0ed] border border-[#e6e6e6] flex items-center justify-center">
              <div className="text-[#999999] text-lg">Image will be uploaded here</div>
            </div>
          </div>
        </div>

        {/* Interior Finish Option B - Cool */}
        <div>
          <div className="bg-[#3D7A7A] py-6 mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-light">OPTION B (COOL)</h2>
          </div>

          <div className="relative w-full max-w-4xl mx-auto">
            {/* Image placeholder for future upload */}
            <div className="aspect-[4/3] w-full bg-[#f2f0ed] border border-[#e6e6e6] flex items-center justify-center">
              <div className="text-[#999999] text-lg">Image will be uploaded here</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl sm:text-3xl font-light mb-6">Schedule a Consultation</h3>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            Our design team is available to help you select the perfect interior finish package for your new home.
            Contact us to schedule a personal consultation.
          </p>
          <Link href="/contact">
            <Button className="bg-[#C19A50] hover:bg-[#A17A30] text-white border-none rounded-none px-8 py-4 text-lg font-light tracking-wider">
              CONTACT US
            </Button>
          </Link>
        </div>
      </section>

      {/* Experience Ultimate Lifestyle Section */}
      <ExperienceUltimateSection />
    </main>
  )
}

