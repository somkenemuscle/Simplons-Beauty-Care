import React from 'react'
import '../../styles/feedback.css'

function Feedback() {
    return (
        <div id="carouselExample" className="feedback-carousel carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="d-block w-100">
                        <h2><strong>John Doe</strong></h2>
                        <p>Message from John Doe goes here... lo</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-block w-100">
                        <h2><strong>Jane Smith</strong></h2>
                        <p>Message from Jane Smith goes here...</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-block w-100">
                        <h2><strong>David Johnson</strong></h2>
                        <p>Message from David Johnson goes here...</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" style={{ color: 'black' }}></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" style={{ color: 'black' }}></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}

export default Feedback