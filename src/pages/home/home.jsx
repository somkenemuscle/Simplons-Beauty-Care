import React from 'react'
import Carousel from '../../components/carousel/carousel';
import Footer from '../../components/footer/footer';
import ProductCards from '../../components/productCards/productCards';
import LogoCarousel from '../../components/logoCarousel/logoCarousel';
import '../../App.css';


function Home() {
  return (
    <div>
      {/* carousel section */}
      <Carousel />

      {/* promo section */}
      <section id='promo-section'>
        <h2>START YOUR SELF CARE JOURNEY</h2>
        <p>Self care is a personal journey and we're here to guide you along the way. Contact our self care experts for more help.</p>
      </section>


      {/* best sellers section */}
      <section id='best-sellers-section'>
        <h2>SHOP OUR BEST SELLERS</h2>
        <div className="container text-center">
          <div className="row">
            <div className="best-sellers-div col-xl-3 col-md-6 col-sm-6">
              <ProductCards
                src='https://images.unsplash.com/photo-1600428877878-1a0fd85beda8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                name='Vitamin C Serum'
                price='18.15'
              />
            </div>
            <div className="best-sellers-div col-xl-3 col-md-6 col-sm-6">
              <ProductCards
                src='https://images.unsplash.com/photo-1564594206491-26734df9237f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                name='Tumeric Face Mask'
                price='12.45'
              />
            </div>
            <div className="best-sellers-div col-xl-3 col-md-6 col-sm-6">
              <ProductCards
                src='https://images.unsplash.com/photo-1629732097571-b042b35aa3ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                name='The Collagen Booster'
                price='87.00'
              />
            </div>
            <div className="best-sellers-div col-xl-3 col-md-6 col-sm-6">
              <ProductCards
                src='https://images.unsplash.com/photo-1629732047847-50219e9c5aef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjExfHxza2luY2FyZSUyMHByb2R1Y3RzfGVufDB8fDB8fHww'
                name='The Ultra Moisturizer '
                price='30.00'
              />
            </div>
          </div>
        </div>
      </section>

      {/* logo-carousel section */}
      <LogoCarousel />

      {/* img section */}
      <div id='img-bg'>
      </div>

      {/* promo section */}
      <section id='promo-section'>
        <h2>OUR SERVICES</h2>
        <p>Get 20% discount on all products which will be effective from 22nd April till 5th May 2024</p>
      </section>

      {/* feedback option */}

      {/* footer section */}
      <Footer />
    </div>
  )
}

export default Home