import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import axios from 'axios';

const GoogleMapNav = (props) => {  
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    // Fetch data from Zillow API
    axios.get(`ZILLOW_API_URL_HERE?key=YOUR_ZILLOW_API_KEY`)
      .then(response => {
        setProperties(response.data.properties); // Assuming the response data is an array of properties
      })
      .catch(error => {
        console.error('Error fetching data from Zillow API:', error);
      });
  }, []);

  const mapStyles = {
    width: '100%',
    height: '100%'
  };

  return (
    <Map
      google={props.google}
      zoom={12}
      style={mapStyles}
      initialCenter={{ lat: 37.7749, lng: -122.4194 }} // Default center for the map
    >
      {/* Display markers for each property */}
      {properties.map(property => (
        <Marker
          key={property.id}
          position={{ lat: property.latitude, lng: property.longitude }}
          onClick={() => setSelectedProperty(property)}
        />
      ))}

      {/* Display info window when a marker is clicked */}
      {selectedProperty && (
        <InfoWindow
          position={{ lat: selectedProperty.latitude, lng: selectedProperty.longitude }}
          onClose={() => setSelectedProperty(null)}
        >
          <div>
            <h2>{selectedProperty.address}</h2>
            <p>Price: ${selectedProperty.price}</p>
          </div>
        </InfoWindow>
      )}
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(GoogleMapNav);
