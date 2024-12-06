import React,{useEffect, useState} from 'react'
import HotSale from './HotSale'
import ProductCard from './ProductCard'
import Skalaton from './Skalaton'

function Products() {
  const [product, setProduct] = useState([])
  const [value , setValue] = useState(1)
  const [loader,setloader] = useState(true)
  const [selectedcategory, setSelectedCategory] = useState(0)

  useEffect(() => {
    async function callApi (values){
      // const api = 'https://fakestoreapi.in/api/products?limit=150'
      const api = `https://fakestoreapi.in/api/products?page=${values}&limit=20`
      try{
        const res = await fetch(api)
        const data = await res.json()
        // console.log(data)
        setProduct(data.products)
        if(data){
          setloader(false)

        }
      }catch(error){
        console.log(error)
      }
    }
    
    callApi(value)

    // console.log(loader)
  
    async function category(){
      try {
        if(selectedcategory==0){}
        else if(selectedcategory==1){}
        else if(selectedcategory==2){}
        else if(selectedcategory==3){}
        else if(selectedcategory==4){}

      } catch (error) {
        console.log(error)
      }
    }

    
  },[value])

  return (
    <div className="w-full mt-20">
      <HotSale/>
        <div className="top flex gap-4 sm:ml-10 ml-2">
          {
            ["All","Popular","Cheap","Expensive","Sale"].map((buttons,index)=>{
              return <button className={`w-max px-3 py-2 ${selectedcategory ==index ? "bg-slate-500":'bg-slate-300'} rounded-xl`} key={index} onClick={()=> setSelectedCategory(index)}>{buttons}</button>
            })
          }
            {/* <button className='w-max px-3 py-2 bg-slate-300 rounded-xl '>All</button>
            <button className='w-max px-3 py-2 bg-slate-300 rounded-xl '>Popular</button>
            <button className='w-max px-3 py-2 bg-slate-300 rounded-xl '>Cheap</button>
            <button className='w-max px-3 py-2 bg-slate-300 rounded-xl '>Expensiv</button>
            <button className='w-max px-3 py-2 bg-slate-300 rounded-xl '>Sale</button> */}
        </div>

        <div className={`products ${loader ? "hidden" :"grid"} grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:grid-cols-2 mt-5 w-[95%] m-auto`}>
            {
                product && product.map((product) => {
                  return <ProductCard productid = {product.id} key={product.id} images = {product.image} name = {product.title} price={product.price} discount={product.discount}/>
                })
            }
        </div>

        <Skalaton load={loader}/>

        <div className={`w-full h-20 ${product.length>0 ? "flex":"hidden"}`}>
          <ul className="inline-flex -space-x-px text-sm w-full items-center justify-center h-full">
            <li>
              <button onClick={()=> setValue(value-1)} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</button>
            </li>
            { [1,2,3,4,5,6,7,8].map((index)=>{return <li key={index}>
              <button onClick={()=> setValue(index)} className={`${value == index ? "flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white" : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}`}>{index}</button>
            </li>})}
            <li>
              <button onClick={()=> setValue(value+1)} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button >
            </li>
          </ul>
        </div>

    </div>
  )
}

export default Products