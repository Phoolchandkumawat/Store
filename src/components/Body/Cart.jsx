import React, { useEffect } from 'react'
import InnerCart from './InnerCart'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Cart() {
    const allCartData = useSelector(state => state.data)
    const navigate = useNavigate()

  return (
    <>
    <div className="w-full">
        <h3 className='ml-5 text-3xl p-5'>Cart Products</h3>
        <div className="grid grid-cols-1 w-11/12 m-auto gap-2">
            {allCartData?.length > 0 ? allCartData.map((data)=>{
              return <InnerCart productId={data.id} key={data.id} productName={data.productName} productPrice={data.price} productQuantity={data.quantity} imagesUrl={data.productImageUrl}/>
            }): (<div className='w-full h-[80vh]  place-content-center text-center'> <span>No Products Are Here Explore <br />Explore And Add Items To The Cart</span> <br /> <button onClick={(e)=> {e.preventDefault(); navigate("/")}} className='bg-red-600 p-2 rounded-md mt-2 hover:bg-red-700'>Explore</button> </div>)}
        </div>
    </div>
    </>
  )
}

export default Cart