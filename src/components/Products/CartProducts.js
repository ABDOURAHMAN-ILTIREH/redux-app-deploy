import React from 'react'
import DataCart from '../../DataCart';
import SingleCart from './SingleCart';

const CartProducts  = () => {
  return (
    <div className='products'>
        {DataCart.map((itme)=>(
            <SingleCart key={itme.id} {...itme}/>
        ))}
    </div>
  )
}

export default CartProducts