import { put } from '@vercel/blob';
import { readdirSync, readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';

// Define the folder structure
const FOLDER_STRUCTURE = {
  home: {
    hero: 'Images for homepage hero slideshow',
    features: 'Feature section images',
    amenities: 'Amenity highlights'
  },
  residences: {
    interiors: 'Interior shots of units',
    floorplans: 'Floor plan images',
    finishes: 'Interior finish options'
  },
  gallery: {
    community: 'Community and common area photos',
    amenities: 'Amenity space photos',
    lifestyle: 'Lifestyle and neighborhood photos'
  },
  location: {
    maps: 'Location and area maps',
    attractions: 'Nearby attractions',
    neighborhood: 'Neighborhood photos'
  },
  lifestyle: {
    activities: 'Local activity photos',
    dining: 'Restaurant and dining photos',
    recreation: 'Recreation and entertainment'
  },
  team: {
    members: 'Team member photos',
    partners: 'Partner logos and images'
  }
};

async function uploadImage(filePath, section, subsection) {
  const buffer = readFileSync(filePath);
  const fileName = `${section}/${subsection}/${filePath.split('/').pop()}`;
  
  try {
    const blob = await put(fileName, buffer, {
      access: 'public',
      addRandomSuffix: false
    });
    
    console.log(`✓ Uploaded ${fileName} to ${blob.url}`);
    return blob.url;
  } catch (error) {
    console.error(`✕ Failed to upload ${fileName}:`, error);
    return null;
  }
}

async function uploadImages() {
  const baseDir = join(process.cwd(), 'public', 'images');
  const uploadedUrls = {};

  // Create the base directory if it doesn't exist
  if (!existsSync(baseDir)) {
    console.log('Creating base image directory...');
    mkdir(baseDir);
  }

  // Process each section
  for (const [section, subsections] of Object.entries(FOLDER_STRUCTURE)) {
    uploadedUrls[section] = {};
    
    for (const [subsection, description] of Object.entries(subsections)) {
      const sectionDir = join(baseDir, section, subsection);
      
      if (existsSync(sectionDir)) {
        console.log(`\nProcessing ${section}/${subsection} (${description}):`);
        const files = readdirSync(sectionDir);
        uploadedUrls[section][subsection] = [];

        for (const file of files) {
          if (file.match(/\.(jpg|jpeg|png|gif|svg|webp)$/i)) {
            const filePath = join(sectionDir, file);
            const url = await uploadImage(filePath, section, subsection);
            if (url) {
              uploadedUrls[section][subsection].push({
                file,
                url
              });
            }
          }
        }
      } else {
        console.log(`\nSkipping ${section}/${subsection} - directory not found`);
      }
    }
  }

  // Save the URLs to a JSON file for reference
  const urlsFile = join(process.cwd(), 'public', 'image-urls.json');
  writeFileSync(urlsFile, JSON.stringify(uploadedUrls, null, 2));
  console.log(`\nImage URLs saved to ${urlsFile}`);
}

uploadImages().catch(console.error); 