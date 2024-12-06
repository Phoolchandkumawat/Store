import React, { useState } from 'react'

function Page2({
    setcurrentPage,
    currentPage 
}) {
    const [paymentMethod, setPaymentMethod] = useState("Credit/Debit Card")

    
  return (
    <div className={`${currentPage == 1 ? "flex w-full h-full":'hidden'} `}>
        <div className="w-full h-full relative">
                <div className="">
                    <h3 className='font-bold'>Payment Details</h3>
                    <table className='w-full mt-5 grid'>
                        <tr className='grid grid-cols-12 border-[1px] border-black'>
                            <th className='col-span-4 border-r-[1px] border-black'>Product Name</th>
                            <th className='col-span-8 '>Song</th>
                        </tr>
                        <tr className='grid grid-cols-12 border-b-[1px] border-x-[1px] border-black'>
                            <th className='col-span-4 border-r-[1px] border-black'>Product Price</th>
                            <th className='col-span-8 '>
                                <tr className='w-full flex gap-5'>
                                    <th>Price:</th>
                                    <th>$44</th>
                                </tr>
                                <tr className='w-full flex gap-5'>
                                    <th>Delivery Charges:</th>
                                    <th>$4</th>
                                </tr>
                                <tr className='w-full flex gap-5'>
                                    <th>Total</th>
                                    <th>$48</th>
                                </tr>
                            </th>
                        </tr>
                        <tr className='grid grid-cols-12 border-b-[1px] border-x-[1px] border-black'>
                            <th className='col-span-4 border-r-[1px] border-black'>Adderess</th>
                            <th className='col-span-8 '>
                                dflsjfdldsjdlk
                            </th>
                        </tr>
                        
                        
                    </table>

                    <div className="mt-5 ">
                        <h3 className='font-bold'>Payment Options</h3>
                        <div className="options flex gap-5 mt-2">
                            <label className='flex'>
                                Credit/Debit Card   
                                <input type="radio" className='ml-2' checked={paymentMethod == "Credit/Debit Card"} onChange={()=> setPaymentMethod("Credit/Debit Card")} name="payment-options" />
                            </label>
                            <label>
                                Online Banking
                                <input type="radio" className='ml-2' checked={paymentMethod =="Online Banking"} onChange={()=> setPaymentMethod("Online Banking")} name="payment-options" />
                            </label>
                            <label>
                                UPI
                                <input type="radio" className='ml-2' onChange={()=> setPaymentMethod("UPI")} checked={paymentMethod=="UPI"} name="payment-options" />
                            </label>
                        </div>
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