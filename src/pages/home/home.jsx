import React from 'react'
import Carousel from '../../components/carousel/carousel';
import Footer from '../../components/footer/footer';
import ProductCards from '../../components/productCards/productCards';
import useSlideAnimation from '../../animation/useSlideAnimation';
import CategoryCard from '../../components/categorycard/categoryCard';
import '../../styles/home.css'
import Feedback from '../../components/feedback/feedback';
import { bestSellerProducts } from '../../database/bestsellers';
import { TbFlowerOff } from "react-icons/tb";
import { BsFillExclamationOctagonFill } from "react-icons/bs";
import { GiRabbit } from "react-icons/gi";


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



      {/* mission section */}
      <div className="hidden mission-container container text-center">
        <h4>About Our Products</h4>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <span className='flower-icon mission-icons'><TbFlowerOff /></span>
            <p>Our products are 100% free of gluten containing materials or derivatives of gluten containing grains handled at any of our facilities</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <span className='no-icon mission-icons'><BsFillExclamationOctagonFill /></span>
            <p>Our products do not contain ingredients or additives that are from an animal source unless otherwise it is specified</p>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <span className='rabbit-icon mission-icons'><GiRabbit /></span>
            <p>We believe that animals should not suffer or die to test cosmetics or cosmetic ingredients.We support animal protection </p>
          </div>
        </div>
      </div>



      {/* img section */}
      <section className='img2-section hidden'>
        <div className="container">
          <div className="row">
            <div className="img2-text col-lg-6 col-md-6 col-sm-12">
              <h3>Our Upcoming Product </h3>
              <p>Our new hydration cream and serum set, which will be available from 2nd of june 2024, and would be going
                for a price of $129™.
              </p>
              <br />
              <button style={{marginTop: '3%'}}>SHOP AVAILABLE SKINCARE</button>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 ' id='img-bg'>
            </div>
          </div>
        </div>
      </section>



      {/* feedback option */}
      <div className='hidden container'>
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