import React from 'react'
import logo1 from '../../images/logos/3m.svg'
import logo3 from '../../images/logos/menshealth.svg'
import logo4 from '../../images/logos/mrbeast.svg'
import logo6 from '../../images/logos/macys.svg'
import '../../App.css'

function LogoCarousel() {
    return (
        <div>
            {/* marque sponsors logo section */}
            <section className='sponsors-container'>
                <h2>OUR SPONSORS</h2>
                <div className="logos">
                    <div className="logos-slide">
                        <img src={logo1} alt='...' />
                        <img src={logo3} alt='...' />
                        <img src={logo6} alt='...' />
                        <img src={logo4} alt='...' />
                    </div>
                </div>
            </section>


        </div>
    )
}

export default LogoCarousel