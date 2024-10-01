import React from 'react'
import ArrIcon from '@public/footer/arr.svg'
import LinkedIcon from '@public/footer/in.svg'
import InsIcon from '@public/footer/ins.svg'
import FaceIcon from '@public/footer/face.svg'
import TwitIcon from '@public/footer/twitter.svg'
import SettingsIcon from '@public/footer/settings.svg'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='px-2 sm:px-2.5 md:px-5 lg:px-10 bg-layout pt-[50px] md:pt-[80px] lg:pt-[120px]'>
      <div className='bg-blue rounded-t-md'>
            <div className='max-w-custom-1800 px-2.5 sm:px-2.5 md:px-5 lg:px-10 py-2 sm:py-2.5 md:py-6 mx-auto'>
                <div>
                    <div className='flex items-center justify-between'>
                        <Link href='/' className='text-white'><img className='w-[120px] sm:w-[160px] md:w-[200px]' src="/logo.png" alt="" /></Link>
                        <Link href='#' className='w-[48px] h-[48px] sm:w-[72px] sm:h-[72px] lg:w-[100px] lg:h-[100px] rounded-full bg-white flex justify-center items-center'><ArrIcon className='w-[12px]  h-[9px] sm:w-[17px] sm:h-[12px] lg:w-[27px] lg:h-[22px]'/></Link>
                    </div>
                    <div className='mt-[77px] ms:mt-[81px] st:mt-[120px] flex items-start lg:items-center justify-between w-full lg:w-[93%] flex-col st:flex-row'>
                        <div className='flex flex-col'>
                            <div className='text-white text-2xl sm:text-5xl lg:text-7xl font-medium font-manrope tracking-tighter leading-[25px] sm:leading-[43.20px] lg:leading-[64.80px]'>Search <br />
                                & Book Flights
                            </div>
                            <div className='mt-2 sm:mt-[28px] text-white/70 text-xs sm:text-base lg:text-2xl font-normal font-manrope leading-[14.40px]  sm:leading-tight lg:leading-[28.80px]'>Book flights to anywhere in the world,
                            with over 600 airlines</div>
                            <Link href='#' className='mt-2 sm:mt-[28px] text-white text-xs sm:text-lg font-normal font-manrope underline leading-snug'>About us</Link>
                        </div>
                        <div className='mt-12 st:mt-0  flex flex-col justify-start max-w-[432px] w-full'>
                            <a href='mailto:info@diwander.com' className='text-white text-xl sm:text[32px] lg:text-5xl font-medium font-manrope leading-[18px] sm:leading-7 lg:leading-[43.20px]'>info@diwander.com</a>
                            <div className='flex gap-1 mt-6 lg:mt-[110px]'>
                                <a href='#' className='w-[56px] h-[56px] lg:w-[100px] lg:h-[100px] bg-white/10 rounded-[105px] flex justify-center items-center'><InsIcon className='w-[18px] h-[18px] sm:w-[24px] sm:h-[24px] lg:w-[32px] lg:h-[32px]'/></a>
                                <a href='#' className='w-[56px] h-[56px] lg:w-[100px] lg:h-[100px]  bg-white/10 rounded-[105px] flex justify-center items-center'><FaceIcon className='h-[18px] w-[9px] sm:h-[24px] sm:lg:w-[12px] lg:w-[16px] lg:h-[32px]'/></a>
                                <a href='#' className='w-[56px] h-[56px] lg:w-[100px] lg:h-[100px]  bg-white/10 rounded-[105px] flex justify-center items-center'><TwitIcon width={39} height={32} className='w-[21.78px] h-[18px] sm:w-[29px] sm:h-[24px] lg:w-[39px] lg:h-[32px]'/></a>
                                <a href='#' className='w-[56px] h-[56px] lg:w-[100px] lg:h-[100px]  bg-white/10 rounded-[105px] flex justify-center items-center'><LinkedIcon width={34} height={32} className='w-[18px] h-[18px] sm:w-[25px] sm:h-[24px] lg:w-[34px] lg:h-[32px]'/></a>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[77px] ms:mt-[81px] st:mt-[120px] flex justify-between items-start st:items-center flex-col st:flex-row pb-5 smd:pb-0'>
                        <div className='flex gap-[11px] st:gap-[75px] st:items-center items-start st:items-center flex-col st:flex-row'>
                            <div className='flex gap-[41px] items-start'>
                                <Link href='#' className='text-white text-[10px] sm:text-sm font-normal font-manropeleading-none tracking-tighter'>Terms</Link>
                                <Link href='#' className='text-white text-[10px] sm:text-sm font-normal font-manropeleading-none tracking-tighter'>Privacy</Link>
                                <Link href='#' className='text-white text-[10px] sm:text-sm font-normal font-manropeleading-none tracking-tighter'>Cookies</Link>
                            </div>
                            <div className='text-white/40 text-[10px] sm:text-sm font-semibold font-manrope leading-3 tracking-tighter'>Digital Wander Limited Hong Kong №76884844</div>
                        </div>
                        <div className='mt-[31px] st:mt-[0px] flex justify-between max-w-full st:max-w-[432px] lg:max-w-[595px] w-full items-end st:items-center lg:justify-normal gap-0 lg:gap-[237px]'>
                            <div className='text-white/50  text-sm sm:text-base lg:text-2xl font-medium font-manrope leading-snug tracking-tighter'>Дизайн сайта: anfalova.art</div>
                            <button className='w-[48px] h-[48px] sm:w-[72px] sm:h-[72px] bg-white/10 rounded-[36px] flex-shrink-0  flex justify-center items-center'><SettingsIcon className='w-[24px] h-[24px]'/></button>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </footer>
  )
}

export default Footer
