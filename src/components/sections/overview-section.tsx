'use client'

import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, Building2, Shield, Leaf, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from '@/components/ui/dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import Link from 'next/link'

const OverviewSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const features = [
    {
      icon: <Building2 className="size-5 text-[#1E2A5A]" />,
      title: 'Kiến trúc hiện đại',
      description:
        'Thiết kế đô thị thông minh với kiến trúc đa chức năng, đáp ứng nhu cầu kinh doanh và sinh sống',
    },
    {
      icon: <TrendingUp className="size-5 text-[#1E2A5A]" />,
      title: 'Trung tâm kinh tế',
      description:
        'Tạo môi trường thuận lợi cho các doanh nghiệp phát triển với hệ sinh thái kinh tế toàn diện',
    },
    {
      icon: <Shield className="size-5 text-[#1E2A5A]" />,
      title: 'An ninh tối ưu',
      description:
        'Hệ thống an ninh thông minh 24/7 với công nghệ nhận diện AI tiên tiến bảo vệ cư dân',
    },
    {
      icon: <Leaf className="size-5 text-[#1E2A5A]" />,
      title: 'Phát triển bền vững',
      description:
        'Áp dụng công nghệ xanh và tiết kiệm năng lượng, tạo môi trường sống hài hòa với thiên nhiên',
    },
  ]

  const projectInfo = [
    { label: 'Chủ đầu tư', value: 'Tập đoàn Phát triển Đô thị Quốc tế' },
    { label: 'Quy mô', value: '386 hecta' },
    { label: 'Thời gian hoàn thành', value: '2025-2030' },
    { label: 'Mật độ xây dựng', value: '40%' },
  ]

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-16 md:py-10">
      <div className="container mx-auto px-4">
        <div className="mb-14 flex flex-col items-center">
          <Badge className="mb-4 cursor-pointer bg-[#f0d989]/30 text-[#1a2c64] hover:bg-[#f0d989]/50">
            Giới thiệu
          </Badge>
          <h1 className="text-center text-3xl font-bold md:text-5xl">
            Kiệt tác đô thị{' '}
            <span className="text-[#1E2A5A]">kinh tế thông minh</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              <span className="text-2xl font-bold text-[#1E2A5A]">
                ECONOMY CITY
              </span>{' '}
              là khu đô thị kinh tế đẳng cấp quốc tế đầu tiên tại Việt Nam, kết
              hợp hoàn hảo giữa không gian sống hiện đại và trung tâm kinh tế
              sôi động. Với diện tích quy hoạch rộng lớn, ECONOMY CITY hứa hẹn
              trở thành biểu tượng mới cho sự phát triển đô thị bền vững và
              thịnh vượng kinh tế.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {projectInfo.map((item, index) => (
                <div
                  key={index}
                  className="group rounded-xl border border-blue-100 bg-white p-5 shadow-md transition-all duration-300 hover:border-blue-300 hover:shadow-lg"
                >
                  <h4 className="mb-1 font-semibold text-[#1E2A5A]">
                    {item.label}
                  </h4>
                  <p className="font-medium text-gray-800">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index}>
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-100 shadow-sm transition-all duration-300 hover:bg-blue-200">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-[#1E2A5A]">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="pl-12 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-[#1E2A5A] text-white shadow-lg hover:bg-blue-900">
                Tải brochure dự án
              </Button>
              <Link href="#dang-ky" passHref>
                <Button className="border border-[#1E2A5A] bg-white text-[#1E2A5A] shadow-lg hover:bg-blue-50">
                  Đăng ký tư vấn
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative order-first mb-8 lg:order-last lg:mb-0">
            <div
              onClick={() => setIsVideoOpen(true)}
              className="group relative h-[520px] w-full cursor-pointer overflow-hidden rounded-xl shadow-2xl transition-all duration-300 hover:shadow-blue-200/50"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex size-20 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  <div className="flex size-16 items-center justify-center rounded-full bg-[#1E2A5A]/90">
                    <Play className="size-8 fill-white text-white md:size-8" />
                  </div>
                </div>
              </div>
              <img
                loading="lazy"
                src="https://res.cloudinary.com/dvrexlsgx/video/upload/v1747300376/Video_teaster_dz4j7p.jpg"
                alt="Economy City Preview"
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A5A]/50 to-transparent transition-opacity duration-300 group-hover:opacity-70"></div>
              <div className="shadow-text absolute bottom-6 left-6 text-xl font-bold text-white">
                Khám phá Economy City
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 -z-10 size-36 rounded-2xl bg-[#1E2A5A]"></div>
            <div className="absolute -right-6 -top-6 -z-10 size-36 rounded-2xl bg-blue-100"></div>
          </div>
        </div>
      </div>

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogOverlay className="bg-black/80 backdrop-blur-sm transition-all duration-300" />
        <DialogContent className="border-none bg-transparent p-0 shadow-none sm:max-w-4xl md:max-w-5xl lg:max-w-6xl">
          <VisuallyHidden>
            <DialogTitle>Video Preview</DialogTitle>
          </VisuallyHidden>
          <div className="relative aspect-video w-full rounded-lg bg-black">
            <video
              className="size-full rounded-lg object-contain"
              controls
              autoPlay
              playsInline
            >
              <source
                src="https://res.cloudinary.com/dvrexlsgx/video/upload/v1747300376/Video_teaster_dz4j7p.mp4"
                type="video/mp4"
              />
              Trình duyệt của bạn không hỗ trợ video.
            </video>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default OverviewSection
