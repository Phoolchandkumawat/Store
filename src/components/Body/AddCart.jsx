import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {useDispatch} from 'react-redux'
import { addToCart } from '../../Store/Slice/StoreSlice';

function AddCart({
    istoShow,
    setistoshow,
    productName,
    productImageUrl,
    productPrice,
    }) {
    const [selectedColor, setSelectedColor] = useState('red');
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()
    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };

    const sendToCart = (e) => {
        e.preventDefault();
        dispatch(addToCart({productImageUrl:productImageUrl, productName:productName, price:productPrice, quantity: quantity, productColor: selectedColor}))
        setistoshow(!istoShow)
    }

  return (
    <div className={`fixed top-0 left-0 z-[999] w-screen h-screen ${istoShow ? "flex" : "hidden"} items-center justify-center`}>
    <div className="w-1/3 shadow-2xl border-2 bg-white p-4 rounded-md relative">
        <FontAwesomeIcon icon={faTimes} onClick={()=> setistoshow(false)} className='absolute top-3 right-3 cursor-pointer hover:bg-gray-300 rounded-full p-2 text-[18px]'/>
        <h2 className="text-2xl font-bold">Add To Cart</h2>
        <div className="details mt-4">
            <p className="flex items-center gap-2 w-full mb-2 overflow-hidden">
                <span className="text-xl font-bold text-nowrap">Product Name:</span>
                <span className="text-red-500 text-nowrap overflow-hidden text-ellipsis">{productName}</span>
            </p>
            <p className="flex items-center gap-2 w-full mb-2">
                <span className="text-xl font-bold text-nowrap min-w-7">Product Price:</span>
                <span className="text-red-500">{productPrice}</span>
            </p>
            <p className="flex items-center gap-2">
    <span className="text-xl font-bold">Product Color:</span>
    
    <div className="flex items-center">
        <input
            type="radio"
            name="productColor"
            value="red"
            checked={selectedColor === 'red'}
            onChange={handleColorChange}
            className='hidden peer'
        />
        <div className={`w-5 h-5 rounded-full bg-red-600 cursor-pointer border-2 border-gray-300 peer-checked:border-transparent`} onClick={() => setSelectedColor('red')}></div>
        <span className="ml-2 cursor-pointer" onClick={() => setSelectedColor('red')}>Red</span>
    </div>

    <div className="flex items-center">
        <input
            type="radio"
            name="productColor"
            value="green"
            checked={selectedColor === 'green'}
            onChange={handleColorChange}
            className='hidden peer'
        />
        <div className={`w-5 h-5 rounded-full bg-green-600 cursor-pointer border-2 border-gray-300 peer-checked:border-transparent`} onClick={() => setSelectedColor('green')}></div>
        <span className="ml-2 cursor-pointer" onClick={() => setSelectedColor('green')}>Green</span>
    </div>  

    <div className="flex items-center">
        <input
            type="radio"
            name="productColor"
            value="blue"
            checked={selectedColor === 'blue'}
            onChange={handleColorChange}
            className='hidden peer'
        />
        <div className={`w-5 h-5 rounded-full bg-blue-600 cursor-pointer border-2 border-gray-300 peer-checked:border-transparent`} onClick={() => setSelectedColor('blue')}></div>
        <span className="ml-2 cursor-pointer" onClick={() => setSelectedColor('blue')}>Blue</span>
    </div>
</p>
            <div className="flex gap-4 mt-4">
                <input type="number" defaultValue="1" value={quantity} onChange={(e)=> setQuantity(e.target.value)} min="1" max={10}  className="border-2 p-2 text-sm rounded-md" />
                <button onClick={sendToCart} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-300">Add to Cart</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default AddCart