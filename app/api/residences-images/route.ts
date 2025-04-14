import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  const heroDir = path.join(process.cwd(), 'public', 'images', 'residences', 'hero')
  const files = fs.readdirSync(heroDir)
  
  // Group files by their base name (without extension)
  const fileGroups = files.reduce((acc, file) => {
    const baseName = file.split('.')[0]
    if (!acc[baseName]) {
      acc[baseName] = []
    }
    acc[baseName].push(file)
    return acc
  }, {} as Record<string, string[]>)

  // For each group, prefer PNG over JPG
  const selectedFiles = Object.values(fileGroups).map(group => {
    const png = group.find(file => file.endsWith('.png'))
    return png || group[0]
  })

  const images = selectedFiles
    .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
    .map(file => ({
      src: `/images/residences/hero/${file}`,
      alt: file.split('.')[0].split('-').join(' '),
      type: "image"
    }))

  return NextResponse.json(images)
} 