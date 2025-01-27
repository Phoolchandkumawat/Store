import React from 'react'
import Sidebar from './Sidebar'
import HotSale from './HotSale'
import Products from './Products'

function Hero() {
  return (
    <div className='flex relative w-full'>
        <div className="md:flex hidden sidebar absolute top-0 left-0 w-1/5 h-[calc(100vh-64px)] border-r-2">
          <Sidebar/>
        </div>
        <div className="main w-full">
          <div className="ml-auto w-full md:w-[calc(100%-20%)]">
            {/* <HotSale/> */}
            <Products/>
          </div>
        </div>
    </div>
  )
}

export default Hero