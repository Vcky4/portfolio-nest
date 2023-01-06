import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='bg-black'>
            <div className='bg-[url("/vali.png")] h-screen h-[300px] md:h-[600px] bg-cover bg-center items-center flex w-full bg-blend-lighten ' >
                <div className='mx-auto flex flex-col justify-center items-center text-center bg-black/50 w-full h-full'>
                <div className='text-white text-[30px] ' >ghjkl</div>
                </div>
            </div>
        </div>
    )
}

export default Hero