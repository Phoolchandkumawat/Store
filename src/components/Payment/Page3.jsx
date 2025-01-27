import React from 'react'

function Page3({
    setcurrentPage,
    currentPage,
    cardDetails = "UPI",
    purchaseItem
}) {

    const handleonsubmit =(e)=>{
        e.preventDefault();
        setcurrentPage(currentPage+1)
    }

  return (
    <div className={`${currentPage ==2 ? "flex" :'hidden'} w-full h-full`}>
        <div className="w-full h-full relative p-6 bg-gray-50 rounded-lg shadow-md">
    <h3 className='text-black font-bold text-2xl mb-4 text-center'>{cardDetails} Details</h3>
    <div className={`${cardDetails === "Credit Card" ? "flex" : "hidden"} w-4/5 m-auto bg-white p-5 rounded-lg shadow`}>
        <div className="grid grid-cols-1 gap-5 w-full">
            <div className="text-center mb-4">
                <h3 className='text-lg font-semibold'>Total Payment: <span className='text-blue-600'>${purchaseItem.price * purchaseItem.quantity+10}</span></h3>
            </div>
            <div className="w-full m-auto">
                <form className='gap-5 grid grid-cols-1' onSubmit={handleonsubmit}>
                    <label className='flex flex-col mb-4'>
                        <span className='font-medium'>Name on Card:</span>
                        <input type="text" required className='mt-1 w-full rounded-md border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-blue-500' />
                    </label>
                    <label className='flex flex-col mb-4'>
                        <span className='font-medium'>Card Number:</span>
                        <input type="text" required className='mt-1 w-full rounded-md border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-blue-500' />
                    </label>
                    <div className="flex justify-between mb-4">
                        <label className='flex flex-col w-1/2 mr-2'>
                            <span className='font-medium'>Expiration Date:</span>
                            <input type="text" placeholder="MM/YY" required className='mt-1 w-full rounded-md border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-blue-500' />
                        </label>
                        <label className='flex flex-col w-1/2 ml-2'>
                            <span className='font-medium'>CVV:</span>
                            <input type="text" maxLength={3} required className='mt-1 w-full rounded-md border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-blue-500' />
                        </label>
                    </div>
                    <button type="submit" className='bg-blue-500 text-white p-2 text-lg rounded-md hover:bg-blue-600 transition duration-200'>Make Payment</button>
                </form>
            </div>
        </div>
    </div>
    <div className={`${cardDetails === "Online Payment" ? "flex" : "hidden"} w-4/5 m-auto bg-white p-5 rounded-lg shadow`}>
        <div className="grid grid-cols-1 gap-5 w-full">
            <div className="text-center mb-4">
                <h3 className='text-lg font-semibold'>Total Payment: <span className='text-blue-600'>${purchaseItem.price * purchaseItem.quantity+10}</span></h3>
            </div>
            <div className="w-full m-auto">
                <form className='gap-5 grid grid-cols-1' onSubmit={handleonsubmit}>
                    <label className='flex flex-col mb-4'>
                        <span className='font-medium'>Email:</span>
                        <input type="email" required className='mt-1 w-full rounded-md border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-blue-500' />
                    </label>
                    <label className='flex flex-col mb-4'>
                        <span className='font-medium'>Payment Method:</span>
                        <select required className='mt-1 w-full rounded-md border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-blue-500'>
                            <option value="">Select Payment Method</option>
                            <option value="PayPal">PayPal</option>
                            <option value="Stripe">Stripe</option>
                            <option value="Bank Transfer">Bank Transfer</option>
                        </select>
                    </label>
                    <button type="submit" className='bg-blue-500 text-white p-2 text-lg rounded-md hover:bg-blue-600 transition duration-200'>Proceed to Payment</button>
                </form>
            </div>
        </div>
    </div>
    <div className={`${cardDetails === "UPI" ? "flex" : "hidden"} w-4/5 m-auto bg-white p-5 rounded-lg shadow`}>
        <div className="grid grid-cols-1 gap-5 w-full">
            <div className="text-center mb-4">
                <h3 className='text-lg font-semibold'>Total Payment: <span className='text-blue-600'>${purchaseItem.price * purchaseItem.quantity+10}</span></h3>
            </div>
            <div className="w-full m-auto">
                <form className='gap-5 grid grid-cols-1' onSubmit={handleonsubmit}>
                    <label className='flex flex-col mb-4'>
                        <span className='font-medium'>UPI ID:</span>
                        <input type="text" required className='mt-1 w-full rounded-md border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-blue-500' />
                    </label>
                    <label className='flex flex-col mb-4'>
                        <span className='font-medium'>Payment Note (Optional):</span>
                        <input type="text" className='mt-1 w-full rounded-md border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-blue-500' placeholder="Enter a note for the payment" />
                    </label>
                    <button type="submit" className='bg-blue-500 text-white p-2 text-lg rounded-md hover:bg-blue-600 transition duration-200'>Pay via UPI</button>
                </form>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Page3