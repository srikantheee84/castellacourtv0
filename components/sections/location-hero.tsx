"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function LocationHero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [
    {
      id: "slide1",
      title: "GATEWAY TO LEANDER",
    },
    {
      id: "slide2",
      title: "HEART OF LEANDER",
    },
    {
      id: "slide3",
      title: "PERFECTLY POSITIONED",
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 6000)

    return () => clearTimeout(timer)
  }, [currentIndex, slides.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % slides.length
    setCurrentIndex(newIndex)
  }

  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] w-full overflow-hidden">
      {/* Slideshow */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          } bg-gray-300 flex items-center justify-center`}
        >
          {/* Placeholder content */}
          <div className="text-center p-6 bg-black/30 w-full h-full flex flex-col items-center justify-center">
            <div className="mb-4 text-white/70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-wider text-center px-4 drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-white/80 mt-4 max-w-md">Slide {index + 1}: Add your hero image here</p>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

