'use client'

import React, { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { CtaPayload, ctaSchema } from '@/validations/cta'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import axios from 'axios'
import { toast } from '@/hooks/use-toast'
import LoadingModal from '@/components/share/loading-modal'

const CtaSection = () => {
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
    <section
      id="dang-ky"
      className="relative overflow-hidden bg-gradient-to-br from-[#1E2A5A] to-[#2E3B6A] text-white md:py-10"
    >
      <LoadingModal isOpen={loading} />
      <div className="absolute left-0 top-0 size-full overflow-hidden opacity-20">
        <div className="absolute left-10 top-10 size-40 rounded-full bg-white/10"></div>
        <div className="absolute bottom-10 right-10 size-60 rounded-full bg-white/10"></div>
        <div className="absolute right-1/4 top-1/3 size-20 rounded-full bg-white/10"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold md:text-4xl">
              Đăng ký nhận thông tin ưu đãi
            </h2>
            <p className="text-white/80">
              Đăng ký ngay hôm nay để nhận thông tin chi tiết về dự án và các
              chương trình ưu đãi đặc biệt từ ECONOMY CITY.
            </p>
            <ul className="space-y-3">
              {[
                'Nhận bảng giá và chính sách mới nhất',
                'Được tư vấn bởi chuyên viên giàu kinh nghiệm',
                'Cơ hội tham quan căn hộ mẫu',
                'Ưu tiên chọn căn đẹp',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#F9E6B3]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 text-white"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Họ và tên</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Họ và tên"
                          {...field}
                          className="border-white/30 bg-white/20 text-white placeholder:text-white/70"
                        />
                      </FormControl>
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
                          placeholder="Email"
                          {...field}
                          className="border-white/30 bg-white/20 text-white placeholder:text-white/70"
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
                        <Input
                          type="tel"
                          placeholder="Số điện thoại"
                          {...field}
                          className="border-white/30 bg-white/20 text-white placeholder:text-white/70"
                        />
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
                          placeholder="Nội dung yêu cầu"
                          className="min-h-[100px] border-white/30 bg-white/20 text-white placeholder:text-white/70"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-white text-primary hover:bg-white/90"
                  disabled={loading}
                >
                  {loading ? 'Đang gửi...' : 'Đăng ký ngay'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
