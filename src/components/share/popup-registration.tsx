'use client'

import React, { useState, useEffect } from 'react'
import { User, Mail, Phone, CheckCircle, X, MessageSquare } from 'lucide-react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'
import { useForm } from 'react-hook-form'
import { CtaPayload, ctaSchema } from '@/validations/cta'
import axios from 'axios'
import { zodResolver } from '@hookform/resolvers/zod'

const PopupRegistration = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(1)

  const form = useForm<CtaPayload>({
    resolver: zodResolver(ctaSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenPopup')
    if (!hasSeenPopup) {
      setTimeout(() => setIsOpen(true), 2000)
    }
  }, [])

  const onSubmit = async (data: CtaPayload) => {
    setStep(2)

    try {
      const res = await axios.post('/api/submit', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (res?.status === 200) {
        setStep(3)
        toast({
          title: 'Đăng ký thành công!',
          description:
            'Cảm ơn bạn đã đăng ký. Chúng tôi sẽ liên hệ sớm nhất có thể.',
          variant: 'default',
          duration: 3000,
        })

        localStorage.setItem('hasSeenPopup', 'true')
      }
    } catch (error) {
      console.error('Error:', error)
      setStep(1)
      toast({
        title: 'Đã có lỗi xảy ra',
        description:
          'Vui lòng thử lại sau hoặc liên hệ trực tiếp với chúng tôi.',
        variant: 'destructive',
        duration: 3000,
      })
    }
  }

  const features = [
    'Tư vấn miễn phí với chuyên gia',
    'Nhận báo giá chi tiết',
    'Ưu đãi đặc biệt cho đăng ký sớm',
    'Giải pháp tối ưu chi phí',
  ]

  const closeModal = () => {
    setIsOpen(false)
    setTimeout(() => {
      setStep(1)
    }, 300)
  }

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="max-w-4xl overflow-hidden rounded-2xl border-0 p-0 shadow-2xl md:max-w-3xl lg:max-w-4xl">
        <div className="relative flex flex-col bg-white lg:flex-row">
          <button
            onClick={closeModal}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-1.5 text-gray-500 backdrop-blur-sm transition hover:bg-white/20 hover:text-gray-800"
          >
            <X className="size-4" />
          </button>

          <div className="hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 lg:block lg:w-2/5">
            <div className="relative size-full overflow-hidden">
              <div className="absolute -left-12 top-1/3 size-40 rounded-full bg-white/10 blur-md"></div>
              <div className="absolute -right-16 top-1/4 size-60 rounded-full bg-white/5"></div>
              <div className="absolute bottom-1/4 right-1/3 size-20 rounded-full bg-white/10"></div>
              <div className="absolute -bottom-10 left-1/4 size-40 rotate-45 rounded-xl bg-white/5"></div>

              <div className="relative flex h-full flex-col justify-between p-8">
                <div className="mb-8">
                  <div className="mb-2 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white backdrop-blur-sm">
                    Dịch vụ chuyên nghiệp
                  </div>
                  <h2 className="mb-4 text-3xl font-bold text-white">
                    Giải pháp tối ưu cho doanh nghiệp
                  </h2>
                  <p className="text-white/90">
                    Cùng chúng tôi kiến tạo sự phát triển bền vững cho doanh
                    nghiệp của bạn
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="flex size-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                          <CheckCircle className="size-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-white">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full p-6 lg:w-3/5">
            {step === 1 && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-gray-800">
                    Đăng ký tư vấn ngay hôm nay
                  </DialogTitle>
                  <DialogDescription className="text-gray-600">
                    Để lại thông tin để nhận tư vấn chi tiết và ưu đãi đặc biệt
                  </DialogDescription>
                </DialogHeader>

                <div className="my-4 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 p-4 lg:hidden">
                  <h4 className="mb-2 font-medium text-gray-700">
                    Quyền lợi của bạn:
                  </h4>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-2 mt-0.5 size-4 shrink-0 text-primary" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

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
                          <FormLabel className="font-medium text-gray-700">
                            Họ và tên
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <div className="pointer-events-none absolute left-3 top-2.5 flex size-5 items-center justify-center text-primary">
                                <User className="size-4" />
                              </div>
                              <Input
                                className="rounded-lg border-gray-200 pl-10 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary"
                                placeholder="Nhập họ và tên của bạn"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />

                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-medium text-gray-700">
                              Email
                            </FormLabel>
                            <FormControl>
                              <div className="relative">
                                <div className="pointer-events-none absolute left-3 top-2.5 flex size-5 items-center justify-center text-primary">
                                  <Mail className="size-4" />
                                </div>
                                <Input
                                  className="rounded-lg border-gray-200 pl-10 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary"
                                  type="email"
                                  placeholder="example@email.com"
                                  {...field}
                                />
                              </div>
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-medium text-gray-700">
                              Số điện thoại
                            </FormLabel>
                            <FormControl>
                              <div className="relative">
                                <div className="pointer-events-none absolute left-3 top-2.5 flex size-5 items-center justify-center text-primary">
                                  <Phone className="size-4" />
                                </div>
                                <Input
                                  className="rounded-lg border-gray-200 pl-10 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary"
                                  placeholder="0912 345 678"
                                  {...field}
                                />
                              </div>
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium text-gray-700">
                            Nội dung yêu cầu
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <div className="pointer-events-none absolute left-3 top-3 flex size-5 items-center justify-center text-primary">
                                <MessageSquare className="size-4" />
                              </div>
                              <Textarea
                                className="min-h-24 resize-none rounded-lg border-gray-200 pl-10 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary"
                                placeholder="Mô tả nhu cầu của bạn để chúng tôi hỗ trợ tốt hơn..."
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full rounded-lg bg-primary py-4 text-base font-medium text-white transition-all hover:bg-primary/90"
                    >
                      Đăng ký tư vấn miễn phí
                    </Button>
                    <p className="text-center text-xs text-gray-500">
                      Bằng cách đăng ký, bạn đồng ý với{' '}
                      <span className="cursor-pointer text-primary underline">
                        Điều khoản dịch vụ
                      </span>
                      {''} của chúng tôi
                    </p>
                  </form>
                </Form>
              </>
            )}

            {step === 2 && (
              <div className="flex h-80 flex-col items-center justify-center space-y-4 p-6 sm:h-96">
                <div className="relative size-16">
                  <div className="absolute size-full animate-ping rounded-full bg-primary/20"></div>
                  <div className="relative flex size-full items-center justify-center rounded-full bg-primary/30">
                    <div className="size-10 rounded-full bg-primary"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Đang xử lý...
                </h3>
                <p className="text-center text-gray-600">
                  Vui lòng đợi trong giây lát, chúng tôi đang xử lý thông tin
                  của bạn.
                </p>
              </div>
            )}

            {step === 3 && (
              <div className="flex flex-col items-center justify-center space-y-5 p-6">
                <div className="flex size-20 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="size-10 text-green-600" />
                </div>
                <h3 className="text-center text-2xl font-bold text-gray-800">
                  Đăng ký thành công!
                </h3>
                <div className="space-y-2 text-center">
                  <p className="text-gray-600">
                    Cảm ơn bạn đã đăng ký tư vấn dịch vụ của chúng tôi.
                  </p>
                  <p className="text-gray-600">
                    Đội ngũ chuyên viên sẽ liên hệ với bạn trong vòng 24 giờ
                    tới.
                  </p>
                </div>
                <div className="mt-4 w-full rounded-lg bg-blue-50 p-4">
                  <p className="text-center text-sm text-blue-600">
                    &#34;Chúng tôi cam kết mang đến giải pháp tốt nhất cho doanh
                    nghiệp của bạn&#34;
                  </p>
                </div>
                <Button
                  onClick={closeModal}
                  className="mt-4 rounded-lg bg-gray-100 px-6 py-2 font-medium text-gray-700 transition hover:bg-gray-200"
                >
                  Đóng
                </Button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default PopupRegistration
