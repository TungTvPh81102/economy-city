import React from 'react'
import CommonLayout from '@/components/layouts/CommonLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ECONOMY CITY - Căn hộ cao cấp xanh giữa lòng thành phố',
  description:
    'ECONOMY CITY - Chung cư cao cấp hiện đại với không gian xanh, tiện ích đẳng cấp và vị trí trung tâm, lý tưởng cho cuộc sống bền vững.',
  keywords: [
    'căn hộ cao cấp',
    'dự án chung cư cao cấp',
    'căn hộ xanh',
    'dự án bất động sản',
    'chung cư cao cấp tại Hà Nội',
    'không gian sống xanh',
    'căn hộ thông minh',
    'đầu tư bất động sản',
    'ECONOMY CITY',
    'chung cư ECONOMY CITY',
    'bất động sản',
    'khu đô thị',
    'biệt thự',
    'nhà phố',
    'shophouse',
    'TP. Hà Nội',
  ],
  icons: {
    icon: '/logo.jpg',
  },
  openGraph: {
    title: 'ECONOMY CITY - Căn hộ cao cấp xanh giữa lòng thành phố',
    description:
      'Khám phá ECONOMY CITY - Dự án căn hộ cao cấp với thiết kế hiện đại, không gian sống xanh và tiện ích đẳng cấp.',
    images: [
      {
        url: '/images/logo.svg',
        width: 1200,
        height: 630,
        alt: 'ECONOMY CITY - Căn hộ cao cấp xanh giữa lòng thành phố',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dự án Economy City Hưng Yên - Hoàng Vương Group',
    description:
      'Vị trí dự án gần nhà văn hóa huyện Văn Lâm, Economy City là khu kinh tế sầm uất, được ví như Đất Vàng Lõi Đô Thị.',
    images: ['/images/logo.svg'],
  },
}

interface LayoutProps {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <CommonLayout>{children}</CommonLayout>
    </>
  )
}

export default Layout
