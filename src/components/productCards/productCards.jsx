import React from 'react'
import '../../syles/productCard.css'

function productCards({ src, name, price }) {
  return (
    <div className="card">
      <img src={src} className="card-img-top" alt="Fissure in Sandstone" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">$ {price} USD </p>
        <a href="/" className="btn btn-product-card btn-sm" data-mdb-ripple-init>ADD TO CART  </a>
      </div>
    </div>
  )
}

export default productCards