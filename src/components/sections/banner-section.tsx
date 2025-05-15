'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface CarouselImage {
  id: number
  url: string
  alt: string
  title?: string
  description?: string
}

const carouselImages: CarouselImage[] = [
  {
    id: 1,
    url: '/images/contact-hero.jpg',
    alt: 'Banner image 1',
    title: 'Welcome',
    description: 'Discover our premium services',
  },
  {
    id: 2,
    url: '/images/chinh-sach.jpg',
    alt: 'Banner image 2',
    title: 'Our Policies',
    description: 'Learn about our commitments',
  },
  {
    id: 3,
    url: '/images/mat-bang.jpg',
    alt: 'Banner image 3',
    title: 'Floor Plans',
    description: 'Explore our layouts',
  },
  {
    id: 4,
    url: '/images/tien-ich.jpg',
    alt: 'Banner image 4',
    title: 'Amenities',
    description: 'Experience luxury living',
  },
]

export default function BannerSection(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [isAutoplay, setIsAutoplay] = useState<boolean>(true)
  const [isHovering, setIsHovering] = useState<boolean>(false)

  const totalSlides: number = carouselImages.length

  const nextSlide = useCallback((): void => {
    setActiveIndex((current) => (current === totalSlides - 1 ? 0 : current + 1))
  }, [totalSlides])

  const prevSlide = useCallback((): void => {
    setActiveIndex((current) => (current === 0 ? totalSlides - 1 : current - 1))
  }, [totalSlides])

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined

    if (isAutoplay && !isHovering) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoplay, nextSlide, isHovering])

  const handleDotClick = (index: number): void => {
    setActiveIndex(index)
    setIsAutoplay(false)

    setTimeout(() => {
      setIsAutoplay(true)
    }, 10000)
  }

  const toggleAutoplay = (): void => {
    setIsAutoplay((prev) => !prev)
  }

  return (
    <section
      className="relative overflow-hidden bg-black"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative h-64 w-full md:h-96 lg:h-[500px]">
        {carouselImages.map((image, index) => (
          <div
            key={image.id}
            className={cn(
              'absolute inset-0 h-full w-full transition-all duration-700',
              index === activeIndex
                ? 'scale-100 opacity-100'
                : 'scale-105 opacity-0'
            )}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            {image.title && (
              <div className="absolute bottom-16 left-0 w-full px-6 transition-all duration-700 ease-in-out md:px-10 lg:px-16">
                <h2 className="mb-2 text-2xl font-bold text-white opacity-90 md:text-3xl lg:text-4xl">
                  {image.title}
                </h2>
                {image.description && (
                  <p className="max-w-md text-base text-white/80 md:text-lg">
                    {image.description}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}

        <div className="absolute inset-0 flex items-center justify-between px-4">
          <Button
            variant="outline"
            size="icon"
            className="size-10 rounded-full border-white/30 bg-black/20 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-black/40"
            onClick={() => {
              prevSlide()
              setIsAutoplay(false)
              setTimeout(() => setIsAutoplay(true), 10000)
            }}
            aria-label="Previous slide"
          >
            <ChevronLeft className="size-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="size-10 rounded-full border-white/30 bg-black/20 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-black/40"
            onClick={() => {
              nextSlide()
              setIsAutoplay(false)
              setTimeout(() => setIsAutoplay(true), 10000)
            }}
            aria-label="Next slide"
          >
            <ChevronRight className="size-6" />
          </Button>
        </div>

        <div className="absolute inset-x-0 bottom-6 flex items-center justify-center gap-3">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={cn(
                'h-2 rounded-full transition-all',
                index === activeIndex
                  ? 'w-10 bg-white'
                  : 'w-6 bg-white/30 hover:bg-white/50'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}

          <Button
            variant="outline"
            size="icon"
            onClick={toggleAutoplay}
            className="ml-4 size-8 rounded-full border-white/30 bg-black/20 text-white backdrop-blur-sm hover:bg-black/40"
            aria-label={isAutoplay ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isAutoplay ? (
              <Pause className="size-4" />
            ) : (
              <Play className="size-4" />
            )}
          </Button>
        </div>

        {/* Slide counter */}
        <div className="absolute right-4 top-4 rounded-full bg-black/30 px-3 py-1 text-sm font-medium text-white/90 backdrop-blur-sm">
          {activeIndex + 1} / {totalSlides}
        </div>
      </div>
    </section>
  )
}
