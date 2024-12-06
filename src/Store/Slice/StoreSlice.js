import { createSlice , nanoid } from "@reduxjs/toolkit";





const initialValue = {
    data : [
        {id:"2", productName: 'products', price:"price", quantity:'2', productColor:"white", productImageUrl:"images"}
    ],
    notification: [{id: '2', text:"Added To Cart", seen:"false"},{id: '2d', text:"Added To Store Cart", seen:"false"}]
}

const storeSlice = createSlice({
    name:'data',
    initialState : initialValue,
    reducers :{
        addToCart: (state, action)=>{
            const data = {
                id:nanoid(),
                productName: action.payload.productName,
                price: action.payload.price,
                quantity: action.payload.quantity,
                productImageUrl: action.payload.productImageUrl,
                productColor: action.payload.productColor,
            }
            state.data.push(data);
        },

        addNotification: (state, action)=>{
            const notification ={
                id:nanoid(),
                text:action.payload.text,
                seen:action.payload.seen
            }

            state.notification.push(notification)
        },
        updateNotification: (state,action)=>{
            state.notification.filter((notification)=>{
                return notification.id !== action.payload.id
            })
        }
    },
})




export const {addToCart, addNotification, updateNotification} = storeSlice.actions


export default storeSlice.reducer