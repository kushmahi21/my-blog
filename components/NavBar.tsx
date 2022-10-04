import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

const NavBar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <Link href={'/'}>
             <div className="flex items-center cursor-pointer">
                <Image className='rounded-full' src="/logo.png" height={50} width={50}/>
                <span className='font-bold ml-2 text-primary text-lg'>7WorldCoder</span>
             </div>
        </Link>
        <ul className='flex items-center'>
            <li className='mr-6 font-medium text-gray-600'>
                <a href='#'>Home</a>
            </li>
            <li className='mr-6 font-medium text-gray-600'>
                <a href='#'>AskQuestion</a>
            </li>
            <li className='mr-6 font-medium text-gray-600'>
                <a href='#'>RecentBlog</a>
            </li>
            <li className='mr-6 font-medium text-gray-600'>
                <a href='#'>AboutUs</a>
            </li>
        </ul>
        <ul className='flex items-center'>
          <li className='mr-6 font-medium text-gray-600'>
            <a href='#' className='hover:text-green-400'>Login</a>
          </li>
          <li className='font-medium text-gray-600'>
            <a href='#' className='bg-primary py-2 px-4 rounded-sm text-white hover:bg-primary-dark transition-all'>SingUp</a>
          </li>
        </ul>
    </nav>
  )
}

export default NavBar