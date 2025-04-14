"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import ExploreSection from "@/components/sections/explore-section"
import ExperienceUltimateSection from "@/components/sections/experience-ultimate-section"
import TeamContactSection from "@/components/sections/team-contact-section"

interface GalleryImage {
  src: string
  alt: string
}

// Image arrays
const residenceCategories = [
  { name: "Kitchen & Dining", images: [] },
  { name: "Living Areas", images: [] },
  { name: "Bedrooms", images: [] },
  { name: "Bathrooms", images: [] }
]

const lifestyleImages = [
  { src: "/placeholder.svg?height=600&width=600&text=Shopping", alt: "Shopping" },
  { src: "/placeholder.svg?height=600&width=600&text=Dining", alt: "Dining" },
  { src: "/placeholder.svg?height=600&width=600&text=Parks", alt: "Parks" },
  { src: "/placeholder.svg?height=600&width=600&text=Entertainment", alt: "Entertainment" },
]

export default function GalleryPage() {
  const [residenceImages, setResidenceImages] = useState<GalleryImage[]>([])
  const [communityImages, setCommunityImages] = useState<GalleryImage[]>([])
  const [isLoadingResidences, setIsLoadingResidences] = useState(true)
  const [isLoadingCommunity, setIsLoadingCommunity] = useState(true)

  // Load residence images
  useEffect(() => {
    async function loadImages() {
      try {
        setIsLoadingResidences(true)
        const response = await fetch('/api/gallery-images?category=residences')
        const images = await response.json()
        setResidenceImages(images)
      } catch (error) {
        console.error('Error loading residence images:', error)
      } finally {
        setIsLoadingResidences(false)
      }
    }

    loadImages()
  }, [])

  // Load community images
  useEffect(() => {
    async function loadImages() {
      try {
        setIsLoadingCommunity(true)
        const response = await fetch('/api/gallery-images?category=community')
        const images = await response.json()
        setCommunityImages(images)
      } catch (error) {
        console.error('Error loading community images:', error)
      } finally {
        setIsLoadingCommunity(false)
      }
    }

    loadImages()
  }, [])

  // Hash navigation
  useEffect(() => {
    const scrollToHash = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1)
        const element = document.getElementById(id)

        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" })
          }, 300)
        }
      }
    }

    scrollToHash()
    window.addEventListener("hashchange", scrollToHash)
    return () => window.removeEventListener("hashchange", scrollToHash)
  }, [])

  return (
    <main className="pt-24 sm:pt-28 md:pt-32 min-h-screen bg-[#faf8f3]">
      {/* Gallery Header Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Logo Circle - Smaller size */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-[#C19A50] flex items-center justify-center">
              <svg width="40%" height="40%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="10" width="5" height="10" fill="white" />
                <rect x="14" y="7" width="5" height="13" fill="white" />
                <rect x="6" y="12" width="1" height="1" fill="#C19A50" />
                <rect x="8" y="12" width="1" height="1" fill="#C19A50" />
                <rect x="6" y="14" width="1" height="1" fill="#C19A50" />
                <rect x="8" y="14" width="1" height="1" fill="#C19A50" />
                <rect x="6" y="16" width="1" height="1" fill="#C19A50" />
                <rect x="8" y="16" width="1" height="1" fill="#C19A50" />
                <rect x="16" y="9" width="1" height="1" fill="#C19A50" />
                <rect x="16" y="12" width="1" height="1" fill="#C19A50" />
                <rect x="16" y="15" width="1" height="1" fill="#C19A50" />
                <line x1="3" y1="20" x2="21" y2="20" stroke="white" strokeWidth="1" />
              </svg>
            </div>
          </div>

          <h1
            className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-[#333333] mb-12 max-w-2xl mx-auto"
            style={{
              fontFamily: "'Futura-Nueva', Futura, 'Trebuchet MS', Arial, sans-serif",
              letterSpacing: "0.01em",
            }}
          >
            Browse our gallery and find a variety of images of Castell Court residences, amenities, Leander lifestyle
            and more.
          </h1>
        </div>
      </section>

      {/* Explore Section from homepage */}
      <ExploreSection showHeading={false} />

      {/* RESIDENCES Section */}
      <section id="residences" className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="w-[95%] mx-auto">
          <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-light text-[#C19A50] mb-12 sm:mb-16">
            RESIDENCES
          </h2>

          {isLoadingResidences ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="aspect-square bg-gray-200 animate-pulse" />
              ))}
            </div>
          ) : residenceImages.length === 0 ? (
            <p className="text-center text-gray-500">No images available</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {residenceImages.map((image, index) => (
                <div key={index} className="aspect-square relative overflow-hidden group">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 text-sm sm:text-base">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* COMMUNITY Section */}
      <section id="community" className="py-16 sm:py-20 md:py-24 bg-[#faf8f3]">
        <div className="w-[95%] mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-light text-[#D35C37] mb-12 sm:mb-16">
            COMMUNITY
          </h2>

          {isLoadingCommunity ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="aspect-square bg-gray-200 animate-pulse" />
              ))}
            </div>
          ) : communityImages.length === 0 ? (
            <p className="text-center text-gray-500">No images available</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {communityImages.map((image, index) => (
                <div key={index} className="aspect-square relative overflow-hidden group">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 text-sm sm:text-base">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* LIFESTYLE Section */}
      <section id="lifestyle" className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="w-[95%] mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-light text-[#C19A50] mb-12 sm:mb-16">
            LIFESTYLE
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {lifestyleImages.map((image, index) => (
              <div key={index} className="overflow-hidden group">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 text-sm sm:text-base">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-white">
        <TeamContactSection />
        <ExperienceUltimateSection />
      </div>
    </main>
  )
}

