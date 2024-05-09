import React from 'react'
import Footer from '../../components/footer/footer';
import '../../styles/gallery.css'

// import videoFile from 'Simplons-Beauty-Care/src/images/Video.mp4'
function Gallery() {
   
   
        
        const productImages1 = [
            'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1ha2V1cHxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1622866027662-14e3c5ee67e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNvc21ldGljc3xlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1629380108599-ea06489d66f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          
            'https://images.unsplash.com/photo-1598104358204-87cefc7c5986?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpbCUyMHBvbGlzaHxlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1677434519189-c37c1bb6b848?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1667161521640-bba57df66f29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D',
    
            'https://images.unsplash.com/photo-1630398777741-ea91619babe9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1601070846156-c0a176aac8c9?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D',

        ];
        // const productImages2= [
        //     'https://images.unsplash.com/photo-1630398777741-ea91619babe9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        //     'https://images.unsplash.com/photo-1601070846156-c0a176aac8c9?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        //     'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D',


        // ];
        // const productImages3=[
        //     'https://images.unsplash.com/photo-1598104358204-87cefc7c5986?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpbCUyMHBvbGlzaHxlbnwwfHwwfHx8MA%3D%3D',
        //     'https://plus.unsplash.com/premium_photo-1677434519189-c37c1bb6b848?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        //     'https://plus.unsplash.com/premium_photo-1667161521640-bba57df66f29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D',
        // ];
        
        
        return (
            <div >
                <h1 className="header1" align="center">
                      Welcome
        </h1>
        <h2 className="header2"align="center">
        Discover the best products for your skin type, stunning nails, amazing hair, and jewelry. Take a look at <br></br>some of our products and the care that we provide
        </h2>
            <div className="gallery-container">
                {productImages1.map((imageUrl, index) => (
                    <img key={index} src={imageUrl} alt={`Product ${index + 1}`}   style={{ transition: "transform 0.3s ease-in-out", }}
                    onMouseOver={(e) => e.target.style.transform = "scale(1.1)"}
                    onMouseOut={(e) => e.target.style.transform = "scale(1)"}
                />
                ))}
                  {/* <video controls width="600" height="400">
                    <source src={videoFile} type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
            </div>
            <section>
        <Footer />
      </section>
            </div>
        );

        
            

}




export default Gallery