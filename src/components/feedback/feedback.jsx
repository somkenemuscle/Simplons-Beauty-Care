import React from 'react'
import '../../styles/feedback.css'
import { Link } from 'react-router-dom';
import { useFeedback } from '../../context/feedbackContext';


function Feedback() {
    const { feedback } = useFeedback();
    return (

        <div id="carouselExample" className="feedback-carousel carousel slide">
            <h4 id='fb-hd'>What Our Customers Say</h4>
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
                        <h6><strong>John Doe. I</strong></h6>

                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-block w-100">
                        <p>"As someone with sensitive skin, I'm always hesitant to try new skincare products. But this one has been a game-changer for me. Not only is it gentle and non-irritating, but it's also incredibly effective. My skin feels hydrated, calm, and has a healthy glow that I haven't seen in years. I highly recommend it!"</p>
                        <h6><strong>Ada Turin. Y</strong></h6>
                    </div>
                </div>

                {feedback.map((item, index) => (
                    <div key={index} className="carousel-item">
                        <div className="d-block w-100">
                            <p>{item.message}</p>
                            <h6><strong>{item.name}</strong></h6>
                        </div>
                    </div>
                ))}

            </div>
            <Link to='/feedback'>
                <button id='review-btn'>Leave Review</button>
            </Link>

        </div>
    )
}

export default Feedback