import React from 'react'

function Page1(
    {currentPage,
    setcurrentPage,
}) {
  return (
    <div className={`${currentPage === 0 ? 'grid': 'hidden'}`}>
            <div className="product-d">
                <h3 className='ml-5 font-bold'>Product Details</h3>
                <div className="w-full">
                    <table className='w-full mt-5 grid'>
                        <tr className='w-full border-[1px] border-black grid grid-cols-4'>
                            <th className='border-r-[1px] border-black'>Products Name</th>
                            <th className='border-r-[1px] border-black'>Product Quantity</th>
                            <th className='border-r-[1px] border-black'>Products Price</th>
                            <th >Total</th>
                        </tr>
                        <tr className='w-full border-x-[1px] border-b-[1px] border-black grid grid-cols-4'>
                            <th className='border-r-[1px] border-black'>Sony</th>
                            <th className='border-r-[1px] border-black'>2</th>
                            <th className='border-r-[1px] border-black'>777</th>
                            <th >Total</th>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="product-t mt-5">
                <h3 className='ml-5 font-bold'>Product Payment</h3>
                <div className="w-full">
                    <table className='w-full mt-5 grid'>
                        <tr className='w-full border-[1px] border-black grid grid-cols-4'>
                            <th className='border-r-[1px] border-black'>Products Quantity</th>
                            <th className='border-r-[1px] border-black'>Product Price</th>
                            <th className='border-r-[1px] border-black'>Products Tex</th>
                            <th >Product Delavery Charges</th>
                        </tr>
                        <tr className='w-full border-x-[1px] border-b-[1px] border-black grid grid-cols-4'>
                            <th className='border-r-[1px] border-black'>Sony</th>
                            <th className='border-r-[1px] border-black'>2</th>
                            <th className='border-r-[1px] border-black'>777</th>
                            <th >Total</th>
                        </tr>
                        <tr className='w-full border-x-[1px] border-b-[1px] border-black grid grid-cols-1'>
                            <th>Total Amount</th>
                        </tr>
                    </table>
                </div>
            </div>

            <div className="d bottom-5 right-5 absolute">
                <button className='px-10 py-2 bg-blue-500 rounded-md' onClick={(e)=> {e.preventDefault(); setcurrentPage(currentPage+1)}}>Next</button>
            </div>
    </div>
  )
}

export default Page1