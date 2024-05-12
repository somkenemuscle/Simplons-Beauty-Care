import React from 'react';
import '../../styles/about.css';
import Footer from '../../components/footer/footer';
import useSlideAnimation from '../../animation/useSlideAnimation';
import { Link } from 'react-router-dom';

function About() {
  useSlideAnimation();
  return (
    <div>
      <div id='about-hd-img'>
        <h3>ABOUT US</h3>
      </div>

      <div style={{ textAlign: 'center' }} className="about-bg hidden ">
        <div className="text">
          <nav className='about-breadcrumb' aria-label="breadcrumb">
            <ol className=" breadcrumb">
              <li className="breadcrumb-item active" aria-current="page"><Link to='/'>Home</Link></li>
              <li className="breadcrumb-item">About Us</li>
            </ol>
          </nav>

          <h4>OUR STORY</h4>
          <p>Simplon’s Beauty Care Centre is a sprawling haven for beauty enthusiasts, offering a diverse range of hair care, skincare, makeup kits, nail paints, nail arts, jewelry, wedding kits, and more.
            Since its establishment in 1985, Simplon has been synonymous with quality and innovation.
          </p>
          <p>
            With its expansion into multiple cities, Simplon continues to
            uphold its commitment to premium offerings and personalized service. At Simplon, we believe in enhancing natural beauty and promoting self-care,
            empowering individuals to look and feel their best every day.
          </p>
          <p>
            Explore Simplon for a captivating selection of beauty essentials and upcoming products, where each visit promises indulgence and transformation.
            Our experienced team of professionals is dedicated to providing the highest level of service, ensuring that every customer leaves feeling rejuvenated
            and satisfied.
          </p>

        </div>
        <h4>OUR MISSION</h4>
        <p className="mission">Our mission at Simplon's Beauty Care Centre is to redefine the beauty industry by providing unparalleled quality products and services
          since our establishment in 1985. With our roots deeply embedded in the city, we have
          expanded our presence to multiple cities, driven by the success and trust of our loyal customers. We are committed to offering a diverse range of cosmetics and
          accessories, setting the highest standards for quality and innovation. Our relentless dedication to exceptional service ensures that every customer experiences
          the epitome of indulgence and satisfaction. At Simplon, we strive to empower individuals to embrace their natural beauty and enhance their self-confidence,
          making every visit a transformative experience.</p>

        <h4>ABOUT RETURNS</h4>
        <p className="return">
          Simplon Beauty Care Centre offers a 45 day return policy on all products. You may return any product within 45 days of purchase. Reach out to any of our shops. We will process it 1-3 business days after we receive your returned product and send you an email confirmation. Please allow up to 14 days for your bank or credit card company to post it to your account.
        </p>

        <h4>ABOUT GETTING IN TOUCH</h4>
        <p className="return">
          We can’t wait to hear from you! Visit our contact page here to learn the best point of contact for your inquiry. You can get us
          via mail or our phone numbers which you will see on our contact page.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
