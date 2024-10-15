'use client'

import React from 'react'
import Image from 'next/image'
import largeLogo from '@/assets/agLogoHero.png'

const HomePage = () => {
  return (
    <div>
      <section className='relative bg-hero-pattern bg-cover bg-center h-screen flex items-start justify-center text-navbar-footer-text'>
        <div className='absolute inset-0 bg-black opacity-25'></div>
        <div className='relative z-10 flex flex-col items-center text-center pt-[calc(33vh-15px)]'>
          <Image
            src={largeLogo}
            alt='AG Genius Logo'
            width={300}
            height={300}
            className='mb-4'
          />
          <div>
            <h1 className='text-4xl font-bold'>Welcome to AG Genius</h1>
            <p className='text-lg mt-2'>
              Your partner in agricultural innovation
            </p>
          </div>
        </div>
      </section>
      <div className='min-h-screen flex flex-col items-center justify-top p-8 pt-20'>
        <h1 className='text-4xl font-bold mb-8'>Home Page</h1>
        {/* Add your home page content here */}
      </div>
    </div>
  )
}

export default HomePage
