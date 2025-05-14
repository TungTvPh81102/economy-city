import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Check, Home, Building, Store, ArrowRight } from 'lucide-react'

import { Bed, Bath, Square } from 'lucide-react'

interface PropertyCardProps {
  image: string
  title: string
  price: string
  area: string
  bedrooms: string
  bathrooms: string
}

const PropertyCard = ({
  image,
  title,
  price,
  area,
  bedrooms,
  bathrooms,
}: PropertyCardProps) => {
  return (
    <div className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image || '/placeholder.svg'}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute right-4 top-4 rounded-full bg-green-700 px-3 py-1 text-sm font-medium text-white">
          {price}
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-3 text-xl font-semibold text-gray-900">{title}</h3>

        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center text-gray-600">
            <Square className="mr-1 h-4 w-4" />
            <span className="text-sm">{area}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Bed className="mr-1 h-4 w-4" />
            <span className="text-sm">{bedrooms} PN</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Bath className="mr-1 h-4 w-4" />
            <span className="text-sm">{bathrooms} WC</span>
          </div>
        </div>

        <Button asChild className="w-full bg-green-700 hover:bg-green-800">
          <Link href="/mat-bang">Xem chi tiết</Link>
        </Button>
      </div>
    </div>
  )
}

export default function FloorPlanPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image
          src="/images/floorplan-hero.jpg"
          alt="Mặt bằng Economy City"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2f6e]/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
          <h1 className="font-playfair mb-4 text-4xl font-bold md:text-5xl">
            Mặt bằng & <span className="text-[#e9c976]">Sản phẩm</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl">
            Đa dạng sản phẩm với thiết kế hiện đại, đáp ứng nhu cầu của mọi
            khách hàng
          </p>
        </div>
      </section>

      {/* Mặt bằng tổng thể */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-playfair mb-4 text-3xl font-bold text-[#1a2f6e] md:text-4xl">
              Mặt bằng <span className="text-[#e9c976]">tổng thể</span>
            </h2>
            <p className="text-gray-600">
              Quy hoạch bài bản, thiết kế hiện đại, tối ưu không gian sống
            </p>
          </div>

          <div className="relative mb-8 h-[400px] overflow-hidden rounded-xl border-2 border-[#e9c976]/30 shadow-lg md:h-[600px]">
            <Image
              src="/images/masterplan.jpg"
              alt="Mặt bằng tổng thể Economy City"
              fill
              className="object-contain"
            />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-[#e9c976]/30 bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1a2f6e]/10">
                <Home className="h-7 w-7 text-[#1a2f6e]" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-[#1a2f6e]">
                Khu biệt thự
              </h3>
              <p className="mb-4 text-gray-600">
                Khu biệt thự sang trọng với thiết kế hiện đại, không gian sống
                rộng rãi, đẳng cấp.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 text-[#e9c976]" />
                  <span className="text-gray-600">Biệt thự đơn lập</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 text-[#e9c976]" />
                  <span className="text-gray-600">Biệt thự song lập</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 text-[#e9c976]" />
                  <span className="text-gray-600">Biệt thự liền kề</span>
                </li>
              </ul>
              <Button
                asChild
                variant="outline"
                className="w-full border-[#1a2f6e] text-[#1a2f6e] hover:bg-[#1a2f6e] hover:text-white"
              >
                <Link href="#biet-thu">Xem chi tiết</Link>
              </Button>
            </div>

            <div className="rounded-xl border border-[#e9c976]/30 bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1a2f6e]/10">
                <Building className="h-7 w-7 text-[#1a2f6e]" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-[#1a2f6e]">
                Khu nhà phố
              </h3>
              <p className="mb-4 text-gray-600">
                Khu nhà phố hiện đại với thiết kế thông minh, tối ưu không gian
                sống.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 text-[#e9c976]" />
                  <span className="text-gray-600">Nhà phố liền kề</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 text-[#e9c976]" />
                  <span className="text-gray-600">Nhà phố vườn</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 text-[#e9c976]" />
                  <span className="text-gray-600">Nhà phố duplex</span>
                </li>
              </ul>
              <Button
                asChild
                variant="outline"
                className="w-full border-[#1a2f6e] text-[#1a2f6e] hover:bg-[#1a2f6e] hover:text-white"
              >
                <Link href="#nha-pho">Xem chi tiết</Link>
              </Button>
            </div>

            <div className="rounded-xl border border-[#e9c976]/30 bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1a2f6e]/10">
                <Store className="h-7 w-7 text-[#1a2f6e]" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-[#1a2f6e]">
                Khu thương mại
              </h3>
              <p className="mb-4 text-gray-600">
                Khu thương mại sầm uất với đa dạng loại hình kinh doanh, đáp ứng
                nhu cầu của cư dân.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 text-[#e9c976]" />
                  <span className="text-gray-600">Shophouse</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 text-[#e9c976]" />
                  <span className="text-gray-600">Trung tâm thương mại</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 text-[#e9c976]" />
                  <span className="text-gray-600">Khu ẩm thực</span>
                </li>
              </ul>
              <Button
                asChild
                variant="outline"
                className="w-full border-[#1a2f6e] text-[#1a2f6e] hover:bg-[#1a2f6e] hover:text-white"
              >
                <Link href="#thuong-mai">Xem chi tiết</Link>
              </Button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button className="border border-[#e9c976]/20 bg-[#1a2f6e] text-white hover:bg-[#142453]">
              <span>Tải mặt bằng tổng thể</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Sản phẩm */}
      <section id="biet-thu" className="bg-[#f8f9fc] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-playfair mb-4 text-3xl font-bold text-[#1a2f6e] md:text-4xl">
              Sản phẩm <span className="text-[#e9c976]">nổi bật</span>
            </h2>
            <p className="text-gray-600">
              Đa dạng sản phẩm với thiết kế hiện đại, đáp ứng nhu cầu của mọi
              khách hàng
            </p>
          </div>

          <Tabs defaultValue="biet-thu" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-3 bg-[#1a2f6e]/10">
              <TabsTrigger
                value="biet-thu"
                className="data-[state=active]:bg-[#1a2f6e] data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                Biệt thự
              </TabsTrigger>
              <TabsTrigger
                value="nha-pho"
                id="nha-pho"
                className="data-[state=active]:bg-[#1a2f6e] data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                Nhà phố
              </TabsTrigger>
              <TabsTrigger
                value="thuong-mai"
                id="thuong-mai"
                className="data-[state=active]:bg-[#1a2f6e] data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                Shophouse
              </TabsTrigger>
            </TabsList>

            <TabsContent value="biet-thu">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <PropertyCard
                  image="/images/property-1.jpg"
                  title="Biệt thự đơn lập"
                  price="12 - 15 tỷ"
                  area="300 - 400m²"
                  bedrooms="4 - 5"
                  bathrooms="4 - 5"
                />

                <PropertyCard
                  image="/images/property-2.jpg"
                  title="Biệt thự song lập"
                  price="8 - 10 tỷ"
                  area="200 - 250m²"
                  bedrooms="3 - 4"
                  bathrooms="3 - 4"
                />

                <PropertyCard
                  image="/images/property-3.jpg"
                  title="Biệt thự liền kề"
                  price="6 - 8 tỷ"
                  area="150 - 200m²"
                  bedrooms="3"
                  bathrooms="3"
                />
              </div>

              <div className="mt-12">
                <h3 className="mb-6 inline-block border-b-2 border-[#e9c976] pb-2 text-2xl font-semibold text-[#1a2f6e]">
                  Mặt bằng điển hình
                </h3>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="relative h-[300px] overflow-hidden rounded-xl border-2 border-[#e9c976]/20 shadow-lg md:h-[400px]">
                    <Image
                      src="/images/floorplan-villa-1.jpg"
                      alt="Mặt bằng biệt thự đơn lập"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h4 className="mb-4 text-xl font-semibold text-[#1a2f6e]">
                      Biệt thự đơn lập
                    </h4>
                    <p className="mb-6 text-gray-600">
                      Biệt thự đơn lập với thiết kế hiện đại, không gian sống
                      rộng rãi, đẳng cấp. Mỗi căn biệt thự đều được thiết kế tối
                      ưu công năng sử dụng, mang đến không gian sống lý tưởng
                      cho gia đình.
                    </p>
                    <div className="mb-6 space-y-3">
                      <div className="flex items-start">
                        <Check className="mr-3 mt-1 h-5 w-5 text-[#e9c976]" />
                        <div>
                          <span className="font-semibold text-[#1a2f6e]">
                            Diện tích đất:
                          </span>
                          <span className="ml-2 text-gray-600">
                            300 - 400m²
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Check className="mr-3 mt-1 h-5 w-5 text-[#e9c976]" />
                        <div>
                          <span className="font-semibold text-[#1a2f6e]">
                            Diện tích xây dựng:
                          </span>
                          <span className="ml-2 text-gray-600">
                            200 - 300m²
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Check className="mr-3 mt-1 h-5 w-5 text-[#e9c976]" />
                        <div>
                          <span className="font-semibold text-[#1a2f6e]">
                            Số tầng:
                          </span>
                          <span className="ml-2 text-gray-600">
                            3 tầng + 1 tầng hầm
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Check className="mr-3 mt-1 h-5 w-5 text-[#e9c976]" />
                        <div>
                          <span className="font-semibold text-[#1a2f6e]">
                            Số phòng ngủ:
                          </span>
                          <span className="ml-2 text-gray-600">
                            4 - 5 phòng
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Check className="mr-3 mt-1 h-5 w-5 text-[#e9c976]" />
                        <div>
                          <span className="font-semibold text-[#1a2f6e]">
                            Số phòng tắm:
                          </span>
                          <span className="ml-2 text-gray-600">
                            4 - 5 phòng
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button className="border border-[#e9c976]/20 bg-[#1a2f6e] text-white hover:bg-[#142453]">
                      Tải mặt bằng chi tiết
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="nha-pho">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <PropertyCard
                  image="/images/property-4.jpg"
                  title="Nhà phố liền kề"
                  price="5 - 7 tỷ"
                  area="100 - 150m²"
                  bedrooms="3"
                  bathrooms="3"
                />

                <PropertyCard
                  image="/images/property-5.jpg"
                  title="Nhà phố vườn"
                  price="7 - 9 tỷ"
                  area="150 - 200m²"
                  bedrooms="3 - 4"
                  bathrooms="3 - 4"
                />

                <PropertyCard
                  image="/images/property-6.jpg"
                  title="Nhà phố duplex"
                  price="8 - 10 tỷ"
                  area="180 - 220m²"
                  bedrooms="4"
                  bathrooms="4"
                />
              </div>

              <div className="mt-12">
                <h3 className="mb-6 inline-block border-b-2 border-[#e9c976] pb-2 text-2xl font-semibold text-[#1a2f6e]">
                  Mặt bằng điển hình
                </h3>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="relative h-[300px] overflow-hidden rounded-xl border-2 border-[#e9c976]/20 shadow-lg md:h-[400px]">
                    <Image
                      src="/images/floorplan-house-1.jpg"
                      alt="Mặt bằng nhà phố liền kề"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h4 className="mb-4 text-xl font-semibold text-[#1a2f6e]">
                      Nhà phố liền kề
                    </h4>
                    <p className="mb-6 text-gray-600">
                      Nhà phố liền kề với thiết kế hiện đại, thông minh, tối ưu
                      không gian sống. Mỗi căn nhà phố đều được thiết kế tối ưu
                      công năng sử dụng, mang đến không gian sống tiện nghi cho
                      gia đình.
                    </p>
                    <div className="mb-6 space-y-3">
                      <div className="flex items-start">
                        <Check className="mr-3 mt-1 h-5 w-5 text-[#e9c976]" />
                        <div>
                          <span className="font-semibold text-[#1a2f6e]">
                            Diện tích đất:
                          </span>
                          <span className="ml-2 text-gray-600">
                            100 - 150m²
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Check className="mr-3 mt-1 h-5 w-5 text-[#e9c976]" />
                        <div>
                          <span className="font-semibold text-[#1a2f6e]">
                            Diện tích xây dựng:
                          </span>
                          <span className="ml-2 text-gray-600">80 - 120m²</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Check className="mr-3 mt-1 h-5 w-5 text-[#e9c976]" />
                        <div>
                          <span className="font-semibold text-[#1a2f6e]">
                            Số tầng:
                          </span>
                          <span className="ml-2 text-gray-600">
                            3 tầng + 1 tầng áp mái
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Check className="mr-3 mt-1 h-5 w-5 text-[#e9c976]" />
                        <div>
                          <span className="font-semibold text-[#1a2f6e]">
                            Số phòng ngủ:
                          </span>
                          <span className="ml-2 text-gray-600">3 phòng</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Check className="mr-3 mt-1 h-5 w-5 text-[#e9c976]" />
                        <div>
                          <span className="font-semibold text-[#1a2f6e]">
                            Số phòng tắm:
                          </span>
                          <span className="ml-2 text-gray-600">3 phòng</span>
                        </div>
                      </div>
                    </div>
                    <Button className="border border-[#e9c976]/20 bg-[#1a2f6e] text-white hover:bg-[#142453]">
                      Tải mặt bằng chi tiết
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="thuong-mai">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <PropertyCard
                  image="/images/property-7.jpg"
                  title="Shophouse mặt tiền"
                  price="10 - 12 tỷ"
                  area="120 - 150m²"
                  bedrooms="2"
                  bathrooms="2"
                />

                <PropertyCard
                  image="/images/property-8.jpg"
                  title="Shophouse góc"
                  price="12 - 15 tỷ"
                  area="150 - 180m²"
                  bedrooms="2 - 3"
                  bathrooms="2 - 3"
                />

                <PropertyCard
                  image="/images/property-9.jpg"
                  title="Shophouse đại lộ"
                  price="15 - 18 tỷ"
                  area="180 - 220m²"
                  bedrooms="3"
                  bathrooms="3"
                />
              </div>

              <div className="mt-12">
                <h3 className="mb-6 inline-block border-b-2 border-[#e9c976] pb-2 text-2xl font-semibold text-[#1a2f6e]">
                  Mặt bằng điển hình
                </h3>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="relative h-[300px] overflow-hidden rounded-xl border-2 border-[#e9c976]/20 shadow-lg md:h-[400px]">
                    <Image
                      src="/images/floorplan-shop-1.jpg"
                      alt="Mặt bằng shophouse mặt tiền"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h4 className="mb-4 text-xl font-semibold text-[#1a2f6e]">
                      Shophouse mặt tiền
                    </h4>
                    <p className="mb-6 text-gray-600">
                      Shophouse mặt tiền với thiết kế hiện đại, đa công năng,
                      vừa là không gian kinh doanh, vừa là không gian sống. Mỗi
                      căn shophouse đều được thiết kế tối ưu công năng sử dụng,
                      mang đến không gian kinh doanh và sinh sống lý tưởng.
                    </p>
                    <div className="mb-6 space-y-3">
                      <div className="flex items-start">
                        <Check className="mr-3 mt-1 h-5 w-5 text-[#e9c976]" />
                        <div>
                          <span className="font-semibold text-[#1a2f6e]">
                            Diện tích đất:
                          </span>
                          <span className="ml-2 text-gray-600">
                            120 - 150m²
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Check className="mr-3 mt-1 h-5 w-5 text-[#e9c976]" />
                        <div>
                          <span className="font-semibold text-[#1a2f6e]">
                            Diện tích xây dựng:
                          </span>
                          <span className="ml-2 text-gray-600">
                            100 - 130m²
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Check className="mr-3 mt-1 h-5 w-5 text-[#e9c976]" />
                        <div>
                          <span className="font-semibold text-[#1a2f6e]">
                            Số tầng:
                          </span>
                          <span className="ml-2 text-gray-600">4 tầng</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Check className="mr-3 mt-1 h-5 w-5 text-[#e9c976]" />
                        <div>
                          <span className="font-semibold text-[#1a2f6e]">
                            Mặt tiền:
                          </span>
                          <span className="ml-2 text-gray-600">6 - 8m</span>
                        </div>
                      </div>
                    </div>
                    <Button className="border border-[#e9c976]/20 bg-[#1a2f6e] text-white hover:bg-[#142453]">
                      Tải mặt bằng chi tiết
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Liên hệ */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-playfair mb-6 text-3xl font-bold text-[#1a2f6e] md:text-4xl">
                Đăng ký <span className="text-[#e9c976]">nhận thông tin</span>
              </h2>
              <p className="mb-8 text-gray-600">
                Để lại thông tin để nhận tư vấn chi tiết về các sản phẩm của dự
                án Economy City
              </p>

              <div className="mb-8 rounded-xl border border-[#e9c976]/20 bg-[#1a2f6e]/5 p-6">
                <div className="mb-4 flex items-center">
                  <ArrowRight className="mr-3 h-6 w-6 text-[#e9c976]" />
                  <h3 className="text-xl font-semibold text-[#1a2f6e]">
                    Ưu đãi đặc biệt
                  </h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Đăng ký ngay hôm nay để nhận những ưu đãi đặc biệt dành cho
                  khách hàng quan tâm đến dự án Economy City.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 text-[#e9c976]" />
                    <span className="text-gray-600">Ưu tiên chọn căn đẹp</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 text-[#e9c976]" />
                    <span className="text-gray-600">Chiết khấu đặc biệt</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 text-[#e9c976]" />
                    <span className="text-gray-600">Quà tặng giá trị</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center">
                <div className="mr-6">
                  <p className="text-lg font-semibold text-[#1a2f6e]">
                    Hotline
                  </p>
                  <p className="text-xl font-bold text-[#e9c976]">
                    0966.001.001
                  </p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-[#1a2f6e]">Email</p>
                  <p className="text-xl font-bold text-[#e9c976]">
                    info@economycity.vn
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-xl border border-[#e9c976]/30 bg-white p-8 shadow-lg">
                <h3 className="mb-6 text-2xl font-semibold text-[#1a2f6e]">
                  Đăng ký tư vấn
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
