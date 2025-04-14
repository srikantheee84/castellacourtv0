import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const category = searchParams.get('category')

  if (!category) {
    return NextResponse.json({ error: 'Category parameter is required' }, { status: 400 })
  }

  const galleryDir = path.join(process.cwd(), 'public', 'images', 'gallery', category)

  try {
    if (!fs.existsSync(galleryDir)) {
      return NextResponse.json([])
    }

    const files = fs.readdirSync(galleryDir)
    
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
        src: `/images/gallery/${category}/${file}`,
        alt: file.split('.')[0].split('-').join(' '),
      }))

    return NextResponse.json(images)
  } catch (error) {
    console.error('Error reading gallery directory:', error)
    return NextResponse.json({ error: 'Failed to read gallery images' }, { status: 500 })
  }
} 