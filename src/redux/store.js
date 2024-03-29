import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './reducer/cart'
import wishReducer from './reducer/wishlist'

export default configureStore({
    reducer:{
        cart:cartReducer,
        wish:wishReducer
    }
})