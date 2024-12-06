import React from 'react'

function Skalaton({load}) {
  return (
    <>
    <div className={`products ${load ? "grid" :"hidden"} grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:grid-cols-2 mt-5 w-[95%] m-auto`}>
        <div className="h-52 rounded-md bg-gray-500 animate-pulse md:hidden xl:flex"></div>
        <div className="h-52 rounded-md bg-gray-500 animate-pulse"></div>
        <div className="h-52 rounded-md bg-gray-500 animate-pulse"></div>
        <div className="h-52 rounded-md bg-gray-500 animate-pulse"></div>
    </div>
    </>
  )
}

export default Skalaton