'use client'

import React, { useEffect, useState } from 'react'
import HeaderClient from '@/components/client/header-client'
import FooterClient from '@/components/client/footer-client'
import { ArrowUp, Mail, MessageCircle, Phone } from 'lucide-react'
import Link from 'next/link'

interface LayoutProps {
  children?: React.ReactNode
}

const CommonLayout = ({ children }: LayoutProps) => {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <HeaderClient />
      <main>{children}</main>
      <FooterClient />

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <Link
          href="tel:0901234567"
          className="flex size-12 items-center justify-center rounded-full bg-white/10 text-white shadow-lg transition-colors hover:brightness-110"
        >
          <Phone className="size-5" />
        </Link>
        <Link
          href="#"
          className="flex size-12 items-center justify-center rounded-full bg-white/10 text-white shadow-lg transition-colors hover:brightness-110"
        >
          <Mail className="size-5" />
        </Link>
        <Link
          href="#"
          className="flex size-12 items-center justify-center rounded-full bg-white/10 text-white shadow-lg transition-colors hover:brightness-110"
        >
          <MessageCircle className="size-5" />
        </Link>
      </div>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 flex size-12 items-center justify-center rounded-full bg-white/10 text-white shadow-lg transition-colors hover:brightness-110"
        >
          <ArrowUp className="size-5" />
        </button>
      )}
    </>
  )
}

export default CommonLayout
