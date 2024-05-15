import React, { useState, useEffect } from 'react';
import '../../styles/contacts.css';
import Footer from '../../components/footer/footer';
import useSlideAnimation from '../../animation/useSlideAnimation';
import { FaPhone } from "react-icons/fa6";

function MapComponent({ address }) {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyCOmUvYh3QOFTFZSihs75tueN_e7ebcwAg`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch coordinates');
        }
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          setCoordinates({ lat, lng });
        } else {
          throw new Error('No results found');
        }
      } catch (error) {
        console.error('Error fetching coordinates:', error);
      }
    };

    if (address) {
      fetchCoordinates();
    }
  }, [address]);

  useEffect(() => {
    if (coordinates) {
      const initializeMap = () => {
        const map = new window.google.maps.Map(document.getElementById(`map-${address}`), {
          center: coordinates,
          zoom: 12
        });
        new window.google.maps.Marker({
          position: coordinates,
          map: map,
          title: address
        });
      };

      if (window.google && window.google.maps) {
        initializeMap();
      } else {
        // Wait for Google Maps API to be loaded
        window.initMap = initializeMap;
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCOmUvYh3QOFTFZSihs75tueN_e7ebcwAg&callback=initMap`;
        script.defer = true;
        document.head.appendChild(script);
      }
    }
  }, [coordinates, address]);

  return (
    <div className='map' id={`map-${address}`} style={{ width: '100%', height: '250px' }}></div>
  );
}

function Contacts() {
  useSlideAnimation();
  // Hardcoded addresses
  const addresses = [
    { address: "2 Ovie Nmhada Street, Somolu", phone: "+234 123 456 7890" },
    { address: "Olayinka Adewuyi St, Lekki Phase I", phone: "+234 123 456 7890" },
    { address: "Anthony, Ikeja 105102, Lagos", phone: "+234 123 456 7890" }
  ];

  return (
    <div className='hidden' id='contact-us-container'>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
        </div>
        <div className="form-floating">
          <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }} required></textarea>
          <label htmlFor="floatingTextarea2">Message</label>
        </div>
        <br />
        <button style={{ width: '100%' }} type="submit" className="btn btn-dark">Send</button>
      </form>
      <p>You can reach out to us if you have any questions </p>

      <br />

      <h4>OUR LOCATIONS</h4>
      <div id='map-container'>
        <div className="row">
          {addresses.map((addressInfo, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div>
                <div>
                  <MapComponent address={addressInfo.address} />
                  <span id='address'>{addressInfo.address}</span>
                  <br />
                  <span id='number'><FaPhone /> {addressInfo.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <Footer />
    </div>
  );
}

export default Contacts;
