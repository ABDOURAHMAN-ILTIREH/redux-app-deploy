import React,{useEffect} from "react";
import CartProducts from "./components/Products/CartProducts";
import Header from "./components/Header";
import SingleProduct from "./components/cartProduct/SingleProduct";
import { useSelector,useDispatch } from "react-redux";
import {calculateTotals} from './features/cart/CartItmesSlice'

function App() {
  const {isOpen} = useSelector( (state)=>state.model)
  const {cartItme} = useSelector( state =>state.cart)
  console.log(cartItme.length)
  
  const dispatch = useDispatch()
  useEffect( ()=>{
    dispatch(calculateTotals())
  },[cartItme])


  return (
    <main>
      <Header />
      <CartProducts />
      {
        isOpen && <SingleProduct />
      }
    </main>
  );
}

export default App;
