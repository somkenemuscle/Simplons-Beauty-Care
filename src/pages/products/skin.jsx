import React from 'react'
import ProductCards from '../../components/productCards/productCards'
import Footer from '../../components/footer/footer'
import { useEffect } from 'react';
import '../../styles/products.css'
import { skincareProducts } from '../../database/skincare';

function Skin() {

  //Slide animation functionality
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          entry.target.classList.remove('hidden');
          observer.unobserve(entry.target); // Stop observing once revealed
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className='hidden'>
      <section className=" product-header-container">
        <h2>ALL SKINCARE</h2>
        <p>Clean, cruelty-free products to pamper, protect and nourish every skin type.</p>
      </section>

      <div className="product-container container text-center">
        <div className="row">
          {skincareProducts.map(product => (
            <div key={product.id} className="best-sellers-div col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <ProductCards
                src={product.imageSrc}
                name={product.name}
                price={product.price}
                id={product.id}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Skin