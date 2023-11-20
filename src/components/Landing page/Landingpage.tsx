import React, { useState } from 'react'
import Image from 'next/image'
import Button from '../Button/Button'
import { cormorantUpright } from '@/styles/font'
import Slider from '../Slider/Slider'




//icons, images and svgs
import heroImg from '../../../public/Images/Hero-img.png'
import spoon from '../../../public/svgs/spoon.svg'
import g from '../../../public/svgs/G.svg'
import knife from '../../../public/svgs/knife.svg'
import flask from '../../../public/Images/flask.png'
import chefImg from '../../../public/Images/chefImage.png'
import signature from '../../../public/svgs/signature.svg'
import laurelsLogo from '../../../public/svgs/laurelsLogo.svg'
import award1 from '../../../public/svgs/award1.svg'
import award2 from '../../../public/svgs/award2.svg'
import award3 from '../../../public/svgs/award3.svg'
import award4 from '../../../public/svgs/award4.svg'
import laurelsImg from '../../../public/Images/laurelsImg.png'


import { BiSolidQuoteAltLeft } from 'react-icons/bi'

export const Herosection = () => {
    return (
        <div className='flex mt-40 justify-center items-center px-20 pb-32'>
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
        <div className={`bg-[#0C0B08] p-20 flex flex-col justify-center items-center space-y-7`}>
            <div className={`${cormorantUpright.className} flex flex-col justify-center space-y-3 items-center`}>
                <h1 className='text-[#FFF] text-base'>Menu that fits you palatte</h1>
                <div className='ml-0 w-[30px] relative  h-[10px]'>
                    <Image src={spoon} fill alt='' />
                </div>
                <h1 className={`text-[#DCCA87] text-2xl`}>Today’s Special</h1>
            </div>
            <div className={`flex justify-center items-center`}>
                <ul className={`w-[300px] flex flex-col justify-center items-center space-y-5`}>
                    <h1 className={`${cormorantUpright.className} flex items-center justify-center text-xl font-extrabold text-[#FFF]`}>Wine & Beer</h1>
                    <li>
                        <div className={`${cormorantUpright.className} flex justify-between items-center w-[250px] `}>
                            <h2 className={`text-[#DCCA87] w-[120px] flex items-center justify-start`}>Chapel Hill Shiraz</h2>
                            <span className='w-[70px] h-[0.5px] mt-[2px] bg-[#FAFAFA] flex items-center justify-center'></span>
                            <h2 className='w-[30px] flex items-center justify-center text-[20px] text-[#FFF]'>$56</h2>
                        </div>
                        <h2 className={`text-[11px]`}>AU | Bottle</h2>
                    </li>
                    <li>
                        <div className={`${cormorantUpright.className} flex justify-between items-center w-[250px]`}>
                            <h2 className={`text-[#DCCA87] w-[120px] flex items-center justify-start`}>Catena Malbec</h2>
                            <span className='w-[70px] h-[0.5px] mt-[2px] bg-[#FAFAFA] flex items-center justify-center'></span>
                            <h2 className='w-[30px] flex items-center justify-center text-[20px] text-[#FFF]'>$59</h2>
                        </div>
                        <h2 className={`text-[11px]`}>AR | Bottle</h2>
                    </li>
                    <li>
                        <div className={`${cormorantUpright.className} flex justify-between items-center w-[250px]`}>
                            <h2 className={`text-[#DCCA87] w-[120px] flex items-center justify-start`}>La Vieille Rosé</h2>
                            <span className='w-[70px] h-[0.5px] mt-[2px] bg-[#FAFAFA] flex items-center justify-center'></span>
                            <h2 className='w-[30px] flex items-center justify-center text-[20px] text-[#FFF]'>$44</h2>
                        </div>
                        <h2 className={`text-[11px]`}>FR | 750 ml</h2>
                    </li>
                    <li>
                        <div className={`${cormorantUpright.className} flex justify-between items-center w-[250px]`}>
                            <h2 className={`text-[#DCCA87] w-[120px] flex items-center justify-start`}>Rhino Pale Ale</h2>
                            <span className='w-[70px] h-[0.5px] mt-[2px] bg-[#FAFAFA] flex items-center justify-center'></span>
                            <h2 className='w-[30px] flex items-center justify-center text-[20px] text-[#FFF]'>$31</h2>
                        </div>
                        <h2 className={`text-[11px]`}>CA | 750 ml</h2>
                    </li>
                    <li>
                        <div className={`${cormorantUpright.className} flex justify-between items-center w-[250px]`}>
                            <h2 className={`text-[#DCCA87] w-[120px] flex items-center justify-start`}>Irish Guinness</h2>
                            <span className='w-[70px] h-[0.5px] mt-[2px] bg-[#FAFAFA] flex items-center justify-center'></span>
                            <h2 className='w-[30px] flex items-center justify-center text-[20px] text-[#FFF]'>$26</h2>
                        </div>
                        <h2 className={`text-[11px]`}>IE | 750 ml</h2>
                    </li>
                </ul>
                <div className={`relative w-[250px] h-[400px]`}>
                    <Image src={flask} alt='' fill />
                </div>
                <ul className={`w-[300px] flex flex-col justify-center items-center space-y-5`}>
                    <h1 className={`${cormorantUpright.className} flex items-center justify-center text-xl font-extrabold text-[#FFF]`}>Cocktails</h1>
                    <li>
                        <div className={`${cormorantUpright.className} flex justify-between items-center w-[250px] `}>
                            <h2 className={`text-[#DCCA87] w-[100px] flex items-center justify-start`}>Aperol Spritz</h2>
                            <span className='w-[70px] h-[0.5px] mt-[2px] bg-[#FAFAFA] flex items-center justify-center'></span>
                            <h2 className='w-[30px] flex items-center justify-center text-[20px] text-[#FFF]'>$20</h2>
                        </div>
                        <h2 className={`text-[11px]`}>Aperol | Villa Marchesi prosecco | soda | 30ml</h2>
                    </li>
                    <li>
                        <div className={`${cormorantUpright.className} flex justify-between items-center w-[250px]`}>
                            <h2 className={`text-[#DCCA87] w-[100px] flex items-center justify-start`}>Dark &#39;N&#39; Stormy</h2>
                            <span className='w-[70px] h-[0.5px] mt-[2px] bg-[#FAFAFA] flex items-center justify-center'></span>
                            <h2 className='w-[30px] flex items-center justify-center text-[20px] text-[#FFF]'>$16</h2>
                        </div>
                        <h2 className={`text-[11px]`}>Dark rum | Ginger beer | Slice of lime. </h2>
                    </li>
                    <li>
                        <div className={`${cormorantUpright.className} flex justify-between items-center w-[250px]`}>
                            <h2 className={`text-[#DCCA87] w-[100px] flex items-center justify-start`}>Daiquiri</h2>
                            <span className='w-[70px] h-[0.5px] mt-[2px] bg-[#FAFAFA] flex items-center justify-center'></span>
                            <h2 className='w-[30px] flex items-center justify-center text-[20px] text-[#FFF]'>$10</h2>
                        </div>
                        <h2 className={`text-[11px]`}>Rum | Citrus juice | Sugar</h2>
                    </li>
                    <li>
                        <div className={`${cormorantUpright.className} flex justify-between items-center w-[250px]`}>
                            <h2 className={`text-[#DCCA87] w-[100px] flex items-center justify-start`}>Old Fashioned</h2>
                            <span className='w-[70px] h-[0.5px] mt-[2px] bg-[#FAFAFA] flex items-center justify-center'></span>
                            <h2 className='w-[30px] flex items-center justify-center text-[20px] text-[#FFF]'>$31</h2>
                        </div>
                        <h2 className={`text-[11px]`}>Bourbon | Brown sugar | Angostura Bitters</h2>
                    </li>
                    <li>
                        <div className={`${cormorantUpright.className} flex justify-between items-center w-[250px]`}>
                            <h2 className={`text-[#DCCA87] w-[100px] flex items-center justify-start`}>Negroni</h2>
                            <span className='w-[70px] h-[0.5px] mt-[2px] bg-[#FAFAFA] flex items-center justify-center'></span>
                            <h2 className='w-[30px] flex items-center justify-center text-[20px] text-[#FFF]'>$26</h2>
                        </div>
                        <h2 className={`text-[11px]`}>Gin | Sweet Vermouth | Campari | Orange garnish</h2>
                    </li>
                </ul>
            </div>
            <div>
                <Button btnValue='View More' className='w-[100px] mt-5 h-[35px] text-[10px] font-semibold tracking-widest' />
            </div>

        </div>
    )
}

