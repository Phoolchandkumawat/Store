import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {addNotification} from '../../Store/Slice/StoreSlice'
function Notification({
    displayNotification,
    text ="Your Product Added To Cart!",
    setNoti
}) {
  const [display, setDisplay] = useState(3)
  const dispatch = useDispatch()

  useEffect(()=>{
    console.log(displayNotification)
   if(displayNotification !== "hidden"){    
      const time = setTimeout(() => {
        setNoti('hidden')
        thisc = 0;
        // dispatch(addNotification({text:text, seen:false}))
      }, 3000);
   } 
   
   console.log(displayNotification)

  },[displayNotification])

  return (
    <>
        <div className={`${displayNotification}  w-full h-screen fixed top-0 left-0 -z-10`}>
            <div className="w-60 h-10 absolute z-[999] top-20 right-5 rounded-md shadow-2xl shadow-gray-800 bg-white border-[1px] border-black flex items-center justify-center">
             {text}
            </div>
        </div>
    </>
  )
}

export default Notification