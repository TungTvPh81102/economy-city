'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  Play,
  Video,
  Maximize2,
  Image as ImageIcon,
  RotateCcw,
  ArrowRight,
  AlertTriangle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'

const VirtualTourSection = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [showInfo, setShowInfo] = useState(false)
  const [hasError, setHasError] = useState(false)
  const iframeRef = useRef(null)

  const handleOpenTour = useCallback(() => {
    const url =
      'https://tour.panoee.net/66a5ff6479c2090f679a2222/66a6774b79c209796c9a2584'
    window.open(url, '_blank')
  }, [])

  const handleInfoToggle = useCallback(() => {
    setShowInfo((prev) => !prev)
  }, [])

  const scrollToRegister = useCallback(() => {
    const element = document.getElementById('dang-ky')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const handleIframeError = useCallback(() => {
    setHasError(true)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    const handleMessage = (event: any) => {
      if (event.data && event.data.type === 'panoee-error') {
        setHasError(true)
      }
    }

    window.addEventListener('message', handleMessage)

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="virtual-tour"
      className="bg-gradient-to-br from-gray-50 to-gray-100 py-10"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <Badge className="mb-4 cursor-pointer bg-[#f0d989]/30 text-[#1a2c64] hover:bg-[#f0d989]/50">
            Khám phá
          </Badge>
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Khám phá <span className="text-primary">ECONOMY CITY </span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Trải nghiệm không gian sống đẳng cấp của Economy City với công
              nghệ tour 3D Panoee
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">
          {isLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gray-100">
              <div className="size-16 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
              <p className="mt-4 font-medium text-gray-600">
                Đang tải tour 3D...
              </p>
            </div>
          )}

          {hasError && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-gray-100 p-4">
              <Alert className="border-amber-200 bg-amber-50">
                <AlertTriangle className="size-5 text-amber-500" />
                <AlertDescription className="ml-2">
                  Không thể tải tour 3D trong khung này. Vui lòng nhấn nút bên
                  dưới để xem tour trong cửa sổ mới.
                </AlertDescription>
              </Alert>
              <Button
                onClick={handleOpenTour}
                className="mt-4 bg-primary hover:bg-primary/90"
              >
                <Play className="mr-2 size-4" /> Mở tour trong cửa sổ mới
              </Button>
            </div>
          )}

          <div className="relative aspect-video w-full">
            <iframe
              ref={iframeRef}
              src="https://tour.panoee.net/66a5ff6479c2090f679a2222/66a6774b79c209796c9a2584"
              className="size-full"
              allow="accelerometer; autoplay; camera; gyroscope; payment"
              allowFullScreen
              title="Economy City Virtual Tour"
              onError={handleIframeError}
              sandbox="allow-scripts allow-same-origin allow-forms"
            ></iframe>

            <div className="absolute right-4 top-4 z-20 flex gap-2">
              <Button
                onClick={handleOpenTour}
                variant="outline"
                size="sm"
                className="border-gray-200 bg-white/80 backdrop-blur-sm hover:bg-white"
              >
                <Maximize2 className="mr-1 size-4" /> Xem toàn màn hình
              </Button>
              <Button
                onClick={handleInfoToggle}
                variant="outline"
                size="sm"
                className="border-gray-200 bg-white/80 backdrop-blur-sm hover:bg-white"
              >
                {showInfo ? 'Ẩn hướng dẫn' : 'Hướng dẫn'}
              </Button>
            </div>

            {showInfo && (
              <div className="absolute inset-x-4 bottom-4 z-20 rounded-lg bg-black/70 p-4 text-white backdrop-blur-sm">
                <h4 className="mb-2 flex items-center text-lg font-semibold">
                  <RotateCcw className="mr-2 size-5" /> Hướng dẫn sử dụng tour
                  3D
                </h4>
                <ul className="grid grid-cols-1 gap-2 text-sm md:grid-cols-2">
                  <li className="flex items-center">
                    <ArrowRight className="mr-1 size-4 text-primary" /> Di
                    chuyển chuột để xoay góc nhìn
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-1 size-4 text-primary" /> Cuộn
                    chuột để phóng to/thu nhỏ
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-1 size-4 text-primary" /> Nhấp vào
                    các điểm đánh dấu để di chuyển
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-1 size-4 text-primary" /> Nhấn nút
                    toàn màn hình để xem chi tiết hơn
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="bg-white p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  Tour 3D Economy City
                </h3>
                <p className="mt-1 text-gray-600">
                  Trải nghiệm không gian sống đẳng cấp với công nghệ tour 3D
                </p>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="border-primary text-primary transition-all hover:bg-primary hover:text-white"
                  onClick={handleOpenTour}
                >
                  <ImageIcon className="mr-2 size-4" /> Xem chi tiết
                </Button>
                <Button
                  className="bg-primary hover:bg-primary/90"
                  onClick={handleOpenTour}
                >
                  <Play className="mr-2 size-4" /> Khám phá ngay
                </Button>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                <div className="mb-2 flex items-center">
                  <div className="mr-3 rounded-full bg-primary/10 p-2">
                    <Video className="size-5 text-primary" />
                  </div>
                  <h4 className="font-medium">Góc nhìn 360°</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Khám phá từng góc của dự án với góc nhìn toàn cảnh 360 độ
                </p>
              </div>

              <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                <div className="mb-2 flex items-center">
                  <div className="mr-3 rounded-full bg-primary/10 p-2">
                    <RotateCcw className="size-5 text-primary" />
                  </div>
                  <h4 className="font-medium">Điều khiển dễ dàng</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Giao diện trực quan, dễ sử dụng trên mọi thiết bị
                </p>
              </div>

              <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                <div className="mb-2 flex items-center">
                  <div className="mr-3 rounded-full bg-primary/10 p-2">
                    <Maximize2 className="size-5 text-primary" />
                  </div>
                  <h4 className="font-medium">Chế độ toàn màn hình</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Trải nghiệm chi tiết hơn với chế độ xem toàn màn hình
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="mb-4 italic text-gray-500">
            Khám phá không gian sống đẳng cấp tại Economy City từ mọi góc nhìn
          </p>
          <Button
            className="bg-primary hover:bg-primary/90"
            onClick={scrollToRegister}
          >
            Đăng ký tham quan thực tế
          </Button>
        </div>
      </div>
    </section>
  )
}

export default React.memo(VirtualTourSection)
