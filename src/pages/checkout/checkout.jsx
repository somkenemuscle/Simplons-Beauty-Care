import React, { useState } from 'react';
import '../../styles/checkout.css';
import { useCart } from '../../context/cartContext';
import { CiDeliveryTruck } from "react-icons/ci";
import { Link } from 'react-router-dom';

function Checkout() {
    // cart global state
    const { setCart } = useCart();
    const [orderPlaced, setOrderPlaced] = useState(false); // State to track if order is placed

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        // Clear the cart
        setCart([]);
        // Show the order placed message
        setOrderPlaced(true);
    }

    return (
        <div>
            {orderPlaced ? (
                <div>
                    <div className="alert alert-success" role="alert">
                        Order placed successfully!
                    </div>
                    <Link to='/'>
                        <div style={{ textAlign: 'center' }}>
                            <button id='after-order-btn'>Continue Shopping</button>
                        </div>
                    </Link>
                </div>

            ) : (
                <div id='checkout-container'>
                    <h3>Delivery Details <CiDeliveryTruck /></h3>
                    <form onSubmit={handlePlaceOrder}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="number" className="form-label">Phone Number</label>
                            <input type="number" className="form-control" id="number" aria-describedby="emailHelp" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        </div>
                        <br />
                        <button style={{ width: '100%' }} type="submit" className="btn btn-dark">Place Order</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Checkout;
