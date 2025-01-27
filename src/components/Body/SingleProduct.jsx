import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import AddCart from './AddCart'
// import Notification from '../popnotification/Notification'
import { useSelector } from 'react-redux'

function SingleProduct() {
    const [product, setProduct] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()
    const [showCart, setShowCart] = useState(false)
    const userdata = useSelector(state => state.user)
    useEffect(() => {
        async function getProduct(ids){
            const api = `https://fakestoreapi.in/api/products/${ids}`
            try {
                const res = await fetch(api)
                const data = await res.json()
                setProduct(data.product)
            } catch (error) {
                
            }
        }

        getProduct(id)
    
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
                            <span className=''>Price:<span className={`${product.discount ? " text-gray-500 text-[14px] left-11": "ml-0"} relative`}>${product.price}</span></span>
                            <div className={`${product.discount ? "flex gap-14 relative -left-9":"hidden"} `}>
                                <span className='ml-2'>${product.price - Math.floor(product.price/product.discount)}</span>
                                <span className='bg-red-500 rounded-full w-7 h-7 items-center justify-center flex'>{product.discount}%</span>
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
                    <div className='flex items-center gap-5' >
                        <button disabled={userdata.address ? false : true} onClick={() => setShowCart(true)} type='button' className='bg-red-500 p-2 text-white rounded-md'>Add To Cart</button>
                        <span className={`${userdata.address ? 'hidden' : 'flex underline text-gray-700'}`}>Login To Add To Card</span>
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