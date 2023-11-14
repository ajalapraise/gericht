import React from 'react'
import { cormorantUpright } from '@/styles/font'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

//svg and images
import navLine from '../../../public/svgs/Line.svg'

const Navbar = () => {
    const router = useRouter()

    const isLinkActive = (linkPath: string) => {
        return router.asPath === linkPath
    }

    return (
        <nav className='flex fixed z-[99999] text-[#fff] w-full justify-between h-24 items-center py-8  px-10 bg-[#0C0B08]'>
            <div className={`${cormorantUpright.className} flex  items-center h-full text-xl`}>
                <Link href='/'>Gerícht</Link>
            </div>
            <ul className='flex items-center h-full gap-x-8'>
                <li className=' flex items-center'>
                    <Link
                        href='/'
                        className={` ${isLinkActive("/") ? "text-[#DCCA87]" : ""}`}
                    > Home </Link>
                </li>
                <li className=' flex items-center'>
                    <Link
                        href='#'
                        className={` ${isLinkActive("pages") ? "text-[#DCCA87]" : ""}`}
                    >Pages</Link>
                </li>
                <li className=' flex items-center'>
                    <Link
                        href='#'
                        className={` ${isLinkActive("contact") ? "text-[#DCCA87]" : ""}`}
                    >Contact Us</Link>
                </li>
                <li className=' flex items-center'>
                    <Link
                        href='#'
                        className={` ${isLinkActive("blog") ? "text-[#DCCA87]" : ""}`}
                    >Blog</Link>
                </li>
                <li className=' flex items-center'>
                    <Link
                        href='#'
                        className={` ${isLinkActive("landing") ? "text-[#DCCA87]" : ""}`}
                    >Landing</Link>
                </li>
            </ul>
            <ul className=' flex gap-x-10 h-full items-center justify-between'>
                <li>
                    <Link
                        href='#'
                        className={` ${isLinkActive("login") ? "text-[#DCCA87]" : ""}`}
                    >Log in / registration</Link>
                </li>
                <li className='h-full'>
                    <div className='w-5 relative h-full'>
                        <Image src={navLine} alt='' fill />
                    </div>
                </li>
                <li>
                    <Link
                        href='#'
                        className={` ${isLinkActive("book") ? "text-[#DCCA87]" : ""}`}
                    >Book table</Link>
                </li>
            </ul>
        </nav >
    )
}

export default Navbar