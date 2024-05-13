import React from 'react';
import '../../styles/categoryCard.css';
import { Link } from 'react-router-dom';

function CategoryCard() {
    return (
        <div className='category-container'>
            <h3>SHOP BY CATEGORY</h3>
            <div className='row'>
                <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6'>
                    <Link to='products/hair'>
                        <img src="https://images.unsplash.com/photo-1616104130421-6eccff73df1d?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" id='shop-by-img' alt="..." />
                    </Link>
                    <h4>Hair Products</h4>
                </div>
                <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6'>
                    <Link to='products/skin'>
                        <img src="https://images.unsplash.com/photo-1609175215545-3b41b17d9e1e?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" id='shop-by-img' alt="..." />
                    </Link>
                    <h4>Skin Care</h4>
                </div>
                <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6'>
                    <Link to='products/makeup'>
                        <img src="https://images.unsplash.com/photo-1608979048467-6194dabc6a3d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" id='shop-by-img' alt="..." />
                    </Link>
                    <h4>Makeup Kits</h4>
                </div>
                <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6'>
                    <Link to='products/nail'>
                        <img src="https://images.unsplash.com/photo-1534131092884-4a0a9d19dff6?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" id='shop-by-img' alt="..." />
                    </Link>
                    <h4>Nail Art</h4>
                </div>

            </div>
        </div>
    )
}

export default CategoryCard