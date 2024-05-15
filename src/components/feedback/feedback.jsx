import React from 'react'
import '../../styles/feedback.css'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";



function Feedback() {
    return (

        <div id="carouselExample" className="feedback-carousel carousel slide">
            <h4>Customers Feedbacks</h4>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" style={{ marginLeft: '10px', marginRight: '10px' }}>
                <span className="carousel-control-prev-icon" aria-hidden="true" style={{ color: 'black' }}></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" style={{ marginLeft: '10px', marginRight: '10px' }}>
                <span className="carousel-control-next-icon" aria-hidden="true" style={{ color: 'black' }}></span>
                <span className="visually-hidden">Next</span>
            </button>
            <div className="feedb carousel-inner">
                <div className="carousel-item active">
                    <div className="d-block w-100">
                        <p>"I've been using this skincare product for a month now, and I can already see a noticeable difference in my skin's texture and appearance. It feels smoother, looks brighter, and my fine lines seem to be diminishing. I'm really impressed with the results!"</p>
                        <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></p>
                        <h6><strong>- John Doe. I</strong></h6>

                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-block w-100">
                        <p>"As someone with sensitive skin, I'm always hesitant to try new skincare products. But this one has been a game-changer for me. Not only is it gentle and non-irritating, but it's also incredibly effective. My skin feels hydrated, calm, and has a healthy glow that I haven't seen in years. I highly recommend it!"</p>
                        <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                        <h6><strong>- Ada Turin. Y</strong></h6>

                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-block w-100">
                        <p>"I've struggled with acne for years, trying countless products with minimal success. However, since incorporating this skincare product into my routine, my breakouts have significantly reduced, and my complexion has never looked clearer. It's amazing how something so simple can make such a big difference. Thank you!"</p>
                        <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></p>
                        <h6><strong>- David Johnson</strong></h6>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Feedback