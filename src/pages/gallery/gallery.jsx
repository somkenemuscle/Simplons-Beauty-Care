import React, { useState } from 'react';
import '../../styles/gallery.css';
import Footer from '../../components/footer/footer';
import { productImages } from '../../database/productImg';
import useSlideAnimation from '../../animation/useSlideAnimation';

function Gallery() {
    //slide animation
    useSlideAnimation();

    const [fullscreenImage, setFullscreenImage] = useState(null);

    const openFullscreen = (image) => {
        setFullscreenImage(image);
    };

    const closeFullscreen = () => {
        setFullscreenImage(null);
    };

    return (
        <div>
            <section className=" product-header-container">
                <h2>OUR GALLERY PAGE</h2>
                <p>Pictures of our products and our beautiful customers</p>
            </section>
            <div className='gallery-bg'>
                <div className='row'>
                    {productImages.map((image, index) => (
                        <div key={index} className='hidden col-lg-4 col-md-6 col-sm-6 col-12 gallery-item'>
                            <img src={image} alt={`Product ${index + 1}`} onClick={() => openFullscreen(image)} />
                        </div>
                    ))}
                </div>
            </div>
            {fullscreenImage && (
                <div className="fullscreen-modal" onClick={closeFullscreen}>
                    <div className="fullscreen-content" onClick={(e) => e.stopPropagation()}>
                        <span className="cancel-button" onClick={closeFullscreen}>x</span>
                        <img src={fullscreenImage} alt="Fullscreen" />
                    </div>
                </div>
            )}
            <section>
                <Footer />
            </section>
        </div>
    );
}

export default Gallery;