export const ChefWord = () => {
    return (
        <div className={` h-[600px] bgImage w-full relative p-10 flex flex-col items-center justify-center`}>
            <div className={`w-[900px] h-[500px] flex justify-between items-center`}>
                <div className='relative w-[370px]  h-[450px]'>
                    <Image fill alt='' src={chefImg} />
                </div>

                <div className=' items-center space-y-8'>
                    <div className={`${cormorantUpright.className} flex flex-col justify-center items-start`}>
                        <h1 className='text-[#FFF] text-[16px] tracking-wider'>Chef’s Word</h1>
                        <div className=' w-[25px] relative  h-[10px]'>
                            <Image src={spoon} fill alt='' />
                        </div>
                        <h2 className={`text-[#DCCA87] text-2xl tracking-widest`}>What We Believe In</h2>
                    </div>

                    <div className='flex flex-col w-[500px] text-base italic'>
                        <p className='flex  items-center h-[30px]'><span className='text-[#FFF] text-2xl mr-2'><BiSolidQuoteAltLeft /></span>Lorem ipsum dolor sit amet consectetur adipiscing elit auctor sit .</p>
                        <p>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
                        </p>
                    </div>

                    <div>
                        <h1 className={`${cormorantUpright.className} text-[#DCCA87] text-lg`}>Kevin Luo</h1>
                        <h2 className='text-[12px] font-bold'>Chef & Founder</h2>
                    </div>

                    <div className='w-[150px] relative  h-[60px]'>
                        <Image src={signature} fill alt='' />
                    </div>

                </div>
            </div>
            {/* <video controls>
                <source src={videoImg} type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}

        </div>
    )
}

export const Video = () => {
    return (
        <div className='relative w-full h-[520px] cursor-pointer'>
            <Image src='/Images/Video.png' fill alt='' />
        </div>

    )
}

export const Awards = () => {
    return (
        <div className={`flex flex-col relative bgImage  p-20`}>
            <div className={`absolute w-[150px] h-[80px] top-10 left-1 `}>
                <Image src={laurelsLogo} alt='' fill />
            </div>

            <div className='flex justify-center items-center'>
                <div className='px-5 space-y-4'>
                    <div className={`${cormorantUpright.className} flex flex-col`}>
                        <h1 className='text-[white] text-base ml-7 '>Awards & Recognition</h1>
                        <div className='ml-7    w-[30px] relative flex h-[10px]'>
                            <Image src={spoon} fill alt='' />
                        </div>
                        <h1 className='text-[#DCCA87] text-[35px] ml-7 '>Our Laurels</h1>
                    </div>
                    <ul className='w-[600px] flex justify-between flex-wrap'>
                        <li className={`flex h-[120px] w-[300px] items-center`}>
                            <div className={`relative w-[120px] h-[80px] `}>
                                <Image src={award1} alt='' fill />
                            </div>
                            <div className={`w-[150px] space-y-2 flex flex-col justify-center p-2`}>
                                <h1 className={`text-[#DCCA87] text-base ${cormorantUpright.className}`}>Bib Gourmond</h1>
                                <h3 className='text-[12px] font-extrabold'>Lorem ipsum dolor sit amet, consectetur.</h3>
                            </div>
                        </li>
                        <li className={`flex h-[120px] w-[300px] items-center`}>
                            <div className={`relative w-[120px] h-[80px] `}>
                                <Image src={award2} alt='' fill />
                            </div>
                            <div className={`w-[150px] space-y-2 flex flex-col justify-center p-2`}>
                                <h1 className={`text-[#DCCA87] text-base ${cormorantUpright.className}`}>Rising Star</h1>
                                <h3 className='text-[12px] font-extrabold'>Lorem ipsum dolor sit amet, consectetur.</h3>
                            </div>
                        </li>
                        <li className={`flex h-[120px] w-[300px] items-center`}>
                            <div className={`relative w-[120px] h-[80px] `}>
                                <Image src={award3} alt='' fill />
                            </div>
                            <div className={`w-[150px] space-y-2 flex flex-col justify-center p-2`}>
                                <h1 className={`text-[#DCCA87] text-base ${cormorantUpright.className}`}>AA Hospitality </h1>
                                <h3 className='text-[12px] font-extrabold'>Lorem ipsum dolor sit amet, consectetur.</h3>
                            </div>
                        </li>
                        <li className={`flex h-[120px] w-[300px] items-center`}>
                            <div className={`relative w-[120px] h-[80px] `}>
                                <Image src={award4} alt='' fill />
                            </div>
                            <div className={`w-[150px] space-y-2 flex flex-col justify-center p-2`}>
                                <h1 className={`text-[#DCCA87] text-base ${cormorantUpright.className}`}>Outstanding Chef</h1>
                                <h3 className='text-[12px] font-extrabold'>Lorem ipsum dolor sit amet, consectetur.</h3>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='relative w-[400px] h-[500px]'>
                    <Image src={laurelsImg} alt='' fill />
                </div>
            </div>

        </div>
    )
}

export const Gallery: React.FC = () => {
    const images = [
        '/Images/gallery/Image 1.png',
        '/Images/gallery/Image 2.png',
        '/Images/gallery/Image 3.png',
        '/Images/gallery/Image 4.png',
    ];
    return (
        <div className='py-10 pl-10 flex'>
            <div className={` flex flex-col w-[350px] ml-5 space-y-5 h-[200px]`}>
                <div className={`${cormorantUpright.className}`}>
                    <h1 className={`text-[white] text-lg `}>Instagram</h1>
                    <div className={`w-[30px] relative flex h-[10px] `}>
                        <Image src={spoon} fill alt='' />
                    </div>
                    <h1 className={`text-[#DCCA87] text-[35px] `}>Photo Gallery</h1>
                </div>

                <p className='font-light text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                <Button btnValue='View More' className='w-[120px] h-[35px] text-[10px] font-semibold tracking-widest' />
            </div>
            <Slider images={images} />
        </div >
    )
}