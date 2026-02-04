'use client'

import { useState } from 'react'
import Image, { type StaticImageData } from 'next/image'
import clsx from 'clsx'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Lightbox } from '@/components/Lightbox'

import image1 from '@/images/photos/image-11.jpg'
import image2 from '@/images/photos/image-4.jpg'
import image3 from '@/images/photos/image-12.jpg'
import image4 from '@/images/photos/image-6.jpg'
import image5 from '@/images/photos/image-5.jpg'

const photos: StaticImageData[] = [image1, image2, image3, image4, image5]

function GalleryImage({
  image,
  index,
  onClick,
}: {
  image: StaticImageData
  index: number
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'group relative aspect-4/3 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800',
        'ring-1 ring-zinc-200 dark:ring-zinc-700',
        'transition duration-300 hover:ring-2 hover:ring-teal-500 dark:hover:ring-teal-400',
        'focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400',
      )}
      aria-label={`View photo ${index + 1}`}
    >
      <Image
        src={image}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition duration-300 group-hover:scale-105"
      />
    </button>
  )
}

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < photos.length - 1 ? prev + 1 : prev))
  }

  return (
    <>
      <SimpleLayout
        title="Gallery"
        intro="A collection of moments captured through my lens. Photography is one of my ways to appreciate the beauty in everyday life."
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <GalleryImage
              key={photo.src}
              image={photo}
              index={index}
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>
      </SimpleLayout>

      <Lightbox
        images={photos}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </>
  )
}
