import React from 'react'
import Carousel from '../../components/carousel/carousel';
import Footer from '../../components/footer/footer';
import ProductCards from '../../components/productCards/productCards';
import useSlideAnimation from '../../animation/useSlideAnimation';
import CategoryCard from '../../components/categorycard/categoryCard';
import '../../styles/home.css'
import Feedback from '../../components/feedback/feedback';
import { bestSellerProducts } from '../../database/bestsellers';

function Home() {
  //Fade in Animation
  useSlideAnimation();

  return (
    <div>
      {/* carousel section */}
      <section className='hidden'>
        <Carousel />
      </section>

      {/* shop by category */}
      <div className='container'>
        <section className='container hidden shop-by-category-container'>
          <CategoryCard />
        </section>
      </div>



      {/* best sellers section */}
      <section className='hidden' id='best-sellers-section'>
        <div className="container text-center">
          <h2>MEET OUR BEST SELLERS</h2>
          <div className="row">
            {bestSellerProducts.map((product, index) => (
              <div key={index} className="product-div col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                <ProductCards
                  src={product.imageSrc}
                  name={product.name}
                  price={product.price}
                  id={product.id}
                  category={product.category}
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* img section */}
      <section className='img2-section hidden'>
        <div className="container">
          <div className="row">
            <div className="img2-text col-xl-6 col-md-6 col-sm-12">
              <h3>Get up to 20% discount </h3>
              <p>Can't decide between your favorites? Get them all! Our
                premade sets include our best-selling products like Liquid Lash™ Extensions Mascara™.
              </p>
              <button>SHOP ALL SETS</button>
            </div>
            <div className='col-xl-6 col-md-6 col-sm-12 ' id='img-bg'>
            </div>
          </div>
        </div>
      </section>



      {/* feedback option */}
      <div className='container'>
        <Feedback />
      </div>
      {/* footer section */}
      <section>
        <Footer />
      </section>
    </div>
  )
}

export default Home