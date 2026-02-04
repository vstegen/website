'use client'

import { useCallback, useEffect } from 'react'
import Image, { type StaticImageData } from 'next/image'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'

function CloseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.75 19.5L8.25 12l7.5-7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

interface LightboxProps {
  images: StaticImageData[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
}

export function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrevious,
  onNext,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        onPrevious()
      } else if (event.key === 'ArrowRight') {
        onNext()
      }
    },
    [onPrevious, onNext],
  )

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen || currentIndex < 0 || currentIndex >= images.length) {
    return null
  }

  const currentImage = images[currentIndex]
  const hasPrevious = currentIndex > 0
  const hasNext = currentIndex < images.length - 1

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-zinc-900/90 backdrop-blur-sm duration-200 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel
          transition
          className="relative flex h-full w-full max-h-[90vh] max-w-[90vw] items-center justify-center duration-200 data-closed:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-0 right-0 z-10 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
            aria-label="Close lightbox"
          >
            <CloseIcon className="h-6 w-6" />
          </button>

          {/* Previous button */}
          {hasPrevious && (
            <button
              onClick={onPrevious}
              className="absolute left-0 z-10 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70 sm:left-4"
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
          )}

          {/* Image */}
          <div className="relative h-full w-full">
            <Image
              src={currentImage}
              alt=""
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {/* Next button */}
          {hasNext && (
            <button
              onClick={onNext}
              className="absolute right-0 z-10 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70 sm:right-4"
              aria-label="Next image"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          )}

          {/* Image counter */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
            {currentIndex + 1} / {images.length}
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
