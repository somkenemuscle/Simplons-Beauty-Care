import React from 'react';
import '../../syles/error.css';
import Footer from '../../components/footer/footer.jsx'
import { Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc";

function Error() {
  return (
    <div>
      <div id='error-container'>
        <h1><FcSearch /></h1>
        <h3>Page Not Found !</h3>
        <p>We're sorry, but the page you're looking for could not be found.</p>
        <Link to="/">
          <button className="button" >Keep Shopping</button>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default Error