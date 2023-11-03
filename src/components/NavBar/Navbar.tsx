import React from 'react'
import { cormorantUpright } from '@/styles/font'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter()

    const isLinkActive = (linkPath: string) => {
        return router.asPath === linkPath
    }

    return (
        <nav className='flex fixed text-[#fff] w-[92%] justify-between h-28 items-center py-8'>
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
                <li className='w-[1px] h-full  bg-[white]'>

                </li>
                <li>
                    <Link
                        href='#'
                        className={` ${isLinkActive("book") ? "text-[#DCCA87]" : ""}`}
                    >book table</Link>
                </li>
            </ul>
        </nav >
    )
}

export default Navbar