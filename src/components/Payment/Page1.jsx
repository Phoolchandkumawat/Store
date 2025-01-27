import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Page1(
    {currentPage,
    setcurrentPage,
    purchaseItem,
}){
    const {productid} = useParams()
    const currentUser = useSelector(state=> state.user)

  return (
    <div className={`${currentPage === 0 ? 'grid': 'hidden'}`}>
            <div className="product-d">
    <h3 className='ml-5 font-bold text-xl'>Product Details</h3>
    <div className="w-full">
        <table className='w-full mt-5 border-collapse'>
            <thead>
                <tr className='bg-gray-200'>
                    <th className='border border-gray-400 p-2'>Product Name</th>
                    <th className='border border-gray-400 p-2'>Quantity</th>
                    <th className='border border-gray-400 p-2'>Price</th>
                    <th className='border border-gray-400 p-2'>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr className='border-b border-gray-400'>
                    <td className='border border-gray-400 p-2'>{purchaseItem.productName || "Sony"}</td>
                    <td className='border border-gray-400 p-2'>{purchaseItem.quantity || "3"}</td>
                    <td className='border border-gray-400 p-2'>${purchaseItem.price || "333"}</td>
                    <td className='border border-gray-400 p-2'>${(purchaseItem.price * purchaseItem.quantity) || "Total"}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div className="product-t mt-5">
    <h3 className='ml-5 font-bold text-xl'>Address Details</h3>
    <div className="w-full">
        <table className='w-full mt-5 border-collapse'>
            <thead>
                <tr className='bg-gray-200'>
                    <th className='border border-gray-400 p-2'>Address</th>
                    <th className='border border-gray-400 p-2'>Mobile No.</th>
                    <th className='border border-gray-400 p-2'>Delivery Date</th>
                    {/* <th className='border border-gray-400 p-2'>Tax</th> */}
                    <th className='border border-gray-400 p-2'>Delivery Charges</th>
                </tr>
            </thead>
            <tbody>
                <tr className='border-b border-gray-400'>
                <td className='border border-gray-400 p-2'>{`${currentUser.address?.city}, ${currentUser.address.street} Pin No. ${currentUser.address.zipcode}`}</td>
                <td className='border border-gray-400 p-2'>{currentUser.phone}</td>
                <td className='border border-gray-400 p-2'>{new Date().toLocaleDateString().split('/').map((d,e)=> e == 1 ? Number(d)+3 : d).join('/')}</td>
                    {/* <td className='border border-gray-400 p-2'>$50</td> Example tax */}
                    <td className='border border-gray-400 p-2'>$10</td> {/* Example delivery charge */}
                </tr>
            </tbody>
        </table>
        <div className="mt-5">
            <h4 className='font-bold'>Total Amount: <span className='text-lg text-red-600'>${purchaseItem.price * purchaseItem.quantity+ 10}</span></h4>
            <span className='text-sm text-gray-600 tracking-tighter'>*Including Delivery Charges</span>
        </div>
    </div>
</div>

            <div className="d bottom-5 right-5 absolute">
                <button className='px-10 py-2 bg-blue-500 rounded-md' onClick={(e)=> {e.preventDefault(); setcurrentPage(currentPage+1)}}>Next</button>
            </div>
    </div>
  )
}

export default Page1