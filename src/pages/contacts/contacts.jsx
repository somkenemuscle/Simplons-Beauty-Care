import React, { useState, useEffect } from 'react';
import '../../styles/contacts.css';

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
    <div id={`map-${address}`} style={{ width: '100%', height: '250px' }}></div>
  );
}

function Contacts() {
  // Hardcoded addresses
  const addresses = [
    { address: "31, Popoola Street, Somolu, Lagos", phone: "+234 123 456 7890" },
    { address: "Anambra State", phone: "+234 123 456 7890" },
    { address: "Benue State", phone: "+234 123 456 7890" },
    { address: "Ogun State", phone: "+234 123 456 7890" }
  ];

  return (
    <div className="container">
      <div className="row">
        {addresses.map((addressInfo, index) => (
          <div className="col-md-6" key={index}>
            <div className="card" style={{ width: '50%' }}>
              <div className="card-body">
                <MapComponent address={addressInfo.address} />
                <p className="card-text">{addressInfo.address}</p>
                <br />
                <p className="card-text">Phone: {addressInfo.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contacts;
