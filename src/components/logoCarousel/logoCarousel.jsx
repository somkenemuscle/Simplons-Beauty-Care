import React from 'react'
import logo1 from '../../images/logos/3m.svg'
import logo3 from '../../images/logos/menshealth.svg'
import logo4 from '../../images/logos/mrbeast.svg'
import logo2 from '../../images/logos/buzzfeed.svg'
import '../../styles/home.css'

function LogoCarousel() {
    return (
        <div>
            <div className="logo-container container text-center">
                <div className="row">
                    <span className="col-xl-3 col-md-6 col-sm-12">
                        <img className='logos' src={logo3} alt='...' />
                    </span>
                    <span className="col-xl-3 col-md-6 col-sm-12">
                        <img className='logos' src={logo2} alt='...' />
                    </span>
                    <span className="col-xl-3 col-md-6 col-sm-12">
                        <img className='logos' src={logo1} alt='...' />
                    </span>
                    <span className="col-xl-3 col-md-6 col-sm-12">
                        <img className='logos' src={logo4} alt='...' />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default LogoCarousel