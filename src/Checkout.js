import React from 'react'
import { useStateValue } from './StateProovider'
import CheckoutProduct from './CheckoutProduct'
import './Checkout.css'
import Subtotal from './Subtotal';

function Checkout() {
    const [ { basket } ] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img alt="" className="checkout__ad" src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"/>
                {/* // Shopping Cart */}
                <h2 className="checkout__title">Shopping Cart</h2>
                {
                    basket.length ? (
                        basket.map(item => <CheckoutProduct {...item}/>)
                    ) : (
                    <div>
                        <h2>Your Shopping Cart is empty.</h2>
                        <p>Your Shopping Cart lives to serve. Give it purpose — fill it with books, CDs, DVDs, toys, electronics, and more.</p>
                    </div>
                    )
                }
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>        
        </div>
    )
}

export default Checkout
