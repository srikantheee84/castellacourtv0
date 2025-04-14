"use client"

import { useState, useEffect } from "react"
import HeroSlideshow from "./hero-slideshow"
import type { SlideImage } from "./hero-slideshow"

export default function LocationHero() {
  const [images, setImages] = useState<SlideImage[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadImages() {
      try {
        setIsLoading(true)
        const response = await fetch('/api/location-images')
        const images = await response.json()
        setImages(images)
      } catch (error) {
        console.error('Error loading location images:', error)
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

