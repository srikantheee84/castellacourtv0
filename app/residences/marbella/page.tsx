"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import MarbellaHeroSlideshow from "@/components/sections/marbella-hero-slideshow"
import BuildingInspiredSection from "@/components/sections/building-inspired-section"
import ExperienceUltimateSection from "@/components/sections/experience-ultimate-section"

export default function MarbellaPage() {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-24 sm:pt-28 md:pt-32 min-h-screen bg-[#faf8f3]">
      {/* Hero Slideshow */}
      <MarbellaHeroSlideshow />

      {/* Building Inspired Section */}
      <BuildingInspiredSection />

      {/* Marbella Floor Plans Section */}
      <section id="floor-plans" className="py-12 sm:py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto bg-[#faf8f3]">
        <div className="mb-10 sm:mb-12 md:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6">Floor Plans</h2>
          <div className="w-16 sm:w-20 h-1 bg-[#3D7A7A] mx-auto mb-6 sm:mb-8"></div>
        </div>

        {/* THE MARBELLA Header */}
        <div className="bg-[#3D7A7A] py-6 mb-16 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-light">THE MARBELLA</h3>
        </div>

        {/* Floor Plan Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 max-w-5xl mx-auto">
          {/* M1 Floor Plan */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96">
                <Image
                  src="/placeholder.svg?height=600&width=500&text=M1+Floor+Plan"
                  alt="M1 Floor Plan"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <h4 className="text-4xl sm:text-5xl font-light mb-3 text-[#333333]">M1</h4>
            <p className="text-lg sm:text-xl text-center mb-4">3 Bed | 2.5 Bath | Balcony | 1850 SqFt</p>

            <Link
              href="/residences/marbella/m1"
              className="text-[#3D7A7A] text-lg sm:text-xl font-medium hover:underline"
            >
              VIEW FLOOR PLAN
            </Link>
          </div>

          {/* M2 Floor Plan */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96">
                <Image
                  src="/placeholder.svg?height=600&width=500&text=M2+Floor+Plan"
                  alt="M2 Floor Plan"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <h4 className="text-4xl sm:text-5xl font-light mb-3 text-[#333333]">M2</h4>
            <p className="text-lg sm:text-xl text-center mb-4">3 Bed | 3 Bath | Balcony | 1950 SqFt</p>

            <Link
              href="/residences/marbella/m2"
              className="text-[#3D7A7A] text-lg sm:text-xl font-medium hover:underline"
            >
              VIEW FLOOR PLAN
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Ultimate Lifestyle Section */}
      <ExperienceUltimateSection />
    </main>
  )
}

