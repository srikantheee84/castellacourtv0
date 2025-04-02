import HeroSlideshow from "./hero-slideshow"

export default function MarbellaHeroSlideshow() {
  const images = [
    {
      src: "/placeholder.svg?height=1080&width=1920&text=Marbella+Living+Room",
      alt: "Marbella Living Room",
    },
    {
      src: "/placeholder.svg?height=1080&width=1920&text=Marbella+Kitchen",
      alt: "Marbella Kitchen",
    },
    {
      src: "/placeholder.svg?height=1080&width=1920&text=Marbella+Bedroom",
      alt: "Marbella Bedroom",
    },
    {
      src: "/placeholder.svg?height=1080&width=1920&text=Marbella+Bathroom",
      alt: "Marbella Bathroom",
    },
  ]

  return <HeroSlideshow images={images} />
}

