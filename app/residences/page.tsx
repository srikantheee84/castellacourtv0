"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import ExperienceUltimateSection from "@/components/sections/experience-ultimate-section"
import ResidencesHero from "@/components/sections/residences-hero"
import ResidecesBuildingInspiredSection from "@/components/sections/residences-building-inspired-section"

export default function ResidencesPage() {
  // Function to handle hash navigation
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // Get the element with the ID matching the hash
      const element = document.getElementById(window.location.hash.substring(1))
      // If the element exists, scroll to it
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 300)
      }
    }
  }, [])

  return (
    <main className="pt-24 sm:pt-28 md:pt-32 min-h-screen bg-[#faf8f3]">
      {/* Hero Section */}
      <ResidencesHero />

      {/* Building Inspired Section */}
      <ResidecesBuildingInspiredSection />

      {/* THE VALENCIA Section */}
      <section id="valencia-plans" className="py-12 sm:py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto bg-[#faf8f3]">
        <div className="bg-[#D35C37] py-6 mb-16 text-center">
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
      </section>

      {/* THE MARBELLA Section */}
      <section id="marbella-plans" className="py-12 sm:py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto bg-[#faf8f3]">
        <div className="bg-[#3D7A7A] py-6 mb-16 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-light">THE MARBELLA</h3>
        </div>

        {/* Marbella Floor Plan Options */}
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

      {/* INTERIOR FINISHES Section */}
      <section id="interior-finishes" className="py-12 sm:py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto bg-[#faf8f3]">
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

      {/* Experience Ultimate Lifestyle Section */}
      <ExperienceUltimateSection />
    </main>
  )
}

