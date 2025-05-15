import React from 'react'
import { Loader2 } from 'lucide-react'

const LoadingModal = ({ isOpen }: { isOpen: boolean }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="relative flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-[#1E2A5A] to-[#2E3B6A] p-8 shadow-xl">
        <div className="relative">
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-white/30 border-t-transparent" />

          <div className="relative flex size-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
            <Loader2 className="size-10 animate-spin text-[#F9E6B3]" />
          </div>
        </div>

        <h3 className="mt-4 text-xl font-medium text-white">Đang xử lý</h3>
        <p className="mt-2 text-center text-white/80">
          Vui lòng đợi trong giây lát...
        </p>
      </div>

      <div className="absolute left-1/4 top-1/4 size-16 animate-pulse rounded-full bg-white/5" />
      <div className="absolute bottom-1/3 right-1/3 size-24 animate-pulse rounded-full bg-white/5" />
    </div>
  )
}

export default LoadingModal
