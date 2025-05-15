'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { User, Phone, Mail, Send } from 'lucide-react'
import { CtaPayload, ctaSchema } from '@/validations/cta'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { toast } from '@/hooks/use-toast'
import LoadingModal from '@/components/share/loading-modal'

const ContactForm = () => {
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
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Họ và tên</FormLabel>
                <FormControl>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 size-5 text-primary" />
                    <Input
                      className="pl-10"
                      placeholder="Nhập họ và tên của bạn"
                      {...field}
                    />
                  </div>
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
                <FormLabel className="text-gray-700">Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 size-5 text-primary" />
                    <Input
                      className="pl-10"
                      type="email"
                      placeholder="example@email.com"
                      {...field}
                    />
                  </div>
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
                <FormLabel className="text-gray-700">Số điện thoại</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 size-5 text-primary" />
                    <Input
                      className="pl-10"
                      placeholder="0912 345 678"
                      {...field}
                    />
                  </div>
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
                <FormLabel className="text-gray-700">
                  Nội dung yêu cầu
                </FormLabel>
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

          <Button
            type="submit"
            className="w-full bg-primary transition-colors hover:brightness-110"
          >
            <Send className="mr-2 size-4" />
            Gửi yêu cầu
          </Button>
        </form>
      </Form>
    </>
  )
}

export default ContactForm
