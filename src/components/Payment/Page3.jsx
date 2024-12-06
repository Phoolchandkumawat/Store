import React from 'react'

function Page3({
    setcurrentPage,
    currentPage,
    cardDetails = "Credit Card",
    total = "$22"
}) {

    const handleonsubmit =(e)=>{
        e.preventDefault();
        console.log(e)
        setcurrentPage(currentPage+1)
    }

  return (
    <div className={`${currentPage ==2 ? "flex" :'hidden'} w-full h-full`}>
        <div className="w-full h-full relative">
            <h3 className='text-black p-2 font-bold text-2xl'>{cardDetails} Details</h3>
            <div className={`${cardDetails == "Credit Card" ? "flex" :"hidden"} w-4/5 m-auto`}>
                <div className=" grid grid-cols-1 gap-5 w-full">
                    <div className="">
                        <h3>Total Payment: {total}</h3>
                    </div>
                    <div className="w-full m-auto">
                        <form className='gap-5 grid grid-col-1' onSubmit={handleonsubmit}>
                            <label className='flex w-full items-center justify-center'>
                                Name: <input type="text" required  className='ml-6 w-4/5 rounded-md outline-none p-2'/>
                            </label>
                            <label className='flex w-full gap-2 items-center justify-center'>
                                Card No: <input type="number" required  className='w-4/5  rounded-md outline-none p-2'/>
                            </label>
                            <label className='flex items-center justify-center' >
                                CVV: <input type="number" maxLength={1} required className='w-4/5 rounded-md outline-none p-2 ml-9'/>
                            </label>
                            <button  className='bg-blue-500 p-2 text-[16px] rounded-md absolute bottom-2 right-10'>Payment</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page3