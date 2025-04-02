import HeroSlideshow from "./hero-slideshow"

export default function ValenciaHeroSlideshow() {
  const images = [
    {
      src: "/placeholder.svg?height=1080&width=1920&text=Valencia+Living+Room",
      alt: "Valencia Living Room",
    },
    {
      src: "/placeholder.svg?height=1080&width=1920&text=Valencia+Kitchen",
      alt: "Valencia Kitchen",
    },
    {
      src: "/placeholder.svg?height=1080&width=1920&text=Valencia+Bedroom",
      alt: "Valencia Bedroom",
    },
    {
      src: "/placeholder.svg?height=1080&width=1920&text=Valencia+Bathroom",
      alt: "Valencia Bathroom",
    },
  ]

  return <HeroSlideshow images={images} />
}

