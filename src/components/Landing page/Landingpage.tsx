import React from 'react'
import Image from 'next/image'
import Button from '../Button/Button'


//images and svgs
import heroImg from '../../../public/Images/Hero-img.png'
import spoon from '../../../public/svgs/spoon.svg'
import g from '../../../public/svgs/G.svg'

export const Herosection = () => {
    return (
        <div className='flex mt-40 justify-center items-center px-20'>
            <div className='w-[90%] flex justify-between items-center'>
                <div className='w-1/2 space-y-3'>
                    <div className='space-y-2'>
                        <h1 className={`font-Cormorant_Upright font-bold text-sm `}> Chase the new Flavour </h1>
                        <div className='ml-0 w-[30px] relative h-[10px]'>
                            <Image src={spoon} fill alt='' />
                        </div>
                        <h1 className={`font-Cormorant_Upright font-bold text-[#DCCA87] text-2xl tracking-widest leading-tight w-[250px] `}>The Key To Fine Dining</h1>
                        <p className={`text-[10px] font-semibold tracking-wide leading-loose w-[300px]`}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                    </div>
                    <div>
                        <Button btnValue='Explore Menu' className='w-[120px] h-[35px] text-[10px] font-semibold tracking-widest' />
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

export const About = () => {
    return (
        <div className={` h-[800px] bgImage w-full relative flex items-center justify-center`}>
            <div className='relative w-[400px] h-[400px]'>
                <Image src={g} alt='' fill />
            </div>

        </div>
    )
}