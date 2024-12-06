import React from 'react'
import { useNavigate } from 'react-router-dom'

function Allproductcard({products}) {
  const navigate = useNavigate()
  const toProduct = (e)=>{
    console.log(e)
    navigate(`/product/${e}`)
    setShowSearch(false)
  }
  return (
    <div onClick={()=>toProduct(products.id)} className="w-full h-[250px] p-2 border-2 cursor-pointer">
        <div className='w-full h-full gap-5 flex'>
            <img src={products.image} alt={products.title}  className='w-2/6 object-contain aspect-[0.9]'/>
            <div className="text w-4/6 h-full">
                <h3 className='mt-5'>{products.title}</h3>
                <div className='flex mt-2'>
                  <span className={products.discount ?"text-gray-500 line-through" :'text-black' }>{"$"+products.price}</span>
                 <div className={`${products.discount ? "flex": "hidden"} ml-5 text-[20px]`}>$ {products.price - Math.floor(products.price/products.discount)}</div>
                 <div className={`${products.discount ? "flex": "hidden"} bg-red-600 px-2 py-1 rounded-full ml-2 `}>{products.discount}% off</div>
                </div>
              <div className="dis h-12 mt-5 overflow-hidden">
                <p className='w-5/6'>{products.description}</p>
              </div>
              </div>
        </div>
    </div>
  )
}

export default Allproductcard