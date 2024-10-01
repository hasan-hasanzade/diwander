import React from 'react'
import Link from 'next/link'
import CryptoSlider from '../CryptoSlider/CryptoSlider'

const CryptoBlock = () => {
  return (
    <div className='bg-layout'>
      <div className='bg-slider-pattern bg-cover bg-center'>
        <div className='max-w-custom-1800 px-10 py-6 mx-auto h-full md:h-[900px]'>
            <div className='flex flex-col items-center justify-center py-[158px]'>
                <h2 className='text-center text-blue text-2xl sm:text-[48px] lg:text-[82px] font-semibold font-manrope tracking-tighter leading-[25px] sm:leading-[43.80px] lg:leading-[73.80px]'>Discovering the World <br /> with crypto</h2>
                <div className='mt-6 text-center text-[#0d1723]/70 text-xs sm:text-base lg:text-2xl font-normal font-manrope  leading-[14.40px] sm:leading-[18.80px] lg:leading-[28.80px]'>Our platform supports a variety of payment options, <br />
                including major cryptocurrencies, ensuring security, speed, and convenience</div>
                <div className='mt-[18px] sm:mt-12'>
                  <CryptoSlider />
                </div>
                <Link href='#' className='mt-[18px] sm:mt-8 bg-white w-[172px] h-[56px] sm:w-[214px] sm:h-[72px] lg:w-[236px] lg:h-[100px] rounded-full flex items-center justify-center text-blue text-xs sm:text-xl lg:text-2xl font-bold font-manrope tracking-tighter leading-7'>More Details</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CryptoBlock
