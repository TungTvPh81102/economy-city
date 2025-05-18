import React from 'react'
import CtaSection from '@/components/sections/cta-section'
import LocationSection from '@/components/sections/location-section'
import BannerSection from '@/components/sections/banner-section'
import OverviewSection from '@/components/sections/overview-section'
import VirtualTourSection from '@/components/sections/virtual-tour-section'
import GallerySection from '@/components/sections/gallery-section'
import PopupRegistration from '@/components/share/popup-registration'

const Page = () => {
  return (
    <>
      <PopupRegistration />
      <BannerSection />
      <OverviewSection />
      <LocationSection />
      <CtaSection />
      <VirtualTourSection />
      <GallerySection />
    </>
  )
}

export default Page
