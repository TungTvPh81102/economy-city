import React from 'react'
import { locationMetadata } from '@/lib/metadata'
import Image from 'next/image'
import { CheckCircle2, MapPin } from 'lucide-react'
import ContactForm from '@/components/share/contact-form'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

export const metadata = locationMetadata

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
            Vị trí <span className="text-[#f0d989]">chiến lược</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl">
            Economy City sở hữu vị trí đắc địa, kết nối thuận tiện đến các tiện
            ích ngoại khu và trung tâm thành phố
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-playfair mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Vị trí dự án <span className="text-primary">ECONOMY CITY</span>
            </h2>
            <p className="text-gray-600">Vị trí dự án Economy City Hưng Yên</p>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-playfair mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                Vị trí <span className="text-primary">tổng quan</span>
              </h2>
              <p className="mb-6 text-justify leading-relaxed text-gray-600">
                Vị trí dự án Economy City đắc địa khi nằm trong lõi đô thị Thị
                Trấn Văn Lâm. Bao quanh dự án là các cơ sở hành chính trung tâm
                của huyện như ủy ban huyện, nhà văn hóa huyện. Đặc biệt dự án
                rất gần các đại đô thị lớn như Ecopark City, Vinhomes Ocenan
                Park. Sự kết nối giữa các đô thị lớn sẽ làm cho hạ tầng khu vực
                được nâng tầm và được ưu tiên hạ tầng. Dự án Economy City Hưng
                Yên sẽ là trung tâm kinh tế, trung tâm giải trí của cả khu vực.
              </p>
              <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                {[
                  {
                    title: 'Vị trí trung tâm',
                    desc: 'Nằm tại trung tâm khu vực phát triển',
                  },
                  {
                    title: 'Kết nối thuận tiện',
                    desc: 'Liền kề các tuyến đường huyết mạch',
                  },
                  {
                    title: 'Tiện ích ngoại khu',
                    desc: 'Gần các trung tâm thương mại, trường học',
                  },
                  {
                    title: 'Tiềm năng phát triển',
                    desc: 'Nằm trong khu vực có tiềm năng phát triển cao',
                  },
                ].map((item, i) => (
                  <div className="flex items-start" key={i}>
                    <CheckCircle2 className="mr-2 mt-1 size-5 shrink-0 text-primary" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center rounded-lg bg-blue-50 p-4">
                <MapPin className="mr-3 size-6 shrink-0 text-primary" />
                <p className="text-gray-700">
                  <span className="font-semibold">Địa chỉ:</span> Thị trấn Như
                  Quỳnh, huyện Văn Lâm, tỉnh Hưng Yên
                </p>
              </div>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <div className="relative h-[400px] cursor-pointer overflow-hidden rounded-xl shadow-lg md:h-[500px]">
                  <Image
                    src="/images/vi-tri/1.jpg"
                    alt="Vị trí Economy City"
                    fill
                    className="object-cover"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl border-none bg-transparent p-0 shadow-none">
                <Image
                  src="/images/vi-tri/1.jpg"
                  alt="Vị trí Economy City Preview"
                  width={1200}
                  height={800}
                  className="h-auto w-full rounded-lg object-contain"
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-playfair mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Tiện ích <span className="text-primary">ngoại khu</span>
            </h2>
            <p className="text-gray-600">
              Dễ dàng tiếp cận các tiện ích ngoại khu đa dạng
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative h-[300px] overflow-hidden rounded-xl shadow-lg md:h-[400px]">
              <Image
                src="/images/location-amenities-1.jpg"
                alt="Tiện ích ngoại khu"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="mb-6 text-2xl font-semibold text-gray-900">
                Giáo dục & Y tế
              </h3>
              <div className="mb-6 space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-1 size-5 shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Trường học quốc tế
                    </h4>
                    <p className="text-gray-600">
                      Cách 5 phút di chuyển, cung cấp chương trình giáo dục quốc
                      tế chất lượng cao
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-1 size-5 shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Bệnh viện quốc tế
                    </h4>
                    <p className="text-gray-600">
                      Cách 10 phút di chuyển, cung cấp dịch vụ y tế chất lượng
                      cao
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-1 size-5 shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Đại học</h4>
                    <p className="text-gray-600">
                      Gần các trường đại học lớn, thuận tiện cho việc học tập và
                      nghiên cứu
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-2xl font-semibold text-gray-900">
                Mua sắm & Giải trí
              </h3>
              <div className="mb-6 space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-1 size-5 shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Trung tâm thương mại
                    </h4>
                    <p className="text-gray-600">
                      Cách 5 phút di chuyển, cung cấp đa dạng các dịch vụ mua
                      sắm và giải trí
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-1 size-5 shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Nhà hàng & Café
                    </h4>
                    <p className="text-gray-600">
                      Nhiều nhà hàng và quán café nổi tiếng trong khu vực
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-1 size-5 shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Công viên & Khu vui chơi
                    </h4>
                    <p className="text-gray-600">
                      Gần các công viên lớn, khu vui chơi giải trí cho gia đình
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[300px] overflow-hidden rounded-xl shadow-lg md:h-[400px]">
              <Image
                src="/images/location-amenities-2.jpg"
                alt="Tiện ích ngoại khu"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-playfair mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Bản đồ <span className="text-primary">vị trí</span>
            </h2>
            <p className="text-gray-600">
              Xem chi tiết vị trí dự án Economy City trên bản đồ
            </p>
          </div>

          <div className="relative mb-8 h-[400px] overflow-hidden rounded-xl shadow-lg md:h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.3488610780555!2d105.98675027489662!3d20.97864844610006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a5c3ffb2221f%3A0x2b139d0544dcaab7!2zROG7sSDDoW4gRWNvbm9teSBDaXR5IChLaHUgxJDDtCB0aOG7iyBIb8OgbmcgVsawxqFuZyk!5e0!3m2!1svi!2s!4v1747215202471!5m2!1svi!2s"
              width="1400"
              height="600"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-playfair mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                Đăng ký <span className="text-primary">tham quan dự án</span>
              </h2>
              <p className="mb-8 text-gray-600">
                Để lại thông tin để đăng ký tham quan dự án Economy City và nhận
                tư vấn chi tiết từ chuyên viên của chúng tôi
              </p>

              <div className="mb-8 rounded-xl bg-blue-50 p-6">
                <div className="mb-4 flex items-center">
                  <MapPin className="mr-3 size-6 text-primary" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Địa chỉ dự án
                  </h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Thị trấn Như Quỳnh, huyện Văn Lâm, tỉnh Hưng Yên.
                </p>
                <div className="flex items-center">
                  <div className="mr-6">
                    <p className="text-lg font-semibold text-gray-900">
                      Hotline
                    </p>
                    <p className="text-xl font-bold text-gray-700">
                      0966.001.001
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">Email</p>
                    <p className="text-gray-700">info@economycity.com.vn</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page
