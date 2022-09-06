import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFrombasket=()=>(
        dispatch({
          type:'REMOVE_FROM_BASKET',
          id:id,
        })
      )

    return (

        <div className='checkoutProduct'>
            <img className='checkoutpage__image' src={image} alt="" />

            <div className="checkoutproduct__info">
                <p>{title}</p>
                <small>$</small>
                <strong>{price}</strong>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <span class="fa fa-star checked"></span>
                    ))}
                </div>
                <button onClick={removeFrombasket} className='removeItemBasket'>Remove from basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct