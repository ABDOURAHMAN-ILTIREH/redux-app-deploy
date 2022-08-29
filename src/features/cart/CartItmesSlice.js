import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItme: [],
    total: 0,
    amount: 1,
}

const CartSlice = createSlice( {
    name: 'cart',
    initialState,
    reducers:{
        Addcart : (state, action)=>{
            const newProduct = action.payload;
            // if existing Products in cartItme
            const existingProduct = state.cartItme.find( itme =>itme.id === newProduct.id);
            
            if(existingProduct){
                    existingProduct.amount++;
                }else{
                    state.cartItme.push({
                        id: newProduct.id,
                        title: newProduct.title,
                        price: newProduct.price,
                        images : newProduct.images,
                        amount: 1,
                    })
                }
            },

            increase: (state, {payload})=>{
                let cartItme = state.cartItme.find(itme => itme.id === payload.id)
                cartItme.amount = cartItme.amount + 1
            },
            decrease: (state, {payload})=>{
                let cartItme = state.cartItme.find(itme => itme.id === payload.id)
                cartItme.amount = cartItme.amount - 1
            },
            calculateTotals : (state)=>{
                let total = 0;
                let amount = 0;
                state.cartItme.forEach( itme =>{
                    amount += itme.amount;
                    total += itme.amount * itme.price;
                })
                state.amount = amount;
                state.total = total;

            },
            removeProduct : (state, action)=>{
               let productID = action.payload;
               state.cartItme = state.cartItme.filter( itme =>itme.id !== productID)
            }

    }
})
export const {Addcart, increase, decrease, calculateTotals, removeProduct} = CartSlice.actions;

export default CartSlice.reducer