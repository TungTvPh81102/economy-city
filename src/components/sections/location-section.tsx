import React from 'react'
import { Badge } from '@/components/ui/badge'

const LocationSection = () => {
  return (
    <section id="vị-trí" className="py-16 md:py-10">
      <div className="container">
        <div className="mb-12 flex flex-col items-center">
          <Badge className="mb-4 cursor-pointer bg-[#EEF0F7] text-primary hover:bg-primary hover:text-white">
            Vị trí
          </Badge>
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Vị trí <span className="text-primary">chiến lược</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-primary"></div>
          <p className="mt-6 max-w-3xl text-center text-gray-700">
            ECONOMY CITY sở hữu vị trí đắc địa tại trung tâm thành phố, kết nối
            thuận tiện đến các tiện ích ngoại khu và các tuyến giao thông huyết
            mạch.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="relative h-[400px] overflow-hidden rounded-xl shadow-lg lg:col-span-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.3488610780555!2d105.98675027489662!3d20.97864844610006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a5c3ffb2221f%3A0x2b139d0544dcaab7!2zROG7sSDDoW4gRWNvbm9teSBDaXR5IChLaHUgxJDDtCB0aOG7iyBIb8OgbmcgVsawxqFuZyk!5e0!3m2!1svi!2s!4v1747151305768!5m2!1svi!2s"
              width="800"
              height="600"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-xl border border-[#C7CDDF] bg-[#EEF0F7] p-6">
              <h3 className="mb-4 text-xl font-semibold text-primary">
                Kết nối thuận tiện
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    name: 'KCN Tân Quang',
                    distance: '5 phút di chuyển',
                  },
                  {
                    name: 'KCN Phố Nối A',
                    distance: '9 phút di chuyển',
                  },
                  {
                    name: 'Nhà thi đấu Gia Lâm',
                    distance: '12 phút di chuyển',
                  },
                  {
                    name: 'Hồ Hoàn Kiếm',
                    distance: '20 phút di chuyển',
                  },
                  {
                    name: 'Sân bay Nội Bài',
                    distance: '40 phút di chuyển',
                  },
                  {
                    name: 'Trung tâm thành phố Hưng Yên',
                    distance: '40 phút di chuyển',
                  },
                ].map((item, index) => (
                  <li
                    key={`${item.name}-${index}`}
                    className="flex items-center justify-between border-b border-[#C7CDDF] pb-2 last:border-0"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">•</span>
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-[#C7CDDF] bg-white text-sm"
                    >
                      {item.distance}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
