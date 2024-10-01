import React from 'react'
import Accordion from '../Accordion/Accordion'

const FAQ = () => {
  return (
    <section className='pt-[50px] md:pt-[80px] lg:pt-[120px] bg-layout'>
        <div className="max-w-custom-1800 px-2 sm:px-2.5 md:px-5 lg:px-10 py-2 sm:py-2.5 md:py-6 mx-auto">
            <h2 className='text-blue text-2xl sm:text-[48px] lg:text-[82px] font-semibold font-manrope tracking-tighter leading-[25px] sm:leading-[43.20px] lg:leading-[73.80px]'>FAQ</h2>
            <Accordion />
            <div className='flex justify-center items-center'><button className='mt-[18px]  border border-blue sm:mt-8 bg-white w-[172px] h-[56px] sm:w-[214px] sm:h-[72px] lg:w-[236px] lg:h-[100px] rounded-full flex items-center justify-center text-blue text-xs sm:text-xl lg:text-2xl font-bold font-manrope tracking-tighter leading-7'>More Details</button></div>
        </div>
    </section>
  )
}

export default FAQ
