import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'
import { PhotoGallery } from '@/components/PhotoGallery'
import { getGalleryImages } from '@/lib/gallery'

export const metadata: Metadata = {
  title: 'Photography',
  description:
    'A collection of photos from my travels and everyday life.',
}

export default function Photography() {
  const images = getGalleryImages()

  return (
    <SimpleLayout
      title="Photography"
      intro="A collection of moments captured through my lens — from travels across the world to scenes from everyday life."
    >
      <PhotoGallery images={images} />
    </SimpleLayout>
  )
}
