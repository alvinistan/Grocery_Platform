import React from 'react'
import { assets } from '../assets/assets'

const MainBanner = () => {
  return (
    <div className='relative'>
        <img className='w-full hidden md:block' src={assets.main_banner_bg} alt="Main banner" />
        <img className='w-full md:hidden' src={assets.main_banner_bg_sm} alt="Small Banner" />
    </div>
  )
}

export default MainBanner