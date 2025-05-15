import React from 'react'
import CtaSection from '@/components/sections/cta-section'
import LocationSection from '@/components/sections/location-section'
import BannerSection from '@/components/sections/banner-section'
import OverviewSection from '@/components/sections/overview-section'

const Page = () => {
  return (
    <>
      <BannerSection />
      <OverviewSection />
      <LocationSection />
      <CtaSection />
    </>
  )
}

export default Page
