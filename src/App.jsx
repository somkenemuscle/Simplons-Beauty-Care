import './App.css';
import Navbar from './components/navbar/navbar';
import Carousel from './components/carousel/carousel';
import Footer from './components/footer/footer';
import ProductCards from './components/productCards/productCards';
import logo1 from '../src/images/logos/3m.svg'
import logo2 from '../src/images/logos/barstool-store.svg'
import logo3 from '../src/images/logos/menshealth.svg'
import logo4 from '../src/images/logos/mrbeast.svg'
import logo5 from '../src/images/logos/forbes.svg'
import logo6 from '../src/images/logos/macys.svg'

function App() {

  return (
    <div>
      <div className='header-navbar-wrapper' >
        {/* header section */}
        <header >
          <span>GET 2 FREE SAMPLES WITH ANY $48 PURCHASE </span>
        </header>
        {/* navbar section */}
        <Navbar />
      </div>

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

      {/* marque sponsors logo section */}
      <section className='sponsors-container'>
        <h2>OUR SPONSORS</h2>
        <div className="logos">
          <div className="logos-slide">
            <img src={logo1} alt='...' />
            <img src={logo2} alt='...' />
            <img src={logo6} alt='...' />
            <img src={logo4} alt='...' />
            <img src={logo1} alt='...' />
            <img src={logo2} alt='...' />
            <img src={logo3} alt='...' />
            <img src={logo4} alt='...' />
            <img src={logo1} alt='...' />
            <img src={logo2} alt='...' />
          </div>

          <div className="logos-slide">
            <img src={logo1} alt='...' />
            <img src={logo2} alt='...' />
            <img src={logo3} alt='...' />
            <img src={logo4} alt='...' />
            <img src={logo6} alt='...' />
            <img src={logo2} alt='...' />
            <img src={logo3} alt='...' />
            <img src={logo5} alt='...' />
            <img src={logo1} alt='...' />
            <img src={logo6} alt='...' />
          </div>
        </div>
      </section>

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
  );
}

export default App;
