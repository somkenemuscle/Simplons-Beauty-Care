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
                        <img src="https://images.unsplash.com/flagged/photo-1580820258381-20c91a156841?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='shop-by-img' alt="..." />
                    </Link>
                    <h5 className='category-text'>Hair Products</h5>
                </div>
                <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6'>
                    <Link to='products/makeup'>
                        <img src="https://images.unsplash.com/photo-1608979048467-6194dabc6a3d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='shop-by-img' alt="..." />
                    </Link>
                    <h5 className='category-text'>Makeup Kits</h5>
                </div>
                <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6'>
                    <Link to='products/skin'>
                        <img src="https://images.unsplash.com/photo-1582020738577-2e7a48043902?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='shop-by-img' alt="..." />
                    </Link>
                    <h5 className='category-text'>Skin Care</h5>
                </div>
                <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6'>
                    <Link to='products/nail'>
                        <img src="https://images.unsplash.com/photo-1534131092884-4a0a9d19dff6?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='shop-by-img' alt="..." />
                    </Link>
                    <h5 className='category-text'>Nail Art</h5>
                </div>

            </div>
        </div>
    )
}

export default CategoryCard