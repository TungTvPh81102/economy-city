'use client'

import React, { useState, useEffect, useCallback } from 'react'
import NextImage from 'next/image'
import { ChevronLeft, ChevronRight, Expand, Camera } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Badge } from '@/components/ui/badge'

const images = [
  {
    url: 'https://res.cloudinary.com/dvrexlsgx/image/upload/v1747492259/z6595939677262_5134ec46c4035240275370311f5b89de_lqw9vf.jpg',
    alt: 'Economy City - Mặt ngoài',
    description: 'Thiết kế mặt ngoài hiện đại với kiến trúc độc đáo',
  },
  {
    url: 'https://res.cloudinary.com/dvrexlsgx/image/upload/v1747492259/z6595939818353_038e86800074d2d71809678d1dd81d18_xpdiia.jpg',
    alt: 'Economy City - Khu vực chung',
    description: 'Không gian chung rộng rãi và thoáng đãng',
  },
  {
    url: 'https://res.cloudinary.com/dvrexlsgx/image/upload/v1747492261/z6595939696067_92fd27526a0fd3efb5ec033a6fd5055d_h2qqv5.jpg',
    alt: 'Economy City - Thiết kế nội thất',
    description: 'Nội thất cao cấp với thiết kế tinh tế đến từng chi tiết',
  },
  {
    url: 'https://res.cloudinary.com/dvrexlsgx/image/upload/v1747492258/z6595939710947_f9af92f1e5ea275ea83e96fcb3ae0dfb_od3cbt.jpg',
    alt: 'Economy City - Khu vực sinh hoạt',
    description: 'Khu vực sinh hoạt đa năng phục vụ mọi nhu cầu',
  },
  {
    url: 'https://res.cloudinary.com/dvrexlsgx/image/upload/v1747492258/z6595939788752_974de5ee626de0c37cffd3f9ab5a6fb0_mrjtxz.jpg',
    alt: 'Economy City - Tiện ích',
    description: 'Hệ thống tiện ích đẳng cấp và đầy đủ',
  },
  {
    url: 'https://res.cloudinary.com/dvrexlsgx/image/upload/v1747492258/z6595939757216_0556bd1c8c89f8ddb450180a0c1fa5bc_tiakya.jpg',
    alt: 'Economy City - Không gian sống',
    description: 'Không gian sống lý tưởng dành cho cư dân hiện đại',
  },
]

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(Array(images.length).fill(false))

  useEffect(() => {
    const preloadImages = () => {
      images.forEach((image, index) => {
        const img = new Image()
        img.src = image.url
        img.onload = () => {
          setIsLoaded((prev) => {
            const newState = [...prev]
            newState[index] = true
            return newState
          })
        }
      })
    }
    preloadImages()
  }, [])

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [])

  const goToPrevious = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    )
  }, [])

  const goToImage = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isFullscreen) {
        goToNext()
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [goToNext, isFullscreen])

  return (
    <section
      id="hinh-anh"
      className="w-full bg-gradient-to-b from-gray-50 to-white py-10"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <Badge className="mb-4 cursor-pointer bg-[#f0d989]/30 text-[#1a2c64] hover:bg-[#f0d989]/50">
            Mặt bằng
          </Badge>
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Mặt bằng <span className="text-primary">Economy City</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Trải nghiệm không gian sống đẳng cấp và tiện nghi tại ECONOMY CITY
            qua bộ sưu tập hình ảnh chân thực
          </p>
        </div>

        <div className="mx-auto w-full">
          <div className="hidden w-full md:block">
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl bg-gray-100 shadow-xl">
              {images.map((image, index) => (
                <div
                  key={image.url}
                  className={cn(
                    'absolute inset-0 transition-opacity duration-700 ease-in-out',
                    currentIndex === index
                      ? 'z-10 opacity-100'
                      : 'z-0 opacity-0'
                  )}
                >
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 to-transparent" />
                  <NextImage
                    src={image.url}
                    alt={image.alt}
                    fill
                    sizes="100vw"
                    priority={index < 2}
                    className={cn(
                      'object-cover transition-transform duration-700',
                      currentIndex === index ? 'scale-100' : 'scale-110',
                      isLoaded[index] ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </div>
              ))}

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-4 top-4 z-20 rounded-full bg-white/80 text-gray-800 backdrop-blur-sm hover:bg-white hover:text-primary"
                    onClick={() => setIsFullscreen(true)}
                  >
                    <Expand className="size-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent
                  className="max-w-6xl border-none bg-transparent p-0"
                  onOpenAutoFocus={(e) => e.preventDefault()}
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
                    <NextImage
                      src={images[currentIndex].url}
                      alt={images[currentIndex].alt}
                      fill
                      className="object-contain"
                      sizes="100vw"
                      priority
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-black/50 p-4 text-white backdrop-blur-sm">
                      <h3 className="text-lg font-medium">
                        {images[currentIndex].alt}
                      </h3>
                      <p className="text-sm text-gray-200">
                        {images[currentIndex].description}
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <div className="absolute inset-x-0 top-1/2 z-20 flex -translate-y-1/2 justify-between px-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-white/80 text-gray-800 shadow-lg backdrop-blur-sm hover:bg-white hover:text-primary"
                  onClick={goToPrevious}
                >
                  <ChevronLeft className="size-5" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-white/80 text-gray-800 shadow-lg backdrop-blur-sm hover:bg-white hover:text-primary"
                  onClick={goToNext}
                >
                  <ChevronRight className="size-5" />
                </Button>
              </div>

              <div className="absolute inset-x-0 bottom-0 z-20 p-6 text-white">
                <h3 className="text-2xl font-semibold">
                  {images[currentIndex].alt}
                </h3>
                <p className="mt-1 text-lg text-gray-200">
                  {images[currentIndex].description}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 w-full">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="flex items-center font-semibold text-gray-800">
                <Camera className="mr-2 size-5 text-primary" />
                Bộ sưu tập hình ảnh
              </h3>
              <span className="text-sm text-gray-500">
                {currentIndex + 1}/{images.length}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
              {images.map((image, index) => (
                <TooltipProvider key={`thumb-${index}`}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => goToImage(index)}
                        className={cn(
                          'group relative aspect-square w-full overflow-hidden rounded-lg transition-all',
                          currentIndex === index
                            ? 'ring-2 ring-primary ring-offset-2'
                            : 'hover:ring-1 hover:ring-primary hover:ring-offset-1'
                        )}
                      >
                        <NextImage
                          src={image.url}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          className={cn(
                            'object-cover transition-all duration-300',
                            currentIndex === index
                              ? 'brightness-100'
                              : 'brightness-75 group-hover:brightness-100'
                          )}
                        />
                        <div
                          className={cn(
                            'absolute inset-0 flex items-center justify-center bg-black/30 text-white opacity-0 transition-opacity group-hover:opacity-100',
                            currentIndex === index &&
                              'bg-primary/40 opacity-100'
                          )}
                        >
                          <span className="text-sm font-medium">Xem</span>
                        </div>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="max-w-xs">
                      <p className="font-medium">{image.alt}</p>
                      <p className="text-xs text-gray-500">
                        {image.description}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center space-x-2">
            {images.map((_, index) => (
              <button
                key={`indicator-${index}`}
                onClick={() => goToImage(index)}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  currentIndex === index
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                )}
                aria-label={`Chuyển đến hình ảnh ${index + 1}`}
              />
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={`mobile-${index}`}>
                    <div className="p-1">
                      <Card className="overflow-hidden border-none shadow-lg">
                        <CardContent className="relative aspect-video p-0">
                          <NextImage
                            src={image.url}
                            alt={image.alt}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-x-0 bottom-0 bg-black/50 p-3 text-white">
                            <p className="text-sm font-medium">{image.alt}</p>
                            <p className="text-xs text-gray-200">
                              {image.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GallerySection
