import React from 'react'
import Carousel from '../../components/carousel/carousel';
import Footer from '../../components/footer/footer';
import ProductCards from '../../components/productCards/productCards';
import LogoCarousel from '../../components/logoCarousel/logoCarousel';
import useSlideAnimation from '../../animation/useSlideAnimation';
import '../../styles/home.css'

function Home() {
  //Fade in Animation
  useSlideAnimation();

  return (
    <div>
      {/* carousel section */}
      <section className='hidden'>
        <Carousel />
      </section>

      {/* promo section */}
      {/* <section className='hidden' id='selfcare-section'>
        <h2>START YOUR SELF CARE JOURNEY</h2>
        <p></p>
      </section> */}

      {/* best sellers section */}
      <section className='hidden' id='best-sellers-section'>
        <div className="container text-center">
          <h2>MEET OUR BEST SELLERS</h2>
          <div className="row">
            <div className="best-sellers-div col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <ProductCards
                src='https://credobeauty.com/cdn/shop/files/Kosas_Hotliner_01_100_1946x.png?v=1714615018'
                name='Castor A+ Oil'
                price='18.15'
              />
            </div>
            <div className="best-sellers-div col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <ProductCards
                src='https://credobeauty.com/cdn/shop/files/Evolvh_InstaVolumeCleansingTreatment_01_1946x.png?v=1697121088'
                name='Tumeric Mask'
                price='12.45'
              />
            </div>
            <div className="best-sellers-div col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <ProductCards
                src='https://credobeauty.com/cdn/shop/files/GOOPGENES_All-in-One_Nourishing_Face_Cream_01_1946x.png?v=1713643475'
                name='Collagen Vit D Oil'
                price='87.00'
              />
            </div>
            <div className="best-sellers-div col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <ProductCards
                src='https://credobeauty.com/cdn/shop/products/juice_beauty_green_apple_brightening_emulsion_at_credo_beauty_1946x.jpg?v=1694727561'
                name='Face Toner'
                price='30.00'
              />
            </div>
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
                premade sets include our best-selling products like Liquid Lash™ Extensions Mascara, Infinity Waterproof Eyeliner™, and our luminous Brilliant Eye Brightener™.
                For every product we will be giving out thus 20% discount.
              </p>
              <button>SHOP ALL SETS</button>
            </div>
            <div className='col-xl-6 col-md-6 col-sm-12 ' id='img-bg'>
            </div>
          </div>
        </div>
      </section>

      {/* logo-carousel section */}
      <section className='hidden'>
        <LogoCarousel />
      </section>

      {/* feedback option */}

      {/* footer section */}
      <section>
        <Footer />
      </section>
    </div>
  )
}

export default Home