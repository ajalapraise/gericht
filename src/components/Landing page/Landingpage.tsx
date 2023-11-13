import React from 'react'
import Image from 'next/image'
import Button from '../Button/Button'
import { cormorantUpright } from '@/styles/font'



//images and svgs
import heroImg from '../../../public/Images/Hero-img.png'
import spoon from '../../../public/svgs/spoon.svg'
import g from '../../../public/svgs/G.svg'
import knife from '../../../public/svgs/knife.svg'

export const Herosection = () => {
    return (
        <div className='flex mt-40 justify-center items-center px-20'>
            <div className='w-[90%] flex justify-between items-center'>
                <div className='w-1/2 space-y-3'>
                    <div className='space-y-2'>
                        <h1 className={`${cormorantUpright.className} font-bold text-sm `}> Chase the new Flavour </h1>
                        <div className='ml-0 w-[30px] relative h-[10px]'>
                            <Image src={spoon} fill alt='' />
                        </div>
                        <h1 className={`${cormorantUpright.className} font-bold text-[#DCCA87] text-2xl tracking-widest leading-tight w-[250px] `}>The Key To Fine Dining</h1>
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
        <div className={` h-[600px] bgImage w-full relative p-20 flex items-center justify-center`}>
            <div className='absolute w-[300px] h-[300px]'>
                <Image src={g} alt='' fill />
            </div>
            <div className={`flex justify-between items-center w-[1000px] z-[99998] `}>
                <div className='flex flex-col items-end w-[400px]  space-y-6'>
                    <div className='flex flex-col items-end'>
                        <h1 className={`${cormorantUpright.className} text-[#DCCA87] text-2xl`}>About Us</h1>
                        <div className='ml-0 w-[50px] relative rotate-180 h-[10px]'>
                            <Image src={spoon} fill alt='' />
                        </div>
                    </div>
                    <p className={`text-[#AAA] text-right text-[12px] w-[350px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                    <Button btnValue='Know More' className='w-[100px] h-[35px] text-[10px] font-semibold tracking-widest' />

                </div>
                <div className={`w-[50px] h-[500px] relative`}>
                    <Image src={knife} alt='' fill />
                </div>
                <div className='flex flex-col items-start w-[400px] space-y-6'>
                    <div className='flex flex-col items-start '>
                        <h1 className={`${cormorantUpright.className} text-[#DCCA87] text-2xl`}>Our History</h1>
                        <div className='ml-0 w-[50px] relative  h-[10px]'>
                            <Image src={spoon} fill alt='' />
                        </div>
                    </div>
                    <p className={`text-[#AAA] text-left text-[12px] w-[350px]`}>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet..</p>
                    <Button btnValue='Know More' className='w-[100px] h-[35px] text-[10px] font-semibold tracking-widest' />

                </div>
            </div>

        </div>
    )
}

export const Menu = () => {
    return (
        <div className={`bg-[#0C0B08] p-20 flex justify-center items-center`}>
            <div className={`${cormorantUpright.className} flex flex-col justify-center items-center`}>
                <h1>Menu that fits you palatte</h1>
                <div className='ml-0 w-[30px] relative  h-[10px]'>
                    <Image src={spoon} fill alt='' />
                </div>
                <h1>Today’s Special</h1>
            </div>
            <div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>

        </div>
    )
}