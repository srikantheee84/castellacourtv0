"use client"

import { useEffect } from "react"
import FloorPlanDetail from "@/components/floor-plan-detail"

export default function MarbellaM1Page() {
  // Add scroll to top effect when the page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <FloorPlanDetail
      planId="M1"
      location="Courtyard"
      bedrooms={3}
      bathrooms="2.5"
      squareFeet={1850}
      accentColor="#3D7A7A"
      imagePath="/placeholder.svg?height=800&width=600&text=M1+Floor+Plan"
    />
  )
}

