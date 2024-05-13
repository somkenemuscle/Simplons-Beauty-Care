// import React from 'react'
// import norepimg from '../../images/nora-topicals-i85krq-mGTg-unsplash.jpg'
// import moisturizerimg from '../../images/pratiksha-mohanty-hDTpVVEm6wg-unsplash.jpg'
import '../../styles/home.css'

function carousel() {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row">
                        <div className="col-xl-8 col-md-7 col-sm12 ">
                            <img
                                src='https://images.unsplash.com/photo-1551392505-f4056032826e?q=80&w=2855&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                className="img-fluid small-image d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-text-bg col-xl-4 col-md-5 col-sm-12">
                            <h2>Embark On Your Skincare Journey</h2>
                            <p>Self care is a personal journey and we're here to guide you along the way. Contact our self care experts for more help.</p>
                            <button>GET STARTED</button>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="row">
                        <div className="col-xl-8 col-md-7 col-sm-12">
                            <img
                                src='https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?q=80&w=2978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                className="img-fluid small-image d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-text-bg col-xl-4 col-md-5 col-sm-12">
                            <h2> Makeup With Our Products</h2>
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
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default carousel