import React from 'react'
import {FaTrash} from 'react-icons/fa'
import CartItmesSlice, {increase, decrease} from '../../features/cart/CartItmesSlice'
import { useDispatch, useSelector} from 'react-redux'
import { removeProduct } from '../../features/cart/CartItmesSlice'


const Product = ({id,images,title,price, amount}) => {
    const dispatch = useDispatch()


    return (
        <article>
        <div className='details-product'>
            <img src={images} alt="NodeJS" />
            <div>
                <h3>{title}</h3>
                <p>this is the best course for node js with A to Z to become a hero</p>
                <span className='price'>${price}</span>
            </div>
        </div>
        <div className='buttons'>
            <div className='qty-box'>
            <p>qty :</p>
                <div>
                    <button id='decrease' onClick={()=>{
                        if(amount === 1){
                            dispatch(removeProduct(id))
                            return;
                        }
                        dispatch(decrease({id}))
                    }}>-</button>
                    <span>{amount}</span>
                    <button className='increase'  onClick={()=>dispatch(increase({id}))}>+</button>
                </div>
            </div>
            <FaTrash className='trash-incons' onClick={()=>dispatch(removeProduct(id))}/>
        </div>
    </article>

    )
    }

export default Product