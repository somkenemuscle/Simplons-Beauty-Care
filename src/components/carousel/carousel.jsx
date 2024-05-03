import React from 'react'
import norepimg from '../../images/nora-topicals-i85krq-mGTg-unsplash.jpg'
import moisturizerimg from '../../images/pratiksha-mohanty-hDTpVVEm6wg-unsplash.jpg'


function carousel() {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src={norepimg}
                        className="img-fluid small-image d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img
                        src={moisturizerimg}
                        className="img-fluid small-image d-block w-100" alt="..." />
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