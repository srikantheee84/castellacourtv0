"use client"

import { useEffect, useState } from "react"
import HeroSlideshow, { SlideImage } from "./hero-slideshow"

export default function HeroSection() {
  const [images, setImages] = useState<SlideImage[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadImages() {
      try {
        setIsLoading(true)
        // Fetch hero images from the API
        const response = await fetch('/api/hero-images')
        const heroImages = await response.json()

        // Add the map and logo
        const allImages: SlideImage[] = [
          ...heroImages,
          {
            src: "/images/location/location-map.png",
            alt: "Map showing Castella Court location",
            type: "map",
          },
          {
            src: "/images/castell-court-logo.svg",
            alt: "Castella Court Logo",
            type: "logo",
          },
        ]

        setImages(allImages)
      } catch (error) {
        console.error('Error loading hero images:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadImages()
  }, [])

  if (isLoading || images.length === 0) {
    return (
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] w-full bg-gray-100 animate-pulse flex items-center justify-center">
        <div className="text-gray-400">Loading...</div>
      </div>
    )
  }

  return <HeroSlideshow images={images} />
}

