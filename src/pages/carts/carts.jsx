import React from 'react'
import '../../styles/cart.css'
import { useCart } from '../../context/cartContext';
import CartCards from '../../components/cartCards/cartCards';
import { Link } from 'react-router-dom';


function Carts() {
  // cart global state
  const { cart, setCart } = useCart();
  // Calculate total price
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);
  // Function to clear cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <div className="cart-container">
        {cart.length === 0 ? (
          <div id='no-cart-page'>
            <h4>Your cart is empty</h4>
            <p>Browse our categories and discover our best deals!</p>
            <button>Start Shopping</button>
          </div>
        ) : (
          <div className="cart-items">
            <div className='container'>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page"><Link to='/'>Home</Link></li>
                  <li className="breadcrumb-item">Cart</li>
                </ol>
              </nav>

              <div className="row">
                <div className="col-lg-7 col-md-12">
                  {cart.map(item => (
                    <CartCards
                      key={item.id}
                      img={item.imageSrc}
                      name={item.name}
                      price={item.price}
                      total={totalPrice.toFixed(2)}
                      id={item.id}
                    />
                  ))}
                </div>
                <div className="order-summary col-lg-5 col-md-12">
                  <h2>Order Summary</h2>
                  <hr />
                  <div className="order-details">
                    <div className="detail">
                      <span>Subtotal:</span>
                      <span>${totalPrice}</span>
                    </div>
                    <div className="detail">
                      <span>Shipping:</span>
                      <span>Free</span>
                    </div>
                    <hr />
                    <div className="detail total">
                      <span>Total:</span>
                      <span>${totalPrice}</span>
                    </div>
                  </div>
                  <div className="buttons">
                    <button className="checkout-btn">Checkout (${totalPrice})</button>
                    <p onClick={clearCart} id='clear-cart'>Clear Cart ?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Carts