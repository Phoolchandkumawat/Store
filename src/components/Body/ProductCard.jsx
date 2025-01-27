import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProductCard({
  images,
  name,
  price,
  discount,
  productid,
}){

  const navigate = useNavigate()
  const toProduct = (e)=>{
    navigate(`/product/${e}`)
  }

  return (
    <div onClick={()=>toProduct(productid)} className="border-2 sm:h-[40dvw] h-[50dvw] md:h-[35dvw] xl:h-[20dvw] lg:h-[25dvw] overflow-hidden p-2 cursor-pointer">
        <div className="w-full h-full sm:place-content-center sm:place-items-center sm:flex sm:flex-col flex flex-row">
            <div className="w-2/4 h-1/2">
                    <img src={images} loading='lazy' className='object-contain aspect-[0.9] hover:scale-110' alt={name} />
            </div>
            <div className="text h-1/2 pt-5">
                <div className='w-full h-12 overflow-hidden text-ellipsis border-b-2'>{name}</div>
                <div className='flex gap-5 pl-2 mt-5 items-center'>
                 <span className={discount ?"text-gray-500 line-through" :'text-black' }>{"$"+price}</span>
                 <div className={`${discount ? "flex": "hidden"}`}>$ {price - Math.floor(price/discount)}</div>
                 <div className={`${discount ? "flex": "hidden"} bg-red-600 px-2 py-1 rounded-full`}>{discount}%</div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default ProductCard