import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import AddCart from './AddCart'

function SingleProduct() {
    const [product, setProduct] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()
    const [showCart, setShowCart] = useState(false)
    useEffect(() => {
        async function getProduct(ids){
            const api = `https://fakestoreapi.in/api/products/${ids}`
            try {
                const res = await fetch(api)
                const data = await res.json()
                // console.log(data)
                setProduct(data.product)
            } catch (error) {
                
            }
        }

        getProduct(id)
        
      console.log("")
    }, [id])
    
  return (
    <>
    <AddCart istoShow={showCart} productImageUrl={product.image} productName={product.title} productPrice={product.price - Math.floor(product.price/product.discount)} setistoshow={setShowCart}/>
    <div className="w-full mt-16">
        <h6 className='p-2 w-1/2 text-nowrap overflow-hidden text-ellipsis text-slate-300'><button onClick={e=>{e.preventDefault(); navigate('/')}}>Products</button>{' > '}<button onClick={(e)=>{e.preventDefault(); navigate("/audio")}}>{product.category}</button>{' > '}{product.title}</h6>
        <div className="p-2">
            <h3 className='p-2 text-3xl font-medium'>{product.title}</h3>

            <div className="w-full flex h-max">
                <div className="w-1/2 p-5">
                    <img src={product.image} alt="" />
                </div>
                <div className="w-1/2">
                    <h2 className='border-t-2 w-2/3'>{product.title}</h2>
                    <div className='p-5 flex flex-col gap-2'>
                        <div className="flex">
                            <span className=''>Price: <span className={`${product.discount ? "ml-10 text-gray-500 text-[14px]": "ml-2"} relative`}>{product.price}</span></span>
                            <div className={`${product.discount ? "flex gap-2":"hidden"} relative -left-16 gap-10 `}>
                                <span className='ml-2'>{product.price - Math.floor(product.price/product.discount)}</span>
                                <span className='bg-red-500 rounded-full w-7 h-7 flex items-center justify-center text-[12px] relative -top-3'>{product.discount}%</span>
                            </div>
                        </div>
                        <span>Brand: {product.brand}</span>
                        <span>Model: {product.model}</span>
                        <span>Color: {product.color}</span>
                        <span>Category: {product.category}</span>
                        <p className='dis h-24 overflow-hidden text-ellipsis'>
                            Discription: {product.description}
                        </p>
                        
                    </div>
                    <div className="button">
                        <button onClick={() => setShowCart(true)} type='button' className='bg-red-500 p-2 text-white rounded-md'>Add To Cart</button>
                    </div>
                </div>
            </div>
            <div className="product-details mt-2">
                <h3 className='ml-5 text-[19px] font-medium'>Product Details</h3>
                <div className="d">
                    
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SingleProduct