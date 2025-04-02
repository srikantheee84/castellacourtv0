import Image from "next/image"

export default function LocationAdvantageSection() {
  return (
    <section className="relative w-full">
      {/* Full-width image container */}
      <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] overflow-hidden">
        {/* Background image */}
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-18%20at%206.35.17%E2%80%AFPM-MaybbPUuwhjSEgiIczfg1Dz31wTdvD.png"
          alt="Aerial view of Leander with city skyline in the background"
          fill
          className="object-cover"
          priority
        />

        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wider drop-shadow-lg">
            LOCATION
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl font-light italic drop-shadow-lg">like no other</p>
        </div>
      </div>
    </section>
  )
}

