import Image from "next/image"

export default function ResidencesHero() {
  return (
    <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] w-full overflow-hidden">
      <Image
        src="/placeholder.svg?height=1080&width=1920&text=Residences"
        alt="Castella Court Residences"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40"></div>
    </section>
  )
}

