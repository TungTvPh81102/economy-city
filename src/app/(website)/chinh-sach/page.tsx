import React from 'react'
import { policyMetadata } from '@/lib/metadata'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Check, FileText, Download } from 'lucide-react'
import ContactForm from '@/components/share/contact-form'

export const metadata = policyMetadata

const Page = () => {
  return (
    <>
      <section className="relative h-[450px] md:h-[550px]">
        <Image
          src="/images/chinh-sach.jpg"
          alt="Chính sách Economy City"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2c64]/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
          <h1 className="font-playfair mb-4 text-4xl font-bold md:text-5xl">
            Chính sách <span className="text-[#f0d989]">bán hàng</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl">
            Thông tin chi tiết về các chính sách bán hàng của dự án Economy City
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-playfair mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Chính sách bán hàng tại{' '}
              <span className="text-primary">ECONOMY CITY</span>
            </h2>
            <p className="text-gray-600">
              Thông tin chi tiết về các chính sách bán hàng của dự án Economy
              City
            </p>
          </div>

          <Tabs defaultValue="thanh-toan" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-4">
              <TabsTrigger value="thanh-toan">Thanh toán</TabsTrigger>
              <TabsTrigger value="vay">Hỗ trợ vay</TabsTrigger>
              <TabsTrigger value="ban-giao">Bàn giao</TabsTrigger>
              <TabsTrigger value="bao-mat">Bảo mật</TabsTrigger>
            </TabsList>

            <TabsContent value="thanh-toan">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <h3 className="mb-6 text-2xl font-semibold text-gray-900">
                    Chính sách thanh toán
                  </h3>
                  <div className="space-y-6">
                    <p className="text-gray-600">
                      Economy City cung cấp nhiều phương thức thanh toán linh
                      hoạt, giúp khách hàng dễ dàng sở hữu sản phẩm bất động sản
                      tại dự án. Dưới đây là các phương thức thanh toán chính:
                    </p>

                    <div>
                      <h4 className="mb-3 text-xl font-semibold text-gray-900">
                        1. Thanh toán tiêu chuẩn
                      </h4>
                      <p className="mb-4 text-gray-600">
                        Phương thức thanh toán tiêu chuẩn với lịch thanh toán
                        linh hoạt, phù hợp với đa số khách hàng.
                      </p>
                      <ul className="mb-6 space-y-2">
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Đặt cọc: 10% giá trị sản phẩm
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Đợt 1: 20% sau 30 ngày
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Đợt 2: 20% sau 60 ngày
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Đợt 3: 20% sau 90 ngày
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Đợt 4: 25% khi nhận thông báo bàn giao
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Đợt 5: 5% khi nhận sổ
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 text-xl font-semibold text-gray-900">
                        2. Thanh toán nhanh
                      </h4>
                      <p className="mb-4 text-gray-600">
                        Phương thức thanh toán nhanh với nhiều ưu đãi hấp dẫn
                        cho khách hàng thanh toán sớm.
                      </p>
                      <ul className="mb-6 space-y-2">
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Thanh toán 95% giá trị sản phẩm
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Chiết khấu 8% giá trị sản phẩm
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Tặng gói nội thất 200 triệu
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Miễn phí quản lý 2 năm
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Đợt cuối: 5% khi nhận sổ
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 text-xl font-semibold text-gray-900">
                        3. Thanh toán theo tiến độ
                      </h4>
                      <p className="mb-4 text-gray-600">
                        Phương thức thanh toán theo tiến độ xây dựng, phù hợp
                        với khách hàng muốn theo dõi tiến độ dự án.
                      </p>
                      <ul className="mb-6 space-y-2">
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Đặt cọc: 10% giá trị sản phẩm
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Đợt 1: 20% khi hoàn thành móng
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Đợt 2: 20% khi hoàn thành tầng 2
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Đợt 3: 20% khi hoàn thành tầng mái
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Đợt 4: 25% khi nhận thông báo bàn giao
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Đợt 5: 5% khi nhận sổ
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button className="bg-primary hover:brightness-110">
                      <Download className="mr-2 size-4" />
                      Tải chính sách thanh toán
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="mb-8 rounded-xl bg-[#485683] p-6">
                    <div className="mb-4 flex items-center">
                      <FileText className="mr-3 size-6 text-white" />
                      <h3 className="text-xl font-semibold text-white">
                        Thông tin chính sách
                      </h3>
                    </div>
                    <p className="text-white">
                      Chính sách thanh toán có thể thay đổi theo thời gian. Vui
                      lòng liên hệ với chúng tôi để nhận thông tin chi tiết và
                      cập nhật nhất.
                    </p>
                  </div>

                  <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                    <h3 className="mb-4 text-xl font-semibold text-gray-900">
                      Đăng ký tư vấn
                    </h3>
                    <p className="mb-6 text-gray-600">
                      Để lại thông tin để nhận tư vấn chi tiết về chính sách
                      thanh toán
                    </p>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="vay">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <h3 className="mb-6 text-2xl font-semibold text-gray-900">
                    Chính sách hỗ trợ vay
                  </h3>
                  <div className="space-y-6">
                    <p className="text-gray-600">
                      Economy City hợp tác với nhiều ngân hàng lớn để cung cấp
                      các gói vay ưu đãi cho khách hàng. Dưới đây là thông tin
                      chi tiết về chính sách hỗ trợ vay:
                    </p>

                    <div>
                      <h4 className="mb-3 text-xl font-semibold text-gray-900">
                        1. Gói vay ưu đãi
                      </h4>
                      <p className="mb-4 text-gray-600">
                        Gói vay ưu đãi với lãi suất thấp, thời gian vay dài,
                        giúp khách hàng dễ dàng sở hữu sản phẩm bất động sản tại
                        Economy City.
                      </p>
                      <ul className="mb-6 space-y-2">
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Hỗ trợ vay đến 70% giá trị sản phẩm
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Lãi suất ưu đãi 0% trong 24 tháng
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Thời gian vay lên đến 25 năm
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Hỗ trợ thủ tục vay vốn
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Đối tác nhiều ngân hàng lớn
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 text-xl font-semibold text-gray-900">
                        2. Ngân hàng đối tác
                      </h4>
                      <p className="mb-4 text-gray-600">
                        Economy City hợp tác với nhiều ngân hàng lớn để cung cấp
                        các gói vay ưu đãi cho khách hàng.
                      </p>
                      <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((bank) => (
                          <div
                            key={bank}
                            className="flex h-20 items-center justify-center rounded-lg border border-gray-100 bg-white p-4 shadow-sm"
                          >
                            <div className="relative h-10 w-full">
                              <Image
                                src={`/images/bank-${bank}.png`}
                                alt={`Ngân hàng đối tác ${bank}`}
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-3 text-xl font-semibold text-gray-900">
                        3. Quy trình vay
                      </h4>
                      <p className="mb-4 text-gray-600">
                        Quy trình vay đơn giản, nhanh chóng, giúp khách hàng dễ
                        dàng hoàn thành thủ tục vay.
                      </p>
                      <ul className="mb-6 space-y-2">
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Bước 1: Đăng ký tư vấn vay
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Bước 2: Chuẩn bị hồ sơ vay
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Bước 3: Nộp hồ sơ vay
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Bước 4: Thẩm định hồ sơ
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Bước 5: Phê duyệt khoản vay
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Bước 6: Giải ngân
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button className="bg-primary hover:brightness-110">
                      <Download className="mr-2 size-4" />
                      Tải chính sách hỗ trợ vay
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="mb-8 rounded-xl bg-[#485683] p-6">
                    <div className="mb-4 flex items-center">
                      <FileText className="mr-3 size-6 text-white" />
                      <h3 className="text-xl font-semibold text-white">
                        Thông tin chính sách
                      </h3>
                    </div>
                    <p className="text-white">
                      Chính sách hỗ trợ vay có thể thay đổi theo thời gian và
                      tùy thuộc vào chính sách của từng ngân hàng. Vui lòng liên
                      hệ với chúng tôi để nhận thông tin chi tiết và cập nhật
                      nhất.
                    </p>
                  </div>

                  <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                    <h3 className="mb-4 text-xl font-semibold text-gray-900">
                      Đăng ký tư vấn
                    </h3>
                    <p className="mb-6 text-gray-600">
                      Để lại thông tin để nhận tư vấn chi tiết về chính sách hỗ
                      trợ vay
                    </p>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ban-giao">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <h3 className="mb-6 text-2xl font-semibold text-gray-900">
                    Chính sách bàn giao
                  </h3>
                  <div className="space-y-6">
                    <p className="text-gray-600">
                      Economy City cam kết bàn giao sản phẩm đúng tiến độ, đúng
                      chất lượng, đảm bảo quyền lợi của khách hàng. Dưới đây là
                      thông tin chi tiết về chính sách bàn giao:
                    </p>

                    <div>
                      <h4 className="mb-3 text-xl font-semibold text-gray-900">
                        1. Tiêu chuẩn bàn giao
                      </h4>
                      <p className="mb-4 text-gray-600">
                        Sản phẩm được bàn giao theo tiêu chuẩn cao cấp, đảm bảo
                        chất lượng và thẩm mỹ.
                      </p>
                      <ul className="mb-6 space-y-2">
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Hoàn thiện mặt ngoài theo thiết kế
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Hoàn thiện sàn, tường, trần
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Hoàn thiện hệ thống điện, nước
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Hoàn thiện cửa, cửa sổ
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Hoàn thiện thiết bị vệ sinh
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 text-xl font-semibold text-gray-900">
                        2. Quy trình bàn giao
                      </h4>
                      <p className="mb-4 text-gray-600">
                        Quy trình bàn giao minh bạch, chuyên nghiệp, đảm bảo
                        quyền lợi của khách hàng.
                      </p>
                      <ul className="mb-6 space-y-2">
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Bước 1: Thông báo bàn giao
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Bước 2: Kiểm tra sản phẩm
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Bước 3: Ký biên bản bàn giao
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Bước 4: Thanh toán đợt cuối
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Bước 5: Nhận sản phẩm
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 text-xl font-semibold text-gray-900">
                        3. Chính sách bảo hành
                      </h4>
                      <p className="mb-4 text-gray-600">
                        Chính sách bảo hành rõ ràng, đảm bảo quyền lợi của khách
                        hàng sau khi nhận bàn giao.
                      </p>
                      <ul className="mb-6 space-y-2">
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Bảo hành kết cấu: 10 năm
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Bảo hành hệ thống điện, nước: 2 năm
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Bảo hành thiết bị: Theo nhà sản xuất
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Hỗ trợ bảo trì: 24/7
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button className="bg-primary hover:brightness-110">
                      <Download className="mr-2 size-4" />
                      Tải chính sách bàn giao
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="mb-8 rounded-xl bg-[#485683] p-6">
                    <div className="mb-4 flex items-center">
                      <FileText className="mr-3 size-6 text-white" />
                      <h3 className="text-xl font-semibold text-white">
                        Thông tin chính sách
                      </h3>
                    </div>
                    <p className="text-white">
                      Chính sách bàn giao có thể thay đổi theo thời gian. Vui
                      lòng liên hệ với chúng tôi để nhận thông tin chi tiết và
                      cập nhật nhất.
                    </p>
                  </div>

                  <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                    <h3 className="mb-4 text-xl font-semibold text-gray-900">
                      Đăng ký tư vấn
                    </h3>
                    <p className="mb-6 text-gray-600">
                      Để lại thông tin để nhận tư vấn chi tiết về chính sách bàn
                      giao
                    </p>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="bao-mat">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <h3 className="mb-6 text-2xl font-semibold text-gray-900">
                    Chính sách bảo mật
                  </h3>
                  <div className="space-y-6">
                    <p className="text-gray-600">
                      Economy City cam kết bảo mật thông tin của khách hàng.
                      Dưới đây là thông tin chi tiết về chính sách bảo mật:
                    </p>

                    <div>
                      <h4 className="mb-3 text-xl font-semibold text-gray-900">
                        1. Thông tin thu thập
                      </h4>
                      <p className="mb-4 text-gray-600">
                        Chúng tôi thu thập các thông tin cá nhân của khách hàng
                        khi khách hàng đăng ký nhận thông tin, đặt lịch tham
                        quan, đăng ký mua sản phẩm.
                      </p>
                      <ul className="mb-6 space-y-2">
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">Họ và tên</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">Số điện thoại</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">Email</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">Địa chỉ</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Thông tin sản phẩm quan tâm
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 text-xl font-semibold text-gray-900">
                        2. Mục đích sử dụng thông tin
                      </h4>
                      <p className="mb-4 text-gray-600">
                        Chúng tôi sử dụng thông tin của khách hàng cho các mục
                        đích sau:
                      </p>
                      <ul className="mb-6 space-y-2">
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Liên hệ với khách hàng
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Cung cấp thông tin về dự án
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">Xử lý giao dịch</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Cải thiện dịch vụ
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Gửi thông tin khuyến mãi
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 text-xl font-semibold text-gray-900">
                        3. Cam kết bảo mật
                      </h4>
                      <p className="mb-4 text-gray-600">
                        Chúng tôi cam kết bảo mật thông tin của khách hàng:
                      </p>
                      <ul className="mb-6 space-y-2">
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Không chia sẻ thông tin với bên thứ ba
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Áp dụng các biện pháp bảo mật
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Giới hạn quyền truy cập thông tin
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-1 size-5 text-secondary" />
                          <span className="text-gray-600">
                            Tuân thủ quy định pháp luật
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button className="bg-primary hover:brightness-110">
                      <Download className="mr-2 size-4" />
                      Tải chính sách bảo mật
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="mb-8 rounded-xl bg-[#485683] p-6">
                    <div className="mb-4 flex items-center">
                      <FileText className="mr-3 size-6 text-white" />
                      <h3 className="text-xl font-semibold text-white">
                        Thông tin chính sách
                      </h3>
                    </div>
                    <p className="text-white">
                      Chính sách bảo mật có thể thay đổi theo thời gian. Vui
                      lòng liên hệ với chúng tôi để nhận thông tin chi tiết và
                      cập nhật nhất.
                    </p>
                  </div>

                  <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                    <h3 className="mb-4 text-xl font-semibold text-gray-900">
                      Đăng ký tư vấn
                    </h3>
                    <p className="mb-6 text-gray-600">
                      Để lại thông tin để nhận tư vấn chi tiết về chính sách bảo
                      mật
                    </p>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
}

export default Page
