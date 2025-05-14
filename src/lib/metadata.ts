import type { Metadata } from 'next'

export function generateMetadata(
  title: string,
  description: string,
  keywords: string,
  ogImage = '/images/logo.svg'
): Metadata {
  return {
    title,
    description,
    keywords,
    authors: [{ name: 'Economy City' }],
    openGraph: {
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'vi_VN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://economycity.com.vn`,
    },
  }
}

// Metadata cho trang chủ
export const homeMetadata = generateMetadata(
  'Economy City - Dự án bất động sản cao cấp tại TP. Hồ Chí Minh',
  'Economy City là khu đô thị hiện đại với hệ thống tiện ích đẳng cấp, mang đến không gian sống lý tưởng cho cư dân tại TP. Hồ Chí Minh',
  'Economy City, bất động sản, khu đô thị, biệt thự, nhà phố, shophouse, TP. Hồ Chí Minh'
)

// Metadata cho trang vị trí
export const locationMetadata = generateMetadata(
  'Vị trí chiến lược - Economy City',
  'Khám phá vị trí đắc địa của dự án Economy City, kết nối thuận tiện đến các tiện ích ngoại khu và trung tâm thành phố',
  'vị trí Economy City, kết nối giao thông, tiện ích ngoại khu, bản đồ vị trí'
)

// Metadata cho trang tiện ích
export const amenitiesMetadata = generateMetadata(
  'Tiện ích đẳng cấp - Economy City',
  'Hệ thống tiện ích nội khu đa dạng tại Economy City, đáp ứng mọi nhu cầu của cư dân',
  'tiện ích Economy City, không gian xanh, tiện ích thể thao, an ninh 24/7'
)

// Metadata cho trang mặt bằng
export const floorplanMetadata = generateMetadata(
  'Mặt bằng & Sản phẩm - Economy City',
  'Đa dạng sản phẩm với thiết kế hiện đại tại Economy City, đáp ứng nhu cầu của mọi khách hàng',
  'mặt bằng Economy City, biệt thự, nhà phố, shophouse, thiết kế hiện đại'
)

// Metadata cho trang bảng giá
export const pricingMetadata = generateMetadata(
  'Bảng giá chính thức - Economy City',
  'Thông tin giá bán chính thức và chính sách bán hàng mới nhất của dự án Economy City',
  'bảng giá Economy City, chính sách thanh toán, hỗ trợ vay, ưu đãi'
)

// Metadata cho trang tin tức
export const newsMetadata = generateMetadata(
  'Tin tức & Sự kiện - Economy City',
  'Cập nhật những thông tin mới nhất về dự án Economy City và thị trường bất động sản',
  'tin tức Economy City, sự kiện, tiến độ xây dựng, chính sách bán hàng'
)

export const policyMetadata = generateMetadata(
  'Chính sách bán hàng - Economy City',
  'Thông tin chi tiết về các chính sách bán hàng của dự án Economy City',
  'chính sách Economy City, thanh toán, vay ngân hàng, bàn giao, bảo mật'
)

// Metadata cho trang liên hệ
export const contactMetadata = generateMetadata(
  'Liên hệ với chúng tôi - Economy City',
  'Thông tin liên hệ và đăng ký tư vấn dự án Economy City',
  'liên hệ Economy City, đăng ký tư vấn, hotline, email, địa chỉ'
)
