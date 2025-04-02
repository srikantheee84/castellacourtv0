import HeroSlideshow from "./hero-slideshow"

export default function HeroSection() {
  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0211-ZdIKN6O8OHaGCwI1KbTKv6qoBaFvyf.jpeg",
      alt: "Castella Court exterior view",
      type: "image",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0215-mgqYZ1S1QTyVeVZaPgHBhCPi9JVK9O.jpeg",
      alt: "Aerial view of Castella Court",
      type: "image",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1q7kn5essNPOsnGLDqhQt3Y5CzbKAS.png",
      alt: "Map showing Castella Court location",
      type: "map",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Castell%20Court-poR7demx6FAWSYeSFsEaDUNmy0UHdk.svg",
      alt: "Castella Court Logo",
      type: "logo",
    },
  ]

  return <HeroSlideshow images={images} />
}

