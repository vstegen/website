'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from '@headlessui/react'

import { type GalleryImage } from '@/lib/gallery'

function ChevronLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M15.75 19.5L8.25 12l7.5-7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CloseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 18L18 6M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Lightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: {
  images: GalleryImage[]
  currentIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}) {
  const image = images[currentIndex]
  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < images.length - 1

  const goToPrev = useCallback(() => {
    if (hasPrev) onNavigate(currentIndex - 1)
  }, [hasPrev, currentIndex, onNavigate])

  const goToNext = useCallback(() => {
    if (hasNext) onNavigate(currentIndex + 1)
  }, [hasNext, currentIndex, onNavigate])

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') goToPrev()
      if (e.key === 'ArrowRight') goToNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToPrev, goToNext])

  return (
    <Dialog open={true} onClose={onClose} className="relative z-[100]">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-300 data-closed:opacity-0"
      />

      <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-8">
        <DialogPanel
          transition
          className="relative flex h-full w-full items-center justify-center transition duration-300 data-closed:scale-95 data-closed:opacity-0"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-0 right-0 z-10 rounded-full bg-black/50 p-2 text-white/80 transition hover:bg-black/70 hover:text-white sm:top-2 sm:right-2"
            aria-label="Close"
          >
            <CloseIcon className="h-6 w-6" />
          </button>

          {/* Previous button */}
          {hasPrev && (
            <button
              onClick={goToPrev}
              className="absolute left-0 z-10 rounded-full bg-black/50 p-2 text-white/80 transition hover:bg-black/70 hover:text-white sm:left-2"
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
          )}

          {/* Next button */}
          {hasNext && (
            <button
              onClick={goToNext}
              className="absolute right-0 z-10 rounded-full bg-black/50 p-2 text-white/80 transition hover:bg-black/70 hover:text-white sm:right-2"
              aria-label="Next image"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          )}

          {/* Image */}
          <div className="relative flex h-full w-full items-center justify-center">
            <Image
              src={image.src}
              alt=""
              width={image.fullWidth}
              height={image.fullHeight}
              className="max-h-full max-w-full object-contain"
              placeholder="blur"
              blurDataURL={image.blurDataUrl}
              sizes="100vw"
              priority
            />
          </div>

          {/* Image counter */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm text-white/80 sm:bottom-2">
            {currentIndex + 1} / {images.length}
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}

export function PhotoGallery({ images }: { images: GalleryImage[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setLightboxIndex(index)}
            className="group mb-4 block w-full overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-900"
          >
            <Image
              src={image.thumbnail}
              alt=""
              width={image.thumbWidth}
              height={image.thumbHeight}
              className="w-full rounded-lg bg-zinc-100 object-cover transition duration-300 group-hover:scale-[1.02] group-hover:brightness-90 dark:bg-zinc-800 dark:group-hover:brightness-75"
              placeholder="blur"
              blurDataURL={image.blurDataUrl}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  )
}
