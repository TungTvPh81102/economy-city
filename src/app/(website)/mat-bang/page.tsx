import React from 'react'
import { floorplanMetadata } from '@/lib/metadata'
import Image from 'next/image'
import { Building, CheckCircle2, Download, Home, Store } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = floorplanMetadata

const Page = () => {
  return (
    <>
      <section className="relative h-[450px] md:h-[550px]">
        <Image
          src="/images/mat-bang.jpg"
          alt="Mặt bằng Economy City"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2c64]/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
          <h1 className="font-playfair mb-4 text-4xl font-bold md:text-5xl">
            Mặt bằng & <span className="text-[#f0d989]">Sản phẩm</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl">
            Đa dạng sản phẩm với thiết kế hiện đại, đáp ứng nhu cầu của mọi
            khách hàng
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-playfair mb-4 text-3xl font-bold md:text-4xl">
              Mặt bằng <span className="text-primary">tổng thể</span>
            </h2>
            <p className="text-gray-600">
              Kiệt tác kiến trúc - Không gian sống đẳng cấp - Trải nghiệm cuộc
              sống viên mãn
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-xl shadow-lg md:h-[500px]">
              <Image
                src="/images/mat-bang/1.png"
                alt="Tiện ích Economy City"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-x-0 bottom-0 p-4"
                style={{ backgroundColor: 'rgba(26, 44, 100, 0.8)' }}
              >
                <p className="font-medium text-white">
                  Economy City - Kiệt tác kiến trúc xanh
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-playfair mb-8 text-3xl font-bold md:text-4xl">
                Thiết kế <span className="">đột phá</span>
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-700">
                Economy City không chỉ là nơi an cư, mà còn là kiệt tác nghệ
                thuật sống hoàn hảo. Được quy hoạch bởi đội ngũ kiến trúc sư
                hàng đầu, dự án mang đến một hệ sinh thái tiện ích đa dạng và
                đẳng cấp, nơi mỗi chi tiết đều được chăm chút tỉ mỉ để tạo nên
                không gian sống đẳng cấp, hài hòa với thiên nhiên.
              </p>
              <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-1 size-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-primary">
                      Cảnh quan xanh mát
                    </h3>
                    <p className="text-sm text-gray-600">
                      Hệ thống công viên xanh, hồ cảnh quan với 40% diện tích
                      phủ xanh
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-1 size-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-primary">
                      Tiện ích thể thao cao cấp
                    </h3>
                    <p className="text-sm text-gray-600">
                      Hồ bơi vô cực, sân tennis tiêu chuẩn quốc tế, phòng gym
                      hiện đại
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-1 size-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-primary">
                      Giáo dục tinh hoa
                    </h3>
                    <p className="text-sm text-gray-600">
                      Hệ thống trường học liên cấp, không gian sáng tạo cho trẻ
                      em
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-1 size-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-primary">
                      {' '}
                      An ninh thông minh
                    </h3>
                    <p className="text-sm text-gray-600">
                      Hệ thống an ninh 5 lớp, camera AI, kiểm soát thông minh
                      24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="group relative cursor-pointer rounded-xl border border-[#e9c976]/30 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="absolute right-6 top-6 text-[#e9c976]/20 opacity-70 transition-all duration-300 group-hover:opacity-100">
                  <Home className="size-20" />
                </div>
                <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-[#1a2f6e] to-[#2a4e9e]">
                  <Home className="size-8 text-white" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[#1a2f6e]">
                  Khu biệt thự
                </h3>
                <p className="mb-6 text-gray-700">
                  Quần thể biệt thự sang trọng với thiết kế độc bản, vật liệu
                  cao cấp và không gian sống đẳng cấp đến từng chi tiết.
                </p>
                <ul className="mb-8 space-y-3">
                  {[
                    'Biệt thự đơn lập (300-500m²)',
                    'Biệt thự song lập (250-350m²)',
                    'Biệt thự liền kề (200-280m²)',
                  ].map((item, index) => (
                    <li className="flex items-center" key={index}>
                      <CheckCircle2 className="mr-2 size-5 shrink-0 text-primary" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="group relative cursor-pointer rounded-xl border border-[#e9c976]/30 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="absolute right-6 top-6 text-[#e9c976]/20 opacity-70 transition-all duration-300 group-hover:opacity-100">
                  <Building className="size-20" />
                </div>
                <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-[#1a2f6e] to-[#2a4e9e]">
                  <Building className="size-8 text-white" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[#1a2f6e]">
                  Khu nhà phố
                </h3>
                <p className="mb-6 text-gray-700">
                  Nhà phố hiện đại với thiết kế thông minh, tối ưu không gian
                  sống và tích hợp mảng xanh vào từng căn nhà.
                </p>
                <ul className="mb-8 space-y-3">
                  {[
                    'Nhà phố liền kề (120-200m²)',
                    ' Nhà phố vườn (150-220m²)',
                    ' Nhà phố duplex (180-250m²)',
                  ].map((item, index) => (
                    <li className="flex items-center" key={index}>
                      <CheckCircle2 className="mr-2 size-5 shrink-0 text-primary" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="group relative cursor-pointer rounded-xl border border-[#e9c976]/30 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="absolute right-6 top-6 text-[#e9c976]/20 opacity-70 transition-all duration-300 group-hover:opacity-100">
                  <Store className="size-20" />
                </div>
                <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-[#1a2f6e] to-[#2a4e9e]">
                  <Store className="size-8 text-white" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[#1a2f6e]">
                  Khu thương mại
                </h3>
                <p className="mb-6 text-gray-700">
                  Khu thương mại sầm uất với đa dạng loại hình kinh doanh, tạo
                  nên chuỗi dịch vụ hoàn hảo cho cộng đồng cư dân.
                </p>
                <ul className="mb-8 space-y-3">
                  {[
                    'Shophouse đa năng (150-200m²)',
                    'Trung tâm thương mại (10.000m²)',
                    'Phố ẩm thực đẳng cấp (2.000m²)',
                  ].map((item, index) => (
                    <li className="flex items-center" key={index}>
                      <CheckCircle2 className="mr-2 size-5 shrink-0 text-primary" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="mb-6 text-lg font-medium text-gray-700">
              Tải xuống bản vẽ mặt bằng chi tiết để khám phá trọn vẹn Economy
              City
            </p>
            <Button className="group relative overflow-hidden bg-[#1a2f6e] px-8 py-3 text-lg font-medium text-white transition-all hover:bg-[#142453]">
              <span className="relative z-10 flex items-center">
                <Download className="mr-2 size-5" />
                <span>Tải mặt bằng tổng thể</span>
              </span>
              <span className="absolute bottom-0 left-0 h-full w-0 bg-[#e9c976] transition-all duration-300 group-hover:w-full"></span>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page
