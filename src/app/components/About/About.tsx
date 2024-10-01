import React from 'react'
import ArrIcon from '@public/about/arr.svg';

const About = () => {
  return (
    <div className=' bg-layout pt-[50px] md:pt-[80px] lg:pt-[120px]'>
      <div className='max-w-custom-1800 mx-auto p-[5px] sm:p-[10px] lg:p-5 min-h-screen st:h-[830px] lg:h-[1180px]'>
        <div className='flex flex-col st:flex-row items-center  h-full gap-[9px]'>
            <div className='bg-blue max-w-full st:max-w-[634px] w-full h-full rounded-md'>
                <div className='py-[15px] sm:py-[32px] lg:py-[50.5px] pl-[10px] sm:pl-[32px] lg:pl-10 :pr-[10px] sm:pr-10  h-full flex flex-col justify-normal lg:justify-between'>
                    <div className=''>
                        <div className='text-white text-2xl sm:text-5xl lg:text-[82px] font-semibold font-manrope leading-snug sm:leading-[73.80px] tracking-tighter'>About us</div>
                        <div className='mt-6 sm:mt-12 rounded-md bg-about-pattern bg-cover bg-center w-[195px] h-[181px] sm:w-[348px] sm:h-[322px] lg:w-[444px] lg:h-[411px]'></div>
                    </div>
                    <div className='mt-[81px] sm:mt-[100px] lg:mt-0'>
                        <div className='text-white text-2xl sm:text-4xl lg:text-5xl font-medium font-interTight leading-[25px] sm:leading-[48px] tracking-tighter'>Global <br />
                        Availability</div>
                        <div className='mt-3 sm:mt-6 text-white/70 max-w-[294px] lg:max-w-[441px] w-full text-xs sm:text-base lg:text-2xl font-normal font-interTight leading-[14.40px] sm:leading-[28.80px]'>Buying tickets from anywhere in the world:
                        Possibility of purchasing air tickets from any country without restrictions</div>
                    </div>
                </div>
            </div>
            <div className='rounded-md bg-clouds-pattern bg-cover bg-center w-full h-full'>
                <div className='p-[10px] sm:p-8 lg:p-10 flex flex-col h-full justify:normal lg:justify-between gap-8 lg:gap-0'>
                    <div className='flex items-start justify-between gap-8 lg:gap-3 flex-wrap'>
                        <div className='max-w-[488px] w-full'>
                            <div className='w-[56px] h-[56px] lg:w-[100px] lg:h-[100px] bg-white/10 rounded-full flex items-center justify-center'><ArrIcon className='transparent'/></div>
                            <div className='mt-6 text-white text-2xl sm:text-[32px] lg:text-5xl font-medium font-interTight leading-[25px] sm:leading-[35px] lg:leading-[48px] tracking-tighter'>Secure <br /> transactions</div>
                            <div className='mt-3 lg:mt-6 opacity-70 text-white text-xs sm:text-base lg:text-2xl font-normal font-interTight leading-[14.40px] sm:leading-[28.80px] text-left'>Blockchain technology: The use of blockchain ensures a high level of security and transparency of all transactions</div>
                        </div>
                        <div className='max-w-[373px] w-full'>
                            <div className='w-[56px] h-[56px] lg:w-[100px] lg:h-[100px] bg-white/10 rounded-full flex items-center justify-center'><ArrIcon className='transparent'/></div>
                            <div className='mt-6 text-white text-2xl sm:text-[32px] lg:text-5xl font-medium font-interTight leading-[25px] sm:leading-[35px] lg:leading-[48px] tracking-tighter'>Speed ​​<br /> and efficiency</div>
                            <div className='mt-3 lg:mt-6 opacity-70 text-white text-xs sm:text-base lg:text-2xl font-normal font-interTight leading-[14.40px] sm:leading-[28.80px] text-left'>Instant Payments: Fast and efficient payments using cryptocurrencies</div>
                        </div>
                    </div>
                    <div className='flex justify-between items-end'>
                        <div className='max-w-[320px] w-full'>
                            <div className='w-[56px] h-[56px] lg:w-[100px] lg:h-[100px] bg-white/10 rounded-full flex items-center justify-center'><ArrIcon className='transparent'/></div>
                            <div className='mt-6 text-white text-2xl sm:text-[32px] lg:text-5xl font-medium font-interTight leading-[25px] sm:leading-[35px] lg:leading-[48px]] tracking-tighter'>Special <br /> offers</div>
                            <div className='mt-3 lg:mt-6 opacity-70 text-white text-xs sm:text-base lg:text-2xl font-normal font-interTight leading-[14.40px] sm:leading-[28.80px] text-left'>Exclusive discounts and promotions for users paying for tickets with cryptocurrency</div>
                        </div>
                        <div className='mt-12 rounded-md hidden lg:block bg-special-pattern bg-cover bg-center w-[293px] h-[271px]'></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
