import React from 'react'
import Image from 'next/image'
import { cormorantUpright } from '@/styles/font'

//images and svgs
import heroImg from '../../../public/Images/Hero-img.png'
import spoon from '../../../public/svgs/spoon.svg'

export const Herosection = () => {
    return (
        <div className='flex mt-40 justify-center items-center px-20'>
            <div className='w-[90%] flex justify-between items-center'>
                <div className='w-1/2 space-y-3'>
                    <div className='space-y-2'>
                        <h1 className={`${cormorantUpright.className} text-sm font-black`}> Chase the new Flavour </h1>
                        <div className='ml-0 w-[30px] relative h-[10px]'>
                            <Image src={spoon} fill alt='' />
                        </div>
                        <h1 className={`${cormorantUpright.className} text-[#DCCA87] text-2xl tracking-widest leading-tight w-[250px] `}>The Key To Fine Dining</h1>
                        <p className={`text-[10px] font-semibold tracking-wide leading-loose w-[300px]`}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                    </div>
                    <div>
                        <button>Explore Menu</button>
                    </div>

                </div>
                <div className='w-1/2 flex items-center justify-center'>
                    <div className='w-[400px] relative h-[400px]'>
                        <Image src={heroImg} fill alt='' />


                    </div>
                </div>
            </div>
        </div>
    )
}