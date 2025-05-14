import React from 'react'
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
} from 'lucide-react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { contactMetadata } from '@/lib/metadata'
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog'

export const metadata = contactMetadata

const Page = () => {
  return (
    <>
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
                  <form className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="fullname"
                          className="mb-1 block text-sm font-medium"
                        >
                          Họ và tên
                        </label>
                        <Input
                          id="fullname"
                          type="text"
                          placeholder="Nhập họ và tên"
                          className="border-gray-300 focus:border-[#1a2c64] focus:ring-[#1a2c64]"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-1 block text-sm font-medium"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Nhập email"
                          className="border-gray-300 focus:border-[#1a2c64] focus:ring-[#1a2c64]"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-1 block text-sm font-medium"
                        >
                          Số điện thoại
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Nhập số điện thoại"
                          className="border-gray-300 focus:border-[#1a2c64] focus:ring-[#1a2c64]"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="needs"
                          className="mb-1 block text-sm font-medium"
                        >
                          Nhu cầu
                        </label>
                        <Select>
                          <SelectTrigger
                            id="needs"
                            className="border-gray-300 focus:border-[#1a2c64] focus:ring-[#1a2c64]"
                          >
                            <SelectValue placeholder="Chọn nhu cầu" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="buy">Mua căn hộ</SelectItem>
                            <SelectItem value="invest">Đầu tư</SelectItem>
                            <SelectItem value="visit">
                              Tham quan căn hộ mẫu
                            </SelectItem>
                            <SelectItem value="other">Khác</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1 block text-sm font-medium"
                      >
                        Nội dung yêu cầu
                      </label>
                      <Textarea
                        id="message"
                        className="min-h-32 border-gray-300 focus:border-[#1a2c64] focus:ring-[#1a2c64]"
                        placeholder="Nhập nội dung yêu cầu của bạn..."
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        className="w-full bg-[#1a2c64] text-[#f0d989] hover:bg-[#273c7a] sm:w-auto"
                      >
                        Gửi yêu cầu
                      </Button>
                    </div>
                  </form>
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
                <div className="group relative h-[300px] cursor-pointer overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:border-[#f0d989]/40 md:h-[400px]">
                  <Image
                    src="/images/common/showroom.jpg"
                    alt="Nhà mẫu Economy City"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl border-none bg-transparent p-0 shadow-none">
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
                    <Clock className="h-5 w-5 text-[#1a2c64]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a2c64]">Giờ mở cửa</h4>
                    <p className="text-gray-600">Hàng ngày: 8:00 - 17:30</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 flex size-10 items-center justify-center rounded-full bg-[#1a2c64]/10">
                    <Phone className="h-5 w-5 text-[#1a2c64]" />
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
