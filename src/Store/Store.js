import {configureStore} from '@reduxjs/toolkit'
import dataReducers from './Slice/StoreSlice'

const Store = configureStore({
    reducer: dataReducers,
})


export default Store