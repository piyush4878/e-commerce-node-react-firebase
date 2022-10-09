import React from 'react'
// import Header from './Header'
import "./Checkout.css"
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <>

            <div className='checkout'>


                <div className="checkout__left  ">
                    <img className='checkout__add' src="https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/G/31/img21/OHL_HMT/HnK/Strips/1080x140.jpg" alt="trust Icons" />

                   <h3>Hello , {!user ? 'Guest':user.email}</h3>

                    <h2 className="checkout__title">
                        Your order summary
                    </h2>

                    {basket.map(item => (
                        <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />
                    ))}

                </div>
                <div className="checkout__right">
                    <Subtotal />
                </div>



            </div>
        </>
    )
}

export default Checkout
