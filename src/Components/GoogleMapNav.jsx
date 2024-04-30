// GoogleMapNav.js
import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const GoogleMapNav = ({ properties, google }) => {  
  const [selectedProperty, setSelectedProperty] = useState(null);

  const mapStyles = {
    width: '100%',
    height: '100%'
  };

  return (
    <Map
      google={google}
      zoom={12}
      style={mapStyles}
      initialCenter={{ lat: 37.7749, lng: -122.4194 }} // Default center for the map
    >
      {/* Display markers for each property */}
      {properties && properties.map(property => (
        <Marker
          key={property._id} // Assuming _id is the property identifier
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