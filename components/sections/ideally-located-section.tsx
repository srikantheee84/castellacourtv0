"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { X } from "lucide-react"

export default function IdeallyLocatedSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-light mb-12 sm:mb-16 text-[#C19A50]">
          IDEALLY LOCATED
        </h2>

        {/* Map Image from Home Hero Section */}
        <div className="relative w-full mb-10 sm:mb-12">
          <div className="relative w-full aspect-[16/9] bg-white">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1q7kn5essNPOsnGLDqhQt3Y5CzbKAS.png"
              alt="Map showing Castella Court location"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* View Map Button with Dialog/Popup */}
        <div className="flex justify-center">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="bg-[#C19A50] hover:bg-[#A17A30] text-white border-none rounded-none px-8 py-4 text-lg font-light tracking-wider uppercase">
                VIEW MAP AREA
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] max-h-[90vh] p-0 overflow-hidden">
              <div className="relative w-full h-full">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-2 right-2 z-10 bg-white/80 p-1 rounded-full"
                  aria-label="Close"
                >
                  <X className="h-6 w-6 text-gray-800" />
                </button>
                <div className="w-full h-full overflow-auto p-1">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1q7kn5essNPOsnGLDqhQt3Y5CzbKAS.png"
                    alt="Map showing Castella Court location"
                    width={2000}
                    height={1500}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}

