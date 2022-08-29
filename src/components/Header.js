import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { useDispatch,useSelector } from 'react-redux'
import { openModel } from '../features/Model/ModelSlice'


const Header = () => {
    const dispatch = useDispatch()
    const {amount} = useSelector(state=>state.cart)

  return (
    <section className='header'>
        <h1>shopping cart redux</h1>
        <div className='header-content'>
           <h2>cart</h2>
           <FaShoppingCart className='icon-shop' onClick={()=>dispatch(openModel())}/>
           <span className='cart-amount'>{amount}</span>
        </div>
    </section>
  )

  
}

export default Header