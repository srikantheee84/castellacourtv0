"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import ValenciaHeroSlideshow from "@/components/sections/valencia-hero-slideshow"
import BuildingInspiredSection from "@/components/sections/building-inspired-section"
import ExperienceUltimateSection from "@/components/sections/experience-ultimate-section"

export default function ValenciaPage() {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-24 sm:pt-28 md:pt-32 min-h-screen bg-[#faf8f3]">
      {/* Hero Slideshow */}
      <ValenciaHeroSlideshow />

      {/* Building Inspired Section */}
      <BuildingInspiredSection />

      {/* Valencia Floor Plans Section */}
      <section id="floor-plans" className="py-12 sm:py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto bg-[#faf8f3]">
        <div className="mb-10 sm:mb-12 md:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6">Floor Plans</h2>
          <div className="w-16 sm:w-20 h-1 bg-[#d35c37] mx-auto mb-6 sm:mb-8"></div>
        </div>

        {/* THE VALENCIA Header */}
        <div id="valencia-plans" className="bg-[#D35C37] py-6 mb-16 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-light">THE VALENCIA</h3>
        </div>

        {/* Floor Plan Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 max-w-5xl mx-auto">
          {/* V1 Floor Plan */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96">
                <Image
                  src="/placeholder.svg?height=600&width=500&text=V1+Floor+Plan"
                  alt="V1 Floor Plan"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <h4 className="text-4xl sm:text-5xl font-light mb-3 text-[#333333]">V1</h4>
            <p className="text-lg sm:text-xl text-center mb-4">3 Bed | 2.5 Bath | Balcony | 1448 SqFt</p>

            <Link
              href="/residences/valencia/v1"
              className="text-[#D35C37] text-lg sm:text-xl font-medium hover:underline"
            >
              VIEW FLOOR PLAN
            </Link>
          </div>

          {/* V2 Floor Plan */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96">
                <Image
                  src="/placeholder.svg?height=600&width=500&text=V2+Floor+Plan"
                  alt="V2 Floor Plan"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <h4 className="text-4xl sm:text-5xl font-light mb-3 text-[#333333]">V2</h4>
            <p className="text-lg sm:text-xl text-center mb-4">3 Bed | 2.5 Bath | Balcony | 1448 SqFt</p>

            <Link
              href="/residences/valencia/v2"
              className="text-[#D35C37] text-lg sm:text-xl font-medium hover:underline"
            >
              VIEW FLOOR PLAN
            </Link>
          </div>
        </div>

        {/* INTERIOR FINISHES Section - Moved outside of Floor Plans */}
        <section id="interior-finishes" className="mt-24 sm:mt-32">
          <div className="bg-[#C19A50] py-6 mb-16 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-light">INTERIOR FINISHES</h3>
          </div>

          {/* Interior Finish Option A - Warm */}
          <div className="mb-20">
            <h4 className="text-2xl sm:text-3xl font-light mb-8 text-center text-[#333333]">
              Interior Finish Option A (Warm)
            </h4>

            <div className="relative w-full max-w-4xl mx-auto">
              {/* Image placeholder for future upload */}
              <div className="aspect-[4/3] w-full bg-[#f2f0ed] border border-[#e6e6e6] flex items-center justify-center">
                <div className="text-[#999999] text-lg">Image will be uploaded here</div>
              </div>
            </div>
          </div>

          {/* Interior Finish Option B - Cool */}
          <div>
            <h4 className="text-2xl sm:text-3xl font-light mb-8 text-center text-[#333333]">
              Interior Finish Option B (Cool)
            </h4>

            <div className="relative w-full max-w-4xl mx-auto">
              {/* Image placeholder for future upload */}
              <div className="aspect-[4/3] w-full bg-[#f2f0ed] border border-[#e6e6e6] flex items-center justify-center">
                <div className="text-[#999999] text-lg">Image will be uploaded here</div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Experience Ultimate Lifestyle Section */}
      <ExperienceUltimateSection />
    </main>
  )
}

