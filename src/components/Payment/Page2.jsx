import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Page2({
    setcurrentPage,
    currentPage,
    purchaseItem,
    payment,
}) {
    const [paymentMethod, setPaymentMethod] = useState("Credit Card")
    const currentUser = useSelector(state=> state.user)

    useEffect(()=>{payment(paymentMethod)},[paymentMethod])

  return (
    <div className={`${currentPage == 1 ? "flex w-full h-full":'hidden'} `}>
        <div className="w-full h-full relative p-5 bg-gray-100 rounded-lg shadow-md">
    <h3 className='font-bold text-xl mb-4'>Payment Details</h3>
    <table className='w-full mt-5 border-collapse'>
        <thead>
            <tr className='bg-gray-200'>
                <th className='border border-gray-400 p-2'>Product Name</th>
                <th className='border border-gray-400 p-2'>{purchaseItem?.productName}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className='border border-gray-400 p-2'>Product Price</td>
                <td className='border border-gray-400 p-2'>
                    <div className='flex flex-col'>
                        <span className='flex justify-between font-bold'><strong>Total:</strong>${purchaseItem.price * purchaseItem.quantity+10}</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td className='border border-gray-400 p-2'>Address</td>
                <td className='border border-gray-400 p-2'>{`${currentUser.address?.city}, ${currentUser.address.street} Pin No. ${currentUser.address.zipcode}`}</td>
            </tr>
            <tr>
                <td className='border border-gray-400 p-2'>Delivary On:</td>
                <td className='border border-gray-400 p-2'>{new Date().toLocaleDateString().split('/').map((d,e)=> e == 1 ? Number(d)+3 : d).join('/')}</td>
            </tr>
        </tbody>
    </table>

    <div className="mt-5">
        <h3 className='font-bold text-xl mb-2'>Payment Options</h3>
        <div className="options flex flex-col gap-3">
            <label className='flex items-center'>
                <input type="radio" className='ml-2' checked={paymentMethod === "Credit Card"} onChange={() => setPaymentMethod("Credit Card")} name="payment-options" />
                <span className='ml-2'>Credit/Debit Card</span>
            </label>
            <label className='flex items-center'>
                <input type="radio" className='ml-2' checked={paymentMethod === "Online Payment"} onChange={() => setPaymentMethod("Online Payment")} name="payment-options" />
                <span className='ml-2'>Online Payment</span>
            </label>
            <label className='flex items-center'>
                <input type="radio" className='ml-2' checked={paymentMethod === "UPI"} onChange={() => setPaymentMethod("UPI")} name="payment-options" />
                <span className='ml-2'>UPI</span>
            </label>
        </div>
    </div>

            <div className="absolute bottom-5 right-5">
                    <button className='px-10 rounded-md py-2 bg-blue-700' onClick={(e)=>{e.preventDefault(); setcurrentPage(currentPage+1)}}>Payment</button>
            </div>
        </div>
    </div>
  )
}

export default Page2