'use client'

import React from 'react'
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

const ContactForm = () => {
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  const onSubmit = (data: any) => {
    console.log(data)
    // Handle form submission
    alert('Cảm ơn bạn đã gửi thông tin, chúng tôi sẽ liên hệ sớm nhất!')
    form.reset()
  }

  return (
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
              <FormLabel className="text-gray-700">Nội dung yêu cầu</FormLabel>
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
  )
}

export default ContactForm
