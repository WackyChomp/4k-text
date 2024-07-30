import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

// prop type can be found in ----- ./types/index.d.ts
// global.css custom class: header

const Header = ({ children }: HeaderProps) => {
  return (
    <div className='header'>
      <Link href='/' className='md:flex-1'>
        {/* Logo with text appears by default */}
        <Image
          src='../next.svg'
          alt='logo-name-text'
          width={120}
          height={40}
          className='hidden md:block m-1'
        />

        {/* Logo w/o text appears in small screen devicees */}
        <Image
          src='../vercel.svg'
          alt='logo'
          width={32}
          height={32}
          className='mr-2 md:hidden m-1'
        />
      </Link>
      
      {children}

    </div>
  )
}

export default Header