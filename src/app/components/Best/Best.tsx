import React from 'react'
import ArrIcon from '@public/popular/arr-right.svg'
import PlusIcon from '@public/popular/plus.svg'
import StarIcon from '@public/best/star.svg'
import Arr45Icon from '@public/popular/arr-45.svg'
import Link from 'next/link'

const Best = () => {
  return (
    <div className='pt-[50px] md:pt-[80px] lg:pt-[120px] bg-layout p-[10px] sm:p-[20px] md:p-[40px] lg:p-[60px]]'>
      <div className='max-w-custom-1800 mx-auto'>
        <div className="flex items-end justify-between gap-2">
            <div className='text-blue text-2xl sm:text-[48px] lg:text-[82px] font-semibold font-manrope tracking-tighter leading-none sm:leading-[43.20px] lg:leading-[73.80px]'>Best Hotels</div>
            <Link href='#' className="flex gap-3 items-center text-bluetext-xl font-medium font-interTight leading-tight tracking-[-0.05em]">More hotels <ArrIcon width={10} height={8}/></Link>
        </div>
        <div className="mt-12 flex items-center gap-2 sm:h-[533px]">
            <div className='relative h-[282px] sm:h-full w-full ms:w-1/2 lg:w-1/3'>
                <div className='h-full w-full rounded-[24px] bg-wood-pattern bg-cover bg-center group'>
                <div className='bg-blue/50 rounded-[24px] h-full p-2.5 sm:p-6 flex flex-col justify-between transition-all duration-300 ease-in-out opacity-100 group-hover:opacity-0'>
                    <div className='flex justify-between flex-wrap gap-2 items-start'>
                    <div className='flex gap-6 items-center'>
                        <div className='w-[24px] h-[24px] sm:w-[72px] sm:h-[72px] flex-shrink-0 border-white/20 border-2 rounded-full flex items-center justify-center'>
                        <Arr45Icon className='transparent w-[8px] sm:h-[7px] sm:w-[24px] sm:h-[22px]'/>
                        </div>
                        <div className='text-white text-2xl font-medium leading-normal font-interTight'>
                        Berlin, Germany
                        </div>
                    </div>
                    <div className='bg-white/20 rounded-full flex gap-1 text-[10px] sm:text-base text-white font-manrope tracking-tighter font-bold w-[94px] h-[31px] sm:w-[168px] sm:h-[72px] items-center justify-center'>
                        <span>$200</span> / per night
                    </div>
                    </div>
                    <div className='flex justify-between items-center flex-wrap gap-2'>
                    <div>
                        <div className='text-white text-lg sm:text-[40px] lg:text-5xl font-medium font-interTight leading-[20px] sm:leading-[40px] tracking-tighter'>
                        Woodside Hotel
                        </div>
                        <div className='mt-3 sm:mt-6 text-white/70 text-xs sm:text-base md:text-xl font-normal leading-normal font-interTight'>
                        Book flights to anywhere <br /> in the world, with over 600 airlines
                        </div>
                    </div>
                    <div className='w-[56px] h-[56px] sm:w-[72px] sm:h-[72px] lg:w-[100px] lg:h-[100px] bg-blue rounded-full flex items-center justify-center'>
                        <div className='flex items-center gap-2.5'>
                        <StarIcon />
                        <span className='font-manrope font-bold text-white text-xs sm:text-base lg:text-xl tracking-tighter leading-[23px]'>
                            7.7
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='absolute top-0 left-0 w-full h-full bg-blue/70 rounded-[24px] p-2.5 sm:p-6 flex flex-col justify-between transition-all duration-300 ease-in-out opacity-0 invisible group-hover:opacity-100 group-hover:visible'>
                    <div className='flex justify-between flex-wrap gap-2 items-start'>
                    <div>
                        <div className='text-white text-lg sm:text-[40px] lg:text-5xl font-medium font-interTight leading-[20px] sm:leading-[40px] tracking-tighter'>
                        Woodside Hotel
                        </div>
                        <div className='mt-3 sm:mt-6 text-white/70 text-xs sm:text-base md:text-xl font-normal leading-normal font-interTight'>
                        Book flights to anywhere <br /> in the world, with over 600 airlines
                        </div>
                    </div>
                    </div>
                    <div className='flex items-center'>
                    <button className='w-full h-[48px] sm:h-[72px] lg:h-[100px] bg-white rounded-full text-xs sm:text-base lg:text-2xl font-bold font-manrope leading-7 transition-all duration-300 ease-in-out'>
                        Book now
                    </button>
                    <div className='flex-shrink-0 w-[48px] sm:w-[72px] lg:w-[100px] h-[48px] sm:h-[72px] lg:h-[100px] bg-blue rounded-full flex items-center justify-center'>
                        <div className='flex items-center gap-2.5'>
                            <StarIcon />
                            <span className='font-manrope font-bold text-white text-xs sm:text-base lg:text-xl tracking-tighter leading-[23px]'>
                                7.7
                            </span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className='relative hidden ms:flex flex-col h-full justify-between smd:w-1/2 lg:w-1/3 bg-golden-pattern bg-cover bg-center group rounded-[24px]'>
                <div className='bg-blue/50 rounded-[24px] h-full p-6 flex flex-col justify-between transition-all duration-300 ease-in-out opacity-100 group-hover:opacity-0'>
                <div className='flex justify-between items-start flex-wrap gap-2'>
                    <div className='flex gap-6 items-center'>
                    <div className='w-[72px] h-[72px] flex-shrink-0 border-white/20 border-2 rounded-full flex items-center justify-center'>
                        <Arr45Icon className='transparent' width={24} height={22}/>
                    </div>
                    <div className='text-white text-2xl font-medium leading-normal font-interTight'>
                        Paris, France
                    </div>
                    </div>
                    <div className='bg-white/20 rounded-full flex gap-1 text-base text-white font-manrope tracking-tighter font-bold w-[168px] h-[72px] items-center justify-center'>
                    <span>$200</span> / per night
                    </div>
                </div>
                <div className='flex justify-between items-center flex-wrap gap-2'>
                    <div>
                    <div className='text-white text-lg sm:text-[40px] lg:text-5xl font-medium font-interTight leading-[48px] tracking-tighter'>
                        Golden Panorama
                    </div>
                    <div className='mt-6 text-white/70 text-xl font-normal leading-normal font-interTight'>
                        Book flights to anywhere <br /> in the world, with over 600 airlines
                    </div>
                    </div>
                    <div className='w-[56px] h-[56px] sm:w-[72px] sm:h-[72px] lg:w-[100px] lg:h-[100px] bg-blue rounded-full flex flex-shrink-0 items-center justify-center'>
                    <div className='flex items-center gap-2.5 '>
                        <StarIcon/>
                        <span className='font-manrope font-bold text-white text-xs sm:text-base lg:text-xl tracking-tighter leading-[23px]'>
                        7.7
                        </span>
                    </div>
                    </div>
                </div>
                </div>
                <div className='absolute top-0 left-0 w-full h-full bg-blue/70 rounded-[24px] p-2.5 sm:p-6 flex flex-col justify-between transition-all duration-300 ease-in-out opacity-0 invisible group-hover:opacity-100 group-hover:visible'>
                <div className='flex justify-between flex-wrap gap-2 items-start'>
                    <div>
                    <div className='text-white text-lg sm:text-[40px] lg:text-5xl font-medium font-interTight leading-[20px] sm:leading-[40px] tracking-tighter'>
                        Golden Panorama
                    </div>
                    <div className='mt-3 sm:mt-6 text-white/70 text-xs sm:text-base md:text-xl font-normal leading-normal font-interTight'>
                        Book flights to anywhere <br /> in the world, with over 600 airlines
                    </div>
                    </div>
                </div>
                <div className='flex items-center'>
                    <button className='w-full h-[48px] sm:h-[72px] lg:h-[100px] bg-white rounded-full text-xs sm:text-base lg:text-2xl font-bold font-manrope leading-7 transition-all duration-300 ease-in-out'>
                    Book now
                    </button>
                    <div className='flex-shrink-0 w-[48px] sm:w-[72px] lg:w-[100px] h-[48px] sm:h-[72px] lg:h-[100px] bg-blue rounded-full flex items-center justify-center'>
                    <div className='flex items-center gap-2.5'>
                        <StarIcon/>
                        <span className='flex-shrink-0 font-manrope font-bold text-white text-xs sm:text-base lg:text-xl tracking-tighter leading-[23px]'>
                        7.7
                        </span>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className='relative hidden lg:flex flex-col h-full justify-between w-1/3 bg-luxury-pattern bg-cover bg-center group rounded-[24px]'>
                <div className='bg-blue/50 rounded-[24px] h-full p-6 flex flex-col justify-between transition-all duration-300 ease-in-out opacity-100 group-hover:opacity-0'>
                <div className='flex justify-between items-start'>
                    <div className='flex gap-6 items-center'>
                    <div className='w-[72px] h-[72px] flex-shrink-0 border-white/20 border-2 rounded-full flex items-center justify-center'>
                        <Arr45Icon className='transparent' width={24} height={22}/>
                    </div>
                    <div className='text-white text-2xl font-medium leading-normal font-interTight'>
                        Tenerife, Spain
                    </div>
                    </div>
                    <div className='bg-white/20 rounded-full flex gap-1 text-base text-white font-manrope tracking-tighter font-bold w-[168px] h-[72px] items-center justify-center'>
                    <span>$200</span> / per night
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                    <div className='text-white text-lg sm:text-[40px] lg:text-5xl font-medium font-interTight leading-[48px] tracking-tighter'>
                        Luxury Star Hotel
                    </div>
                    <div className='mt-6 text-white/70 text-xl font-normal leading-normal font-interTight'>
                        Book flights to anywhere <br /> in the world, with over 600 airlines
                    </div>
                    </div>
                    <div className='w-[56px] h-[56px] sm:w-[72px] sm:h-[72px] lg:w-[100px] lg:h-[100px] bg-blue rounded-full flex items-center justify-center'>
                    <div className='flex items-center gap-2.5 flex-shrink-0'>
                        <StarIcon/>
                        <span className='font-manrope font-bold text-white text-xl tracking-tighter leading-[23px]'>
                        7.7
                        </span>
                    </div>
                    </div>
                </div>
                </div>
                <div className='absolute top-0 left-0 w-full h-full bg-blue/70 rounded-[24px] p-2.5 sm:p-6 flex flex-col justify-between transition-all duration-300 ease-in-out opacity-0 invisible group-hover:opacity-100 group-hover:visible'>
                <div className='flex justify-between flex-wrap gap-2 items-start'>
                    <div>
                    <div className='text-white text-lg sm:text-[40px] lg:text-5xl font-medium font-interTight leading-[20px] sm:leading-[40px] tracking-tighter'>
                        Luxury Star Hotel
                    </div>
                    <div className='mt-3 sm:mt-6 text-white/70 text-xs sm:text-base md:text-xl font-normal leading-normal font-interTight'>
                        Book flights to anywhere <br /> in the world, with over 600 airlines
                    </div>
                    </div>
                </div>
                <div className='flex items-center'>
                    <button className='w-full h-[48px] sm:h-[72px] lg:h-[100px] bg-white rounded-full text-xs sm:text-base lg:text-2xl font-bold font-manrope leading-7 transition-all duration-300 ease-in-out'>
                    Book now
                    </button>
                    <div className='flex-shrink-0 w-[48px] sm:w-[72px] lg:w-[100px] h-[48px] sm:h-[72px] lg:h-[100px] bg-blue rounded-full flex items-center justify-center'>
                    <div className='flex items-center gap-2.5 flex-shrink-0'>
                        <StarIcon/>
                        <span className='font-manrope font-bold text-white text-xs sm:text-base lg:text-xl tracking-tighter leading-[23px]'>
                        7.7
                        </span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

      </div>
    </div>
  )
}

export default Best
