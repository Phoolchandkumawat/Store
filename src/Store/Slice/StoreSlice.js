import { createSlice , nanoid } from "@reduxjs/toolkit";





const initialValue = {
    data : [],
    notification: [],
    currentItem: [],
    user:[],
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
        },
        getproductCart: (state, action)=>{
             const product = state.data.map((data)=> data.id === action.payload ? data : "not Found")
             state.currentItem = product 
         },
         setUser: (state, action)=>{
            state.user = action.payload
         }
    },
})




export const {addToCart, addNotification, updateNotification, getproductCart, setUser} = storeSlice.actions


export default storeSlice.reducer