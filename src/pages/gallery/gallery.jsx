import React from 'react'
import '../../styles/gallery.css'
import Footer from '../../components/footer/footer'

function Gallery() {


    return (
        <div>
            <div className='gallery-bg container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-3 col-sm-6 col-12'>
                        <img className='' src="https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?q=80&w=800&auto=format&fit=max" alt="..." />
                    </div>
                    <div className='col-lg-4 col-md-3 col-sm-6 col-12'>
                        <img className='' src="https://images.unsplash.com/photo-1630398777741-ea91619babe9?q=80&w=800&auto=format&fit=max" alt="..." />
                    </div>
                    <div className='col-lg-4 col-md-3 col-sm-6 col-12'>
                        <img className='' src="https://images.unsplash.com/photo-1630398777741-ea91619babe9?q=80&w=800&auto=format&fit=max" alt="..." />
                    </div>
                    <div className='col-lg-4 col-md-3 col-sm-6 col-12'>
                        <img className='' src="https://images.unsplash.com/photo-1630398777741-ea91619babe9?q=80&w=800&auto=format&fit=max" alt="..." />
                    </div>
                    <div className='col-lg-4 col-md-3 col-sm-6 col-12'>
                        <img className='' src="https://images.unsplash.com/photo-1630398777741-ea91619babe9?q=80&w=800&auto=format&fit=max" alt="..." />
                    </div>
                    <div className='col-lg-4 col-md-3 col-sm-6 col-12'>
                        <img className='' src="https://images.unsplash.com/photo-1630398777741-ea91619babe9?q=80&w=800&auto=format&fit=max" alt="..." />
                    </div>
                </div>
            </div>
            <section>
                <Footer />
            </section>
        </div>
    )
}

export default Gallery








