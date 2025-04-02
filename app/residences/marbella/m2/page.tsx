"use client"

import { useEffect } from "react"
import FloorPlanDetail from "@/components/floor-plan-detail"

export default function MarbellaM2Page() {
  // Add scroll to top effect when the page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <FloorPlanDetail
      planId="M2"
      location="Courtyard"
      bedrooms={3}
      bathrooms="3"
      squareFeet={1950}
      accentColor="#3D7A7A"
      imagePath="/placeholder.svg?height=800&width=600&text=M2+Floor+Plan"
    />
  )
}

