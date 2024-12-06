import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
function Page4({
    setcurrentPage,
    currentPage,
}) {
    const navigate = useNavigate()

    useEffect(()=>{
        if(currentPage==3){
            const de = setTimeout(() => {
                navigate('/product/cart')
            }, 1000);
        }
    },[currentPage])

  return (
    <div className={`${currentPage==3 ? "flex": "hidden"} w-full h-full`}>
        <div className="flex items-center justify-center w-full h-full">
                <div className="mb-20 place-items-center grid grid-cols-1 gap-2 items-center justify-center">
                    <div className="w-24 h-24 rounded-full border-[1px] border-black"></div>
                    <h3>Payment Succesfull</h3>
                </div>
        </div>
    </div>
  )
}

export default Page4