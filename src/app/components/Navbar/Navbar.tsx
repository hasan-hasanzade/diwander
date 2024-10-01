import React from 'react'
import Link from 'next/link'
import BtcIcon from '@public/navbar/btc.svg'
import ArrIcon from '@public/navbar/arrow-right.svg'
import ParamIcon from '@public/navbar/params.svg'
import MenuIcon from '@public/navbar/menu.svg'

const Navbar = () => {
  return (
    <header className='w-full'>
      <div className='w-full min-h-[72] flex justify-between'>
        <div className='w-full flex justify-between items-center'>
        <Link href='/' className='text-white'><img className='w-[120px] sm:w-[160px] md:w-[200px]' src="/logo.png" alt="" /></Link>
            <div className='w-[139px] lg:w-[159px] h-[64px] lg:h-[72px] rounded-full border border-white/20 cursor-pointer hidden ms:flex justify-center items-center'>
                <div className='flex items-center gap-2.5'><BtcIcon width={24} height={24}/> <span className='tracking-tighter font-manrope font-semibold text-base text-white tracking-tighter'>BTC</span> <ArrIcon width={24} height={24}/></div>
            </div>
            <div className='py-5 w-[182px] lg:w-[202px]  h-[64px] lg:h-[72px] hidden md:flex justify-center items-center rounded-full border border-white/20 cursor-pointer'>
                <Link href='#' className='font-manrope font-semibold text-base text-white tracking-tighter'>Manage my booking</Link>
            </div>
        </div>
        <div className='flex ml-6 lg:ml-[44px] '>
            <button className='rounded-full w-[64px] h-[64px] lg:w-[72px] lg:h-[72px] bg-white/10 hidden md:flex flex items-center justify-center'><ParamIcon width={24} height={24}/></button>
            <button className='rounded-full w-[64px] h-[64px] lg:w-[72px] lg:h-[72px] bg-white flex items-center justify-center'><MenuIcon width={24} height={24}/></button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
