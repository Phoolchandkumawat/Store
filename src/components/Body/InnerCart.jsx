import React from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { getproductCart } from '../../Store/Slice/StoreSlice'


function InnerCart({
    imagesUrl,
    productName,
    productPrice,
    productQuantity,
    productId,
})

{
    const navigate = useNavigate()
    const dispatch = useDispatch()

  return (
    <div className="items h-40 border-2 p-2 rounded-md">
                <div className="card-items gap-2 flex h-full items-center justify-center">
                    <div className="w-1/6 border-2 overflow-hidden sm:h-full h-[15vw]">
                        <img src={imagesUrl} className='w-full h-full object-contain' alt={productName} />
                    </div>
                    <div className="w-5/6 grid grid-cols-1 h-max">
                    <div className="grid grid-cols-4 text-center">
                        <span>Name</span>
                        <span>Price</span>
                        <span>Quantity</span>
                        <span>Buy</span>
                    </div>
                    <div className="grid grid-cols-4 text-center h-max mt-2">
                        <span className='border-r-2 border-gray-700 text-ellipsis text-nowrap overflow-hidden w-full'>{productName}</span>
                        <span className='border-r-2 border-gray-700'>{productPrice}</span>
                        <span className='border-r-2 border-gray-700'>{productQuantity}</span>
                        <div className="">
                            <button onClick={(e)=>{e.preventDefault(); navigate(`/product/payment/${productId}`); dispatch(getproductCart(productId))}} className='bg-red-500 px-5 hover:bg-red-700 py-1 rounded-md'>Buy</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
  )
}

export default InnerCart