import React from 'react'
import norepimg from '../../images/nora-topicals-i85krq-mGTg-unsplash.jpg'
import moisturizerimg from '../../images/pratiksha-mohanty-hDTpVVEm6wg-unsplash.jpg'
import '../../styles/home.css'

function carousel() {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row">
                        <div className="col-xl-8 col-md-7 col-sm12 ">
                            <img
                                src={norepimg}
                                className="img-fluid small-image d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-text-bg col-xl-4 col-md-5 col-sm-12">
                            <h2>Embark On Your Skincare Journey</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, blanditiis ul sdi dsdsds dsdsjdsds ullam molestias iste voluptatum</p>
                            <button>SHOP NOW</button>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="row">
                        <div className="col-xl-8 col-md-7 col-sm-12">
                            <img
                                src={moisturizerimg}
                                className="img-fluid small-image d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-text-bg col-xl-4 col-md-5 col-sm-12">
                            <h2>Get Started With Our Products</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, blanditiis ullam molestias iste voluptatum o sdhd sdsjdsn sjdssdj </p>
                            <button>SHOP NOW</button>
                        </div>

                    </div>

                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            {/* <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button> */}
        </div>
    )
}

export default carousel