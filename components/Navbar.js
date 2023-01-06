import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-white fixed top-0 w-[100%] z-10'>
            <div className='container mx-auto flex justify-between items-center py-4'>
                <div className='text-[24px]'>Victor Ubong</div>

                <div className='flex space-x-4'>
                    <Link href='/'>
                        <div className='border border-transparent border-t- border-l-0 border-r-0
                         border-b-0 text-[18px] hover:border-[#ff4D41] transition duration-200'>Home</div>
                    </Link>
                    <Link href='/about'>
                        <div className='border border-transparent border-t- border-l-0 border-r-0
                         border-b-0 text-[18px] hover:border-[#ff4D41] transition duration-200'>About</div>
                    </Link>
                    <Link href='/portfolio'>
                        <div className='border border-transparent border-t- border-l-0 border-r-0
                         border-b-0 text-[18px] hover:border-[#ff4D41] transition duration-200'>Portfolio</div>
                    </Link>
                    <Link href='/blog'>
                        <div className='border border-transparent border-t- border-l-0 border-r-0
                         border-b-0 text-[18px] hover:border-[#ff4D41] transition duration-200'>Blog</div>
                    </Link>
                    <Link href='/contact'>
                        <div className='border border-transparent border-t- border-l-0 border-r-0
                         border-b-0 text-[18px] hover:border-[#ff4D41] transition duration-200'>Contact</div>
                    </Link>
                </div>

                <a href='#download'
                    className='flex border border-[#ff4D41] px-4 py-1 text-[18px] text-[#ff4D41] 
                    rounded-[5px] item-center gap-2 hover:bg-[#ff4D41] hover:text-white transition duration-200 '>Download CV</a>
            </div>
        </div>
    )
}
export default Navbar