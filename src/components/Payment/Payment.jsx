import React, { useEffect, useState } from 'react'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Payment() {
    const [steps, setSteps] = useState(0)
    const {productid} = useParams()
    // const currentProduct = useSelector(state=> state.currentItem[0])
    const por = useSelector(state=> state.data)
    const [paymentType, setPaymentType] = useState("Credit Card")
    // const [productDetails, setProductDetails] = useState([])
    const curr = por.filter((pro)=> pro.id == productid)[0]
    useEffect(()=>{
        function stepsCount(){
            if(steps == 0){}
            else if(steps==1){}
            else if(steps==2){}
            else if(steps==3){}
        }

        // async function getproduct(ids){
        //     const api = `https://fakestoreapi.in/api/products/${ids}`
        //     try {
        //         const product = await fetch(api)
        //         const dataProduct = await product.json()
        //     } catch (error) {
                
        //     }
        // }

      

    },[productid])

  return (
    <div className="w-full h-screen bg-white absolute left-0 top-0 z-[999] flex flex-col items-center pt-5">
        <div className="steps flex pb-5 gap-5 relative">
            {[1,2,3,4].map((ste,index)=>{
                return <span key={index} onClick={()=>setSteps(index)} className={`z-50 relative cursor-pointer flex items-center justify-center w-10 h-10 rounded-full ${steps>=index ? "bg-blue-500": "bg-gray-500"}`}>{ste}</span>
            })}
            
        </div>
        <div className="w-4/6 h-5/6 bg-gray-300 rounded-md p-2 relative">
            <Page1 setcurrentPage={setSteps} currentPage={steps} purchaseItem={curr}/>
            <Page2 setcurrentPage={setSteps} currentPage={steps} purchaseItem={curr} payment={setPaymentType}/>
            <Page3 setcurrentPage={setSteps} currentPage={steps} purchaseItem={curr} cardDetails={paymentType}/>
            <Page4 currentPage={steps} purchaseItem={curr} />
        </div>
    </div>
  )
}

export default Payment