import React, { useEffect, useState } from 'react'

function Notification({
    displayNotification ='hidden',
    text ="Your Product Added To Cart!"
}) {
  const [display, setDisplay] = useState('hidden')


  useEffect(()=>{
   if(displayNotification !== "hidden"){
      setDisplay(displayNotification)
      const time = setTimeout(() => {
        setDisplay('hidden')
      }, 2000);
   }

  },[displayNotification])

  return (
    <>
        <div className={`${display} w-full h-screen absolute top-0 left-0`}>
            <div className="w-60 h-10 absolute z-[999] top-20 right-5 rounded-md shadow-2xl shadow-gray-800 bg-white border-[1px] border-black flex items-center justify-center">
                {text}
            </div>
        </div>
    </>
  )
}

export default Notification