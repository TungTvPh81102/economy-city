import type React from 'react'
import { contactMetadata } from '@/lib/metadata'

export const metadata = contactMetadata

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
