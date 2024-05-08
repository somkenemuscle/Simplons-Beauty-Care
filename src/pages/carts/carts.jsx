import React from 'react'
import '../../styles/cart.css'
import { useCart } from '../../context/cartContext';
import ProductCards from '../../components/productCards/productCards'


function Carts() {
  // cart global state
  const { cart } = useCart();
  // Calculate total price
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map(item => (
            <ProductCards
              key={item.id}
              src={item.imageSrc}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      )}
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  )
}

export default Carts