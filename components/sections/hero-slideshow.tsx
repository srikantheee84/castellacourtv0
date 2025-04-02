"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface SlideImage {
  src: string
  alt: string
  type?: "image" | "map" | "logo"
}

interface HeroSlideshowProps {
  images: SlideImage[]
  height?: string
  interval?: number
}

export default function HeroSlideshow({
  images,
  height = "h-[60vh] sm:h-[70vh] md:h-[80vh]",
  interval = 6000,
}: HeroSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  const transitionToNextSlide = (nextIndex) => {
    setPrevIndex(currentIndex)
    setTransitioning(true)
    setCurrentIndex(nextIndex)

    // Reset transitioning state after animation completes
    setTimeout(() => {
      setTransitioning(false)
    }, 1500)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % images.length
      transitionToNextSlide(nextIndex)
    }, interval)

    return () => clearTimeout(timer)
  }, [currentIndex, images.length, interval])

  // Determine transition effect based on indices
  const getTransitionEffect = (index) => {
    if (!transitioning) return {}

    if (index === currentIndex) {
      // Incoming slide effect
      return {
        transform: "scale(1.05) translateX(0)",
        animation: "slideIn 1.5s ease-out forwards",
      }
    } else if (index === prevIndex) {
      // Outgoing slide effect
      return {
        transform: "scale(1) translateX(0)",
        animation: "slideOut 1.5s ease-out forwards",
      }
    }

    return {}
  }

  return (
    <div className={`relative ${height} w-full overflow-hidden`}>
      <style jsx global>{`
        @keyframes slideIn {
          0% { transform: scale(1.1) translateX(5%); opacity: 0; }
          100% { transform: scale(1) translateX(0); opacity: 1; }
        }
        
        @keyframes slideOut {
          0% { transform: scale(1) translateX(0); opacity: 1; }
          100% { transform: scale(0.95) translateX(-5%); opacity: 0; }
        }
      `}</style>

      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity ${
            index === currentIndex || index === prevIndex ? "block" : "hidden"
          }`}
          style={{
            opacity: index === currentIndex || (transitioning && index === prevIndex) ? 1 : 0,
            zIndex: index === currentIndex ? 2 : index === prevIndex ? 1 : 0,
            ...getTransitionEffect(index),
          }}
        >
          {image.type === "logo" ? (
            <div className="w-full h-full flex items-center justify-center bg-[#faf8f3]">
              <div className="w-[80%] max-w-[800px] relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={1000}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          ) : (
            <>
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className={`${image.type === "map" ? "object-contain bg-white" : "object-cover"}`}
                priority={index === 0}
              />
              {image.type !== "map" && <div className="absolute inset-0 bg-black/30"></div>}
            </>
          )}
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => transitionToNextSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

