import React from 'react'
import {Addcart} from '../../features/cart/CartItmesSlice'
import { useDispatch} from 'react-redux';



const SingleCart = ({id, images,title,price}) => {

const dispatch = useDispatch();
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
                <button id='views-button'>views itme</button>
                <button id='add-cart' onClick={()=>{dispatch(Addcart({
                    id,
                    title,
                    price,
                    images
                }))}}>add to cart</button>
            </div>
     </article>
  )
}

export default SingleCart