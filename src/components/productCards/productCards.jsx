import React from 'react'
import '../../styles/productCard.css'
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function productCards({ src, name, price }) {
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
      <button className="btn btn-product-card btn-sm" data-mdb-ripple-init>ADD TO CART  </button>
    </>
  )
}

export default productCards