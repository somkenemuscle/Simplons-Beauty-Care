import React from 'react'
import ProductCards from '../../components/productCards/productCards'
import Footer from '../../components/footer/footer'
import '../../styles/products.css'
import useSlideAnimation from '../../animation/useSlideAnimation';


function Makeup() {
  //Slide animation functionality
  useSlideAnimation();

  return (
    <div className='hidden'>
      <section className=" product-header-container">
        <h2>ALL MAKE UP PRODUCTS</h2>
        <p>Clean, cruelty-free products to pamper, protect and nourish every skin type.</p>
      </section>
      <div className="product-container container text-center">
        <div className="row">
          <div className="best-sellers-div col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <ProductCards
              src='https://credobeauty.com/cdn/shop/products/marie_veronique_probiotic_exfoliation_mask_at_credo_beatuy_1426x.jpg?v=1694727446'
              name='Castor A+ Oil'
              price='18.15'
            />
          </div>
          <div className="best-sellers-div col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <ProductCards
              src='https://credobeauty.com/cdn/shop/products/Easy-Does-It_1946x.jpg?v=1694727360'
              name='Tumeric Mask Vitamin B'
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
          <div className="best-sellers-div col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <ProductCards
              src='https://credobeauty.com/cdn/shop/products/juice_beauty_green_apple_brightening_emulsion_at_credo_beauty_1946x.jpg?v=1694727561'
              name='Face Toner'
              price='30.00'
            />
          </div>
          <div className="best-sellers-div col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <ProductCards
              src='https://credobeauty.com/cdn/shop/products/juice_beauty_green_apple_brightening_emulsion_at_credo_beauty_1946x.jpg?v=1694727561'
              name='Face Toner'
              price='30.00'
            />

          </div>
          <div className="best-sellers-div col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <ProductCards
              src='https://credobeauty.com/cdn/shop/products/juice_beauty_green_apple_brightening_emulsion_at_credo_beauty_1946x.jpg?v=1694727561'
              name='Face Toner'
              price='30.00'
            />

          </div>
          <div className="best-sellers-div col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <ProductCards
              src='https://credobeauty.com/cdn/shop/products/juice_beauty_green_apple_brightening_emulsion_at_credo_beauty_1946x.jpg?v=1694727561'
              name='Face Toner'
              price='30.00'
            />

          </div>
          <div className="best-sellers-div col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <ProductCards
              src='https://credobeauty.com/cdn/shop/products/juice_beauty_green_apple_brightening_emulsion_at_credo_beauty_1946x.jpg?v=1694727561'
              name='Face Toner'
              price='30.00'
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

      <Footer />
    </div>
  )
}

export default Makeup