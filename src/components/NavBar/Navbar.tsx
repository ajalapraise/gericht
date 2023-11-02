import React from 'react'
import { cormorantUpright } from '@/styles/font'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='flex fixed text-[#fff] w-full justify-between items-center py-8'>
            <div className={`${cormorantUpright.className} w-1/5 text-xl`}>
                <h1>Gerícht</h1>
            </div>
            <div className='flex w-1/3 justify-between'>
                <ul className='flex w-full space-x-5 '>
                    <li className=' flex items-center'>
                        <Link href='#'>Home</Link>
                    </li>
                    <li className=' flex items-center'>
                        <Link href='#'>Pages</Link>
                    </li>
                    <li className=' flex items-center'>
                        <Link href='#'>Contact Us</Link>
                    </li>
                    <li className=' flex items-center'>
                        <Link href='#'>Blog</Link>
                    </li>
                    <li className=' flex items-center'>
                        <Link href='#'>Landing</Link>
                    </li>
                </ul>
            </div>
            <div className='flex w-1/3 justify-around items-center'>
                <div className='w-1/3'>
                    <Link href='#'>Log in / registration</Link>
                </div>
                <div className='bg-[white] w-[2px] h-10 rounded-lg'></div>
                <div className='w-1/3'>
                    <Link href='#'>book table</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar