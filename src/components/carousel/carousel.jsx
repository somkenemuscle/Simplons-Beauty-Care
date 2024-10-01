import React from 'react';
import '../../styles/home.css';

function carousel() {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row">
                        <div className="col-xl-8 col-md-7 col-sm-12">
                            <img src='https://images.unsplash.com/photo-1551392505-f4056032826e?q=80&w=2855&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className="img-fluid small-image d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-text-bg col-xl-4 col-md-5 col-sm-12">
                            <h2>Embark On Your Skincare Journey</h2>
                            <p>Self-care is a personal journey and we are here to guide you along the way. Contact our self care experts for more help.</p>
                            <button>GET STARTED</button>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="row">
                        <div className="col-xl-8 col-md-7 col-sm-12">
                            <img src='https://images.unsplash.com/photo-1533562389935-457b1ae48a39?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className="img-fluid small-image d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-text-bg col-xl-4 col-md-5 col-sm-12">
                            <h2>Our Makeup Collection</h2>
                            <p>Elevate your beauty routine with our exquisite makeup products. Designed to complement every skin tone and style.</p>
                            <button>SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default carousel