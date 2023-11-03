import { HiMenu } from "react-icons/hi"; 
import React from 'react'

const MainHeader = () => {
  return (
    <div className="bg-white flex justify-between items-center px-4 h-12 mb-4">
        <div>Brand</div>
        <div>
            <HiMenu className="cursor-pointer"/>
        </div>
    </div>
  )
}

export default MainHeader