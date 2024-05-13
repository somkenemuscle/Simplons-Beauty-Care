import React from 'react'
import '../../styles/productCard.css'
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { skincareProducts } from '../../database/skincare';
import { bestSellerProducts } from '../../database/bestsellers';
import { hairCareProducts } from '../../database/hair';
import { jewelryProducts } from '../../database/jewellry';
import { makeupProducts } from '../../database/makeup';
import { nailProducts } from '../../database/nail';
import { weddingKits } from '../../database/wedding-kits';
import { useCart } from '../../context/cartContext';


function ProductCards({ src, name, price, id, category }) {
  // cart global state
  const { cart, setCart } = useCart();

  //handle cart functionality
  function handleCart(id, category) {
    const categoryProducts = {
      'skincare': skincareProducts,
      'best-seller': bestSellerProducts,
      'hair': hairCareProducts,
      'jewellry': jewelryProducts,
      'makeup': makeupProducts,
      'nail': nailProducts,
      'wedding': weddingKits
    };

    const product = categoryProducts[category]?.find(product => product.id === id);
    if (product) {
      setCart([...cart, product]); // Adding product to cart
    } else {
      console.error(`Product not found in category: ${category}`);
    }
  }

  return (
    <>
      <div className="card">
        <img src={src} className="card-img-top" alt="Fissure in Sandstone" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p style={{ color: 'grey' }} className="card-rating"><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /> <span id='card-review'> 124 REVIEWS</span>  </p>
          <p className="card-text">$ {price} USD </p>
        </div>
      </div>
      <button onClick={() => handleCart(id, category)} className="btn btn-product-card btn-sm" data-mdb-ripple-init>ADD TO CART </button>
    </>
  )
}

export default ProductCards