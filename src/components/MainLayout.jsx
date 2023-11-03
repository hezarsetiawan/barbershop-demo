import { HiChevronRight } from "react-icons/hi"; 
import { HiUser } from "react-icons/hi"; 
import { BsShop } from "react-icons/bs"; 
import { HiTicket } from "react-icons/hi"; 
import { HiShoppingCart } from "react-icons/hi"; 
import { HiMap } from "react-icons/hi"; 
import { HiHome } from "react-icons/hi"; 
import React from 'react'
import MainHeader from './MainHeader';
import Link from "next/link";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-gray-200 w-full min-h-screen">
        <MainHeader/>
        <div className="flex justify-start items-start">
            <aside className="bg-white rounded-lg w-60 p-4">
                <ul>
                    <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
                        <HiHome className="mr-2"/>
                        <Link href="/">Home</Link>
                    </li>
                    <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
                        <HiMap className="mr-2"/>
                        <h3 className="flex-1">Barbershop</h3>
                        <HiChevronRight />
                    </li>
                    <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
                        <HiShoppingCart className="mr-2"/>
                        <Link href="/">Home</Link>
                    </li>
                    <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
                        <HiTicket className="mr-2"/>
                        <Link href="/">Home</Link>
                    </li>
                    <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
                        <BsShop className="mr-2"/>
                        <Link href="/">Home</Link>
                    </li>
                    <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
                        <HiUser className="mr-2"/>
                        <Link href="/">Home</Link>
                    </li>
                </ul>
            </aside>
            <main className="flex-1">{children}</main>
        </div>
    </div>
  )
}

export default MainLayout