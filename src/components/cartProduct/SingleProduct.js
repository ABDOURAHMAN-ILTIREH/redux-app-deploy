import React from 'react'

import {FaArrowCircleLeft} from 'react-icons/fa'
import {closeModel} from '../../features/Model/ModelSlice'
import {useDispatch, useSelector} from 'react-redux'
import Product from './Product'




function SingleProduct() {
    const {cartItme} = useSelector(state=>state.cart)
    const {amount} = useSelector(state=>state.cart)
    const {total} = useSelector(state=>state.cart)
    const dispatch = useDispatch()


    if(amount < 1){
      return(
          <section className='single-Product'>
              <div className='box-content'>
                 <h2 className='discrept-text'>your shopping cart is empty</h2>
                 <FaArrowCircleLeft className='incons-arrow-left' onClick={()=>dispatch(closeModel())}/>
              </div>
          </section>
      )
    };

  return (
   <section className='single-Product'>
      <div className="box-content">
        <FaArrowCircleLeft className='incons-arrow-left' onClick={()=>dispatch(closeModel())}/>
            {cartItme.map( (itme)=>(
                <Product key={itme.id} {...itme}/>
            ))}            
        </div>
        <div className="box-total-display">
            <h2>cart summary</h2>
           <div>
             <p>TOTAL:(<span>{amount}</span>itmes)</p>
             <h3>$ {total}</h3>
           </div>
           <button>proceed to chekout</button>
        </div>
   </section>
  )
}

export default SingleProduct