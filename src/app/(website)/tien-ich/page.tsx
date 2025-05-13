import React from 'react'
import Image from 'next/image'
import { Check, Heart, Leaf, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const Page = () => {
  return (
    <>
      <section className="relative h-[450px] md:h-[550px]">
        <Image
          src="/images/tien-ich.jpg"
          alt="Liên hệ Economy City"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2c64]/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
          <h1 className="font-playfair mb-4 text-4xl font-bold md:text-5xl">
            Tiện ích <span className="text-secondary">đẳng cấp</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl">
            Hệ thống tiện ích nội khu đa dạng, đáp ứng mọi nhu cầu của cư dân
          </p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-10">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col items-center">
            <Badge className="mb-4 cursor-pointer bg-[#f0d989]/30 text-[#1a2c64] hover:bg-[#f0d989]/50">
              Tiện ích
            </Badge>
            <h2 className="text-center text-3xl font-bold md:text-4xl">
              Tiện ích tại<span className="text-primary">ECONOMY CITY</span>
            </h2>
            <p className="mt-6 max-w-2xl text-center text-gray-700">
              Hãy liên hệ với chúng tôi để được tư vấn chi tiết về dự án Economy
              City
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-playfair mb-6 text-3xl font-bold text-primary md:text-4xl">
                Tổng quan <span className="text-secondary">tiện ích</span>
              </h2>
              <p className="mb-8 leading-relaxed text-gray-600">
                Economy City mang đến hệ thống tiện ích nội khu đẳng cấp, đáp
                ứng mọi nhu cầu của cư dân. Từ không gian sống xanh, khu vui
                chơi giải trí, đến các tiện ích thể thao, giáo dục và y tế, tất
                cả đều được quy hoạch bài bản và thiết kế hiện đại.
              </p>
              <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex items-start">
                  <Check className="mr-3 mt-1 size-5 text-secondary" />
                  <div>
                    <h3 className="font-semibold text-primary">
                      Không gian xanh
                    </h3>
                    <p className="text-sm text-gray-600">
                      Hệ thống công viên, hồ cảnh quan
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="mr-3 mt-1 size-5 text-secondary" />
                  <div>
                    <h3 className="font-semibold text-primary">
                      Tiện ích thể thao
                    </h3>
                    <p className="text-sm text-gray-600">
                      Hồ bơi, sân tennis, phòng gym
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="mr-3 mt-1 size-5 text-secondary" />
                  <div>
                    <h3 className="font-semibold text-primary">
                      Tiện ích giáo dục
                    </h3>
                    <p className="text-sm text-gray-600">
                      Trường mầm non, khu vui chơi trẻ em
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="mr-3 mt-1 size-5 text-secondary" />
                  <div>
                    <h3 className="font-semibold text-primary">An ninh 24/7</h3>
                    <p className="text-sm text-gray-600">
                      Hệ thống an ninh hiện đại, bảo vệ 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] overflow-hidden rounded-xl shadow-lg md:h-[500px]">
              <Image
                src="/images/amenities-overview.jpg"
                alt="Tiện ích Economy City"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-x-0 bottom-0 p-4"
                style={{ backgroundColor: 'rgba(26, 44, 100, 0.8)' }}
              >
                <p className="font-medium text-white">
                  Economy City - Không gian sống đẳng cấp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7EDD6] py-20 md:py-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="font-playfair mb-4 text-3xl font-bold text-primary md:text-5xl">
              Không gian <span className="text-secondary">xanh</span>
            </h2>
            <p className="text-lg text-gray-600">
              Hệ thống công viên, hồ cảnh quan và đường dạo bộ
            </p>
          </div>

          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative h-[350px] overflow-hidden rounded-xl shadow-lg md:h-[450px]">
              <Image
                src="/images/green-space-1.jpg"
                alt="Không gian xanh"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-lg font-medium text-white">
                  Công viên trung tâm
                </p>
              </div>
            </div>

            <div>
              <div className="mb-8 flex items-center">
                <div className="mr-4 flex size-16 items-center justify-center rounded-full text-primary">
                  <Leaf className="size-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold text-primary">
                  Công viên trung tâm
                </h3>
              </div>

              <p className="mb-8 text-lg text-gray-600">
                Công viên trung tâm rộng lớn với nhiều cây xanh, thảm cỏ và
                đường dạo bộ, tạo không gian thư giãn lý tưởng cho cư dân. Tại
                đây, bạn có thể tận hưởng không khí trong lành, tập thể dục buổi
                sáng hoặc đơn giản là thư giãn sau một ngày làm việc mệt mỏi.
              </p>

              <div className="mb-8 space-y-4">
                <div className="flex items-start">
                  <Check className="mr-3 mt-1 size-5 text-secondary" />
                  <span className="text-gray-600">
                    Diện tích lên đến 5 hecta
                  </span>
                </div>
                <div className="flex items-start">
                  <Check className="mr-3 mt-1 size-5 text-secondary" />
                  <span className="text-gray-600">
                    Nhiều loại cây xanh đa dạng
                  </span>
                </div>
                <div className="flex items-start">
                  <Check className="mr-3 mt-1 size-5 text-secondary" />
                  <span className="text-gray-600">
                    Đường dạo bộ, khu vực ngồi thư giãn
                  </span>
                </div>
                <div className="flex items-start">
                  <Check className="mr-3 mt-1 size-5 text-secondary" />
                  <span className="text-gray-600">
                    Khu vực tập thể dục ngoài trời
                  </span>
                </div>
              </div>

              <Button className="bg-primary px-6 py-3 text-base font-medium text-white">
                Tìm hiểu thêm
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <div className="mb-8 flex items-center">
                <div className="mr-4 flex size-16 items-center justify-center rounded-full text-primary">
                  <svg
                    className="size-8 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-primary">
                  Hồ cảnh quan
                </h3>
              </div>

              <p className="mb-8 text-lg text-gray-600">
                Hồ cảnh quan rộng lớn với thiết kế hiện đại, tạo điểm nhấn cho
                toàn bộ dự án. Hồ không chỉ có giá trị thẩm mỹ mà còn góp phần
                điều hòa không khí, tạo môi trường sống trong lành cho cư dân.
              </p>

              <div className="mb-8 space-y-4">
                <div className="flex items-start">
                  <Check className="mr-3 mt-1 size-5 text-secondary" />
                  <span className="text-gray-600">Diện tích mặt hồ lớn</span>
                </div>
                <div className="flex items-start">
                  <Check className="mr-3 mt-1 size-5 text-secondary" />
                  <span className="text-gray-600">Đường dạo quanh hồ</span>
                </div>
                <div className="flex items-start">
                  <Check className="mr-3 mt-1 size-5 text-secondary" />
                  <span className="text-gray-600">
                    Hệ thống chiếu sáng hiện đại
                  </span>
                </div>
                <div className="flex items-start">
                  <Check className="mr-3 mt-1 size-5 text-secondary" />
                  <span className="text-gray-600">
                    Khu vực ngồi thư giãn ven hồ
                  </span>
                </div>
              </div>

              <Button className="bg-primary px-6 py-3 text-base font-medium text-white">
                Tìm hiểu thêm
              </Button>
            </div>

            <div className="relative h-[350px] overflow-hidden rounded-xl shadow-lg md:h-[450px]">
              <Image
                src="/images/green-space-2.jpg"
                alt="Hồ cảnh quan"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-lg font-medium text-white">Hồ cảnh quan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="font-playfair mb-4 text-3xl font-bold text-primary md:text-5xl">
              Tiện ích <span className="text-secondary">thể thao</span>
            </h2>
            <p className="text-lg text-gray-600">
              Hệ thống tiện ích thể thao hiện đại, đáp ứng nhu cầu rèn luyện sức
              khỏe của cư dân
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-shadow hover:shadow-xl">
              <div className="relative mb-6 h-56 overflow-hidden rounded-lg">
                <Image
                  src="/images/sport-1.jpg"
                  alt="Hồ bơi"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <p className="text-lg font-medium text-white">
                    Hồ bơi hiện đại
                  </p>
                </div>
              </div>
              <div className="mb-6 flex items-center">
                <div className="mr-4 flex size-14 items-center justify-center rounded-full bg-[#F7EDD6]">
                  <svg
                    className="size-7 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary">Hồ bơi</h3>
              </div>
              <p className="mb-6 text-gray-600">
                Hồ bơi hiện đại với thiết kế sang trọng, đáp ứng nhu cầu bơi lội
                và thư giãn của cư dân.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="mr-3 mt-1 size-5 text-secondary" />
                  <span className="text-gray-600">
                    Hồ bơi người lớn và trẻ em
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-1 size-5 text-secondary" />
                  <span className="text-gray-600">Khu vực thư giãn ven hồ</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-1 size-5 text-secondary" />
                  <span className="text-gray-600">
                    Hệ thống lọc nước hiện đại
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-shadow hover:shadow-xl">
              <div className="relative mb-6 h-56 overflow-hidden rounded-lg">
                <Image
                  src="/images/sport-2.jpg"
                  alt="Phòng gym"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <p className="text-lg font-medium text-white">
                    Phòng tập hiện đại
                  </p>
                </div>
              </div>
              <div className="mb-6 flex items-center">
                <div className="mr-4 flex size-14 items-center justify-center rounded-full bg-[#F7EDD6]">
                  <Zap className="size-7 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  Phòng gym
                </h3>
              </div>
              <p className="mb-6 text-gray-600">
                Phòng tập gym hiện đại với đầy đủ trang thiết bị, đáp ứng nhu
                cầu rèn luyện sức khỏe của cư dân.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="mr-3 mt-1 size-5 text-secondary" />
                  <span className="text-gray-600">Trang thiết bị hiện đại</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-1 size-5 text-secondary" />
                  <span className="text-gray-600">
                    Không gian rộng rãi, thoáng mát
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-1 size-5 text-secondary" />
                  <span className="text-gray-600">
                    Huấn luyện viên chuyên nghiệp
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-shadow hover:shadow-xl">
              <div className="relative mb-6 h-56 overflow-hidden rounded-lg">
                <Image
                  src="/images/sport-3.jpg"
                  alt="Sân tennis"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <p className="text-lg font-medium text-white">
                    Sân tennis tiêu chuẩn
                  </p>
                </div>
              </div>
              <div className="mb-6 flex items-center">
                <div className="mr-4 flex size-14 items-center justify-center rounded-full bg-[#F7EDD6]">
                  <svg
                    className="size-7 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  Sân tennis
                </h3>
              </div>
              <p className="mb-6 text-gray-600">
                Sân tennis tiêu chuẩn quốc tế, đáp ứng nhu cầu chơi tennis của
                cư dân.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="mr-3 mt-1 size-5 text-secondary" />
                  <span className="text-gray-600">
                    Mặt sân tiêu chuẩn quốc tế
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-1 size-5 text-secondary" />
                  <span className="text-gray-600">
                    Hệ thống chiếu sáng hiện đại
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-1 size-5 text-secondary" />
                  <span className="text-gray-600">
                    Khu vực nghỉ ngơi cho người chơi
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7EDD6] py-20 md:py-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl rounded-2xl bg-white p-8 shadow-xl">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-8 text-gray-600">
                  Đăng ký tham quan dự án Economy City để trải nghiệm không gian
                  sống đẳng cấp và tìm hiểu thêm về các tiện ích hiện đại. Chúng
                  tôi sẵn sàng tư vấn và hỗ trợ bạn tìm kiếm căn hộ phù hợp.
                </p>
                <div className="mb-8 space-y-4">
                  <div className="flex items-start">
                    <Check className="mr-3 mt-1 size-5 text-secondary" />
                    <span className="text-gray-600">
                      Tham quan miễn phí dự án
                    </span>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-3 mt-1 size-5 text-secondary" />
                    <span className="text-gray-600">
                      Tư vấn từ chuyên viên bất động sản
                    </span>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-3 mt-1 size-5 text-secondary" />
                    <span className="text-gray-600">
                      Hỗ trợ thủ tục pháp lý và tài chính
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Heart className="mr-2 size-5 text-secondary" />
                  <p className="italic text-gray-600">
                    Hãy liên hệ ngay hôm nay để nhận ưu đãi đặc biệt!
                  </p>
                </div>
              </div>

              <div>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-600">
                        Họ và tên
                      </label>
                      <input
                        type="text"
                        className="focus:border-gold w-full rounded-lg border border-gray-200 p-3 focus:outline-none"
                        placeholder="Nguyễn Văn A"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-600">
                        Số điện thoại
                      </label>
                      <input
                        type="tel"
                        className="focus:border-gold w-full rounded-lg border border-gray-200 p-3 focus:outline-none"
                        placeholder="0912 345 678"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      className="focus:border-gold w-full rounded-lg border border-gray-200 p-3 focus:outline-none"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-600">
                      Lời nhắn
                    </label>
                    <textarea
                      className="focus:border-gold h-32 w-full resize-none rounded-lg border border-gray-200 p-3 focus:outline-none"
                      placeholder="Tôi quan tâm đến căn hộ 2 phòng ngủ..."
                    />
                  </div>
                  <Button className="w-full bg-primary px-6 py-5 text-base font-medium text-white">
                    Đăng ký ngay
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page
