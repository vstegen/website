import galleryData from './gallery-data.json'

export interface GalleryImage {
  id: string
  src: string
  thumbnail: string
  blurDataUrl: string
  originalWidth: number
  originalHeight: number
  fullWidth: number
  fullHeight: number
  thumbWidth: number
  thumbHeight: number
}

export function getGalleryImages(): GalleryImage[] {
  return galleryData as GalleryImage[]
}
