export default function BestOfLeanderSection() {
  return (
    <section className="relative h-[30vh] sm:h-[40vh] md:h-[50vh] w-full overflow-hidden">
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0211-ZdIKN6O8OHaGCwI1KbTKv6qoBaFvyf.jpeg"
        alt="Leander cityscape"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-light mb-2 text-center tracking-wider px-4">
          THE BEST OF LEANDER
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-center">at your door</p>
      </div>
    </section>
  )
}

