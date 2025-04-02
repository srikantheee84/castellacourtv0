"use client"

import { useEffect } from "react"
import FloorPlanDetail from "@/components/floor-plan-detail"

export default function ValenciaV2Page() {
  // Add scroll to top effect when the page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <FloorPlanDetail
      planId="V2"
      location="Street"
      bedrooms={3}
      bathrooms="2.5"
      squareFeet={1448}
      accentColor="#D35C37"
      imagePath="/placeholder.svg?height=800&width=600&text=V2+Floor+Plan"
    />
  )
}

