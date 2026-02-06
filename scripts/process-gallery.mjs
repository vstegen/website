import fs from 'fs/promises'
import path from 'path'
import sharp from 'sharp'

const GALLERY_DIR = path.resolve('public/gallery')
const ORIGINALS_DIR = path.join(GALLERY_DIR, 'originals')
const THUMBNAILS_DIR = path.join(GALLERY_DIR, 'thumbnails')
const FULL_DIR = path.join(GALLERY_DIR, 'full')
const METADATA_PATH = path.resolve('src/lib/gallery-data.json')

const THUMBNAIL_WIDTH = 640
const THUMBNAIL_QUALITY = 80
const FULL_WIDTH = 1920
const FULL_QUALITY = 85
const BLUR_WIDTH = 20

const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.tiff']

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true })
}

async function generateBlurDataUrl(inputPath) {
  const buffer = await sharp(inputPath)
    .resize(BLUR_WIDTH)
    .webp({ quality: 20 })
    .toBuffer()
  return `data:image/webp;base64,${buffer.toString('base64')}`
}

async function processImage(filename) {
  const inputPath = path.join(ORIGINALS_DIR, filename)
  const nameWithoutExt = path.parse(filename).name
  const thumbPath = path.join(THUMBNAILS_DIR, `${nameWithoutExt}.webp`)
  const fullPath = path.join(FULL_DIR, `${nameWithoutExt}.webp`)

  const metadata = await sharp(inputPath).metadata()
  const originalWidth = metadata.width
  const originalHeight = metadata.height

  // Generate thumbnail
  await sharp(inputPath)
    .resize(THUMBNAIL_WIDTH, null, { withoutEnlargement: true })
    .webp({ quality: THUMBNAIL_QUALITY })
    .toFile(thumbPath)

  const thumbMeta = await sharp(thumbPath).metadata()

  // Generate full-size optimized version
  await sharp(inputPath)
    .resize(FULL_WIDTH, null, { withoutEnlargement: true })
    .webp({ quality: FULL_QUALITY })
    .toFile(fullPath)

  const fullMeta = await sharp(fullPath).metadata()

  // Generate blur placeholder
  const blurDataUrl = await generateBlurDataUrl(inputPath)

  return {
    id: nameWithoutExt,
    src: `/gallery/full/${nameWithoutExt}.webp`,
    thumbnail: `/gallery/thumbnails/${nameWithoutExt}.webp`,
    blurDataUrl,
    originalWidth,
    originalHeight,
    fullWidth: fullMeta.width,
    fullHeight: fullMeta.height,
    thumbWidth: thumbMeta.width,
    thumbHeight: thumbMeta.height,
  }
}

async function main() {
  console.log('Processing gallery images...')

  await ensureDir(THUMBNAILS_DIR)
  await ensureDir(FULL_DIR)

  const files = await fs.readdir(ORIGINALS_DIR)
  const imageFiles = files.filter((f) =>
    SUPPORTED_EXTENSIONS.includes(path.extname(f).toLowerCase()),
  )

  if (imageFiles.length === 0) {
    console.log('No images found in', ORIGINALS_DIR)
    return
  }

  console.log(`Found ${imageFiles.length} images to process`)

  const results = []
  for (const file of imageFiles.sort()) {
    console.log(`  Processing ${file}...`)
    const data = await processImage(file)
    results.push(data)
  }

  await fs.writeFile(METADATA_PATH, JSON.stringify(results, null, 2))
  console.log(`\nDone! Processed ${results.length} images.`)
  console.log(`Metadata written to ${METADATA_PATH}`)
}

main().catch((err) => {
  console.error('Error processing gallery:', err)
  process.exit(1)
})
