'use client'

import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { CardContent, CardHeader } from '@/components/ui/card'
import {
  Building2,
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
  Clock,
  Youtube,
  MapPin,
  Send,
} from 'lucide-react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { useForm } from 'react-hook-form'
import { CtaPayload, ctaSchema } from '@/validations/cta'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { toast } from '@/hooks/use-toast'
import LoadingModal from '@/components/share/loading-modal'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const Page = () => {
  const [loading, setLoading] = useState(false)

  const form = useForm<CtaPayload>({
    resolver: zodResolver(ctaSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  const onSubmit = async (data: CtaPayload) => {
    setLoading(true)
    try {
      const res = await axios.post('/api/submit', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (res?.status === 200) {
        toast({
          title: 'Gửi thành công!',
          description:
            'Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ phản hồi sớm nhất có thể.',
          variant: 'default',
          duration: 3000,
        })

        form.reset()
      }
    } catch (error) {
      console.error('Error:', error)
      toast({
        title: 'Đã có lỗi xảy ra',
        description:
          'Vui lòng thử lại sau hoặc liên hệ trực tiếp với chúng tôi.',
        variant: 'destructive',
        duration: 3000,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <LoadingModal isOpen={loading} />
      <section className="relative h-[450px] md:h-[550px]">
        <Image
          src="/images/contact-hero.jpg"
          alt="Liên hệ Economy City"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2c64]/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
          <h1 className="font-playfair mb-4 text-4xl font-bold md:text-5xl">
            Liên hệ <span className="text-[#f0d989]">với chúng tôi</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl">
            Hãy liên hệ với chúng tôi để nhận tư vấn chi tiết về dự án Economy
            City
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-10">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col items-center">
            <Badge className="mb-4 cursor-pointer bg-[#f0d989]/30 text-[#1a2c64] hover:bg-[#f0d989]/50">
              Liên hệ
            </Badge>
            <h2 className="text-center text-3xl font-bold md:text-4xl">
              Liên hệ <span className="text-primary">với chúng tôi</span>
            </h2>
            <p className="mt-6 max-w-2xl text-center text-gray-700">
              Hãy liên hệ với chúng tôi để được tư vấn chi tiết về dự án Economy
              City
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="h-full overflow-hidden rounded-lg border shadow-md">
                <CardHeader className="bg-primary pb-4 pt-6">
                  <h3 className="text-xl font-semibold text-[#f0d989]">
                    Thông tin liên hệ
                  </h3>
                </CardHeader>
                <CardContent className="bg-white p-6">
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="flex size-10 items-center justify-center rounded-full bg-[#1a2c64]/10">
                        <Building2 className="size-5 text-[#1a2c64]" />
                      </div>
                      <div>
                        <p className="font-medium">Văn phòng dự án</p>
                        <p className="text-gray-700">
                          Phố Cúc, KĐT Ecopark, Văn Giang, Hưng Yên
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex size-10 items-center justify-center rounded-full bg-[#1a2c64]/10">
                        <Phone className="size-5 text-[#1a2c64]" />
                      </div>
                      <div>
                        <p className="font-medium">Hotline</p>
                        <p className="text-gray-700">0901 234 567</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex size-10 items-center justify-center rounded-full bg-[#1a2c64]/10">
                        <Mail className="size-5 text-[#1a2c64]" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-700">info@thefibonan.com</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex size-10 items-center justify-center rounded-full bg-[#1a2c64]/10">
                        <Clock className="size-5 text-[#1a2c64]" />
                      </div>
                      <div>
                        <p className="font-medium">Giờ làm việc</p>
                        <p className="text-gray-700">
                          Thứ 2 - Thứ 7: 8:00 - 18:00
                        </p>
                        <p className="text-gray-700">Chủ nhật: 8:00 - 12:00</p>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <h4 className="mb-4 font-medium text-[#1a2c64]">
                      Kết nối với chúng tôi
                    </h4>
                    <div className="flex gap-3">
                      <Link
                        href="#"
                        className="flex size-10 items-center justify-center rounded-full bg-[#1a2c64] text-[#f0d989] transition-colors hover:bg-[#273c7a]"
                        aria-label="Facebook"
                      >
                        <Facebook className="size-5" />
                      </Link>
                      <Link
                        href="#"
                        className="flex size-10 items-center justify-center rounded-full bg-[#1a2c64] text-[#f0d989] transition-colors hover:bg-[#273c7a]"
                        aria-label="Youtube"
                      >
                        <Youtube className="size-5" />
                      </Link>
                      <Link
                        href="#"
                        className="flex size-10 items-center justify-center rounded-full bg-[#1a2c64] text-[#f0d989] transition-colors hover:bg-[#273c7a]"
                        aria-label="Instagram"
                      >
                        <Instagram className="size-5" />
                      </Link>
                      <Link
                        href="#"
                        className="flex size-10 items-center justify-center rounded-full bg-[#1a2c64] text-[#f0d989] transition-colors hover:bg-[#273c7a]"
                        aria-label="Zalo"
                      >
                        <MessageCircle className="size-5" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="h-full overflow-hidden rounded-lg border shadow-md">
                <CardHeader className="bg-primary pb-4 pt-6">
                  <h3 className="text-xl font-semibold text-[#f0d989]">
                    Gửi yêu cầu tư vấn
                  </h3>
                </CardHeader>
                <CardContent className="bg-white p-6">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Họ và tên</FormLabel>
                            <Input
                              placeholder="Nhập họ và tên của bạn"
                              {...field}
                            />
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="example@email.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Số điện thoại</FormLabel>
                            <FormControl>
                              <Input placeholder="0912 345 678" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nội dung yêu cầu</FormLabel>
                            <FormControl>
                              <Textarea
                                className="min-h-24 resize-none"
                                placeholder="Nhập nội dung yêu cầu tư vấn của bạn..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="pt-2">
                        <Button
                          type="submit"
                          className="w-full bg-[#1a2c64] text-[#f0d989] hover:bg-[#273c7a] sm:w-auto"
                        >
                          <Send className="mr-2 size-4" />
                          Gửi yêu cầu
                        </Button>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1a2c64]/5 py-16 md:py-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-playfair mb-4 text-3xl font-bold text-[#1a2c64] md:text-4xl">
              Bản đồ <span className="text-[#1a2c64]">vị trí</span>
            </h2>
            <p className="text-gray-600">
              Xem chi tiết vị trí dự án Economy City trên bản đồ
            </p>
          </div>

          <div className="relative overflow-hidden rounded-xl shadow-xl md:rounded-2xl">
            <div className="relative">
              <Image
                src="/images/map.jpg"
                alt="Bản đồ vị trí Economy City"
                width="1400"
                height="1400"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-playfair mb-4 text-3xl font-bold text-[#1a2c64] md:text-4xl">
              Nhà mẫu <span className="text-[#1a2c64]">Economy City</span>
            </h2>
            <p className="text-gray-600">
              Tham quan nhà mẫu để trải nghiệm không gian sống đẳng cấp tại
              Economy City
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <Dialog>
              <DialogTrigger asChild>
                <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="relative h-[300px] overflow-hidden md:h-[400px]">
                    <Image
                      src="/images/common/showroom.jpg"
                      alt="Nhà mẫu Economy City"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    <div className="absolute inset-x-0 bottom-0 p-4 text-white opacity-0 transition-all duration-300 group-hover:bottom-4 group-hover:opacity-100">
                      <p className="text-center font-medium">
                        Nhấp để xem ảnh lớn
                      </p>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl border-none bg-transparent p-0 shadow-none">
                <VisuallyHidden>
                  <DialogTitle>Preview Nhà mẫu Economy City</DialogTitle>
                  <DialogDescription>
                    Hình ảnh nhà mẫu Economy City phóng to
                  </DialogDescription>
                </VisuallyHidden>
                <Image
                  src="/images/common/showroom.jpg"
                  alt="Preview Nhà mẫu Economy City"
                  width={1200}
                  height={800}
                  className="h-auto w-full rounded-lg object-contain"
                />
              </DialogContent>
            </Dialog>

            <div className="p-4">
              <h3 className="mb-4 text-2xl font-semibold text-[#1a2c64]">
                Nhà mẫu Economy City
              </h3>
              <p className="mb-6 text-gray-600">
                Nhà mẫu Economy City được thiết kế hiện đại, sang trọng, mang
                đến trải nghiệm thực tế về không gian sống đẳng cấp tại dự án.
                Hãy đến tham quan nhà mẫu để cảm nhận không gian sống lý tưởng
                mà Economy City mang lại.
              </p>

              <div className="mb-8 space-y-6">
                <div className="flex items-start">
                  <div className="mr-3 flex size-10 items-center justify-center rounded-full bg-[#1a2c64]/10">
                    <MapPin className="size-5 text-[#1a2c64]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a2c64]">
                      Địa chỉ nhà mẫu
                    </h4>
                    <p className="text-gray-600">
                      Thị trấn Như Quỳnh, huyện Văn Lâm, tỉnh Hưng Yên
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 flex size-10 items-center justify-center rounded-full bg-[#1a2c64]/10">
                    <Clock className="size-5 text-[#1a2c64]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a2c64]">Giờ mở cửa</h4>
                    <p className="text-gray-600">Hàng ngày: 8:00 - 17:30</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 flex size-10 items-center justify-center rounded-full bg-[#1a2c64]/10">
                    <Phone className="size-5 text-[#1a2c64]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a2c64]">
                      Hotline đặt lịch tham quan
                    </h4>
                    <p className="text-gray-600">0966.001.001</p>
                  </div>
                </div>
              </div>

              <Button className="bg-[#1a2c64] text-[#f0d989] hover:bg-[#273c7a]">
                Đặt lịch tham quan
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page
