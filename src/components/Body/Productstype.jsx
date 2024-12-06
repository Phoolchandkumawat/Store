import React, { useEffect, useState } from 'react'
import Allproductcard from './Allproductcard'
import {useParams} from 'react-router-dom'

function Productstype({
    title = 'All Products',
    }) {
      const [product, setProduct] = useState([])
      const {id} = useParams()

      


    useEffect(()=>{
      async function callProduct(product){
        const api = `https://fakestoreapi.in/api/products/category?type=${product}`
  
        try{
          const res = await fetch(api)
          const data = await res.json()
          setProduct(data.products)
          console.log(data.products)
        }catch(error){
          console.log(error)
        }
      }

      callProduct(title)

    },[id])  

  return (
    <div className='w-full'>
        <h3 className='ml-5 mt-5 text-2xl'>{title}</h3>
    <div className="w-[95%] mt-5 m-auto gap-5 grid grid-cols-1">
      {product && product.map((product)=>{
        return <Allproductcard products={product} key={product.id}/>
      })}
        {/* <Allproductcard products={product}/> */}
    </div>
    </div>
  )
}

export default Productstype