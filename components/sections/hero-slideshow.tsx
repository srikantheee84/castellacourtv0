"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export interface SlideImage {
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
  const [isLoading, setIsLoading] = useState<boolean[]>(new Array(images.length).fill(true))
  const [prevIndex, setPrevIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevIndex(currentIndex)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval, currentIndex])

  const goToSlide = (index: number) => {
    if (index !== currentIndex) {
      setPrevIndex(currentIndex)
      setCurrentIndex(index)
    }
  }

  const handleImageLoad = (index: number) => {
    setIsLoading(prev => {
      const newLoading = [...prev]
      newLoading[index] = false
      return newLoading
    })
  }

  return (
    <div className={`relative ${height} w-full overflow-hidden bg-gray-100`}>
      <style jsx global>{`
        @keyframes zoomIn {
          from {
            transform: scale(1.1);
          }
          to {
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .slide-transition {
          animation: fadeIn 1s ease-out, zoomIn 7s ease-out forwards;
        }
      `}</style>

      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            opacity: index === currentIndex ? 1 : 0,
            zIndex: index === currentIndex ? 1 : 0,
            visibility: index === currentIndex || index === prevIndex ? 'visible' : 'hidden',
          }}
        >
          {isLoading[index] && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="text-gray-500">Loading...</div>
            </div>
          )}
          
          {image.type === "logo" ? (
            <div className="w-full h-full flex items-center justify-center bg-[#faf8f3]">
              <div className="w-[80%] max-w-[800px] relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1000}
                  height={500}
                  className="w-full h-auto"
                  priority={index === 0}
                  onLoad={() => handleImageLoad(index)}
                  loading={index === 0 ? "eager" : "lazy"}
                  quality={90}
                />
              </div>
            </div>
          ) : (
            <div className={`relative w-full h-full ${index === currentIndex ? 'slide-transition' : ''}`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`${
                  image.type === "map" 
                    ? "object-contain bg-white" 
                    : "object-cover"
                }`}
                priority={index === 0}
                onLoad={() => handleImageLoad(index)}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="100vw"
                quality={90}
              />
              {image.type !== "map" && <div className="absolute inset-0 bg-black/30"></div>}
            </div>
          )}
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

