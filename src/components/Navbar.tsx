import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/agLogoNav.png'

const Navbar = () => {
  return (
    <div className='navbar fixed top-0 left-0 right-0 bg-white bg-opacity-55 backdrop-blur-md z-50 px-8'>
      <div className='navbar-start'>
        <Link href='/' className='btn btn-ghost normal-case text-xl'>
          <Image src={logo} alt='AG Genius Logo' width={300} height={200} />
        </Link>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link
              href='/maps'
              className='text-primary text-xl focus:text-primary active:text-primary'>
              Maps
            </Link>
          </li>
          <li>
            <Link
              href='/coop-data'
              className='text-primary text-xl focus:text-primary active:text-primary'>
              Coop Data
            </Link>
          </li>
        </ul>
      </div>

      <div className='navbar-end'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link
              href='/login'
              className='text-primary text-xl focus:text-primary active:text-primary'>
              Login
            </Link>
          </li>
          <li>
            <Link
              href='/signup'
              className='text-primary text-xl focus:text-primary active:text-primary'>
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
