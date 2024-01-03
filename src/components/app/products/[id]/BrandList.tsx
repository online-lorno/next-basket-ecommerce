'use client'

import {
  FaHooli,
  FaStripe,
  FaAws,
  FaRedditAlien,
  FaLyft,
  FaPiedPiperHat,
} from 'react-icons/fa6'

export function BrandListSection() {
  return (
    <section className="mx-auto max-w-screen-1.5xl px-12 py-[50px] lg:px-0">
      <div className="flex flex-col flex-wrap items-center justify-between gap-[30px] md:flex-row">
        <FaHooli className="h-[100px] w-[100px]" />
        <FaLyft className="h-[100px] w-[100px]" />
        <FaPiedPiperHat className="h-[100px] w-[100px]" />
        <FaStripe className="h-[100px] w-[100px]" />
        <FaAws className="h-[100px] w-[100px]" />
        <FaRedditAlien className="h-[100px] w-[100px]" />
      </div>
    </section>
  )
}
