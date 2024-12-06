import React from 'react'
import InnerCart from './InnerCart'
import { useSelector } from 'react-redux'
function Cart() {

    const allCartData = useSelector(state => state.data)

    console.log(allCartData)
  return (
    <>
    <div className="w-full">
        <h3 className='ml-5 text-3xl p-5'>Cart Products</h3>
        <div className="grid grid-cols-1 w-11/12 m-auto gap-2">
            {allCartData && allCartData.map((data)=>{
              return <InnerCart key={data.id} productName={data.productName} productPrice={data.price} productQuantity={data.quantity} imagesUrl={data.productImageUrl}/>
            })}
        </div>
    </div>
    </>
  )
}

export default Cart