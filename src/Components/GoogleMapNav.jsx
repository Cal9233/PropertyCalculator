import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Container } from "@mui/system";

const GoogleMapNav = ({ handleOpenModal, properties, google }) => {
  const [mapCenter, setMapCenter] = useState(null); // State for map center
  const [loading, setLoading] = useState(true); // Loading state
  const [key, setKey] = useState(0); // Add key state

  useEffect(() => {
    if (properties.length > 0) {
      // Calculate average latitude and longitude
      const totalLat = properties.reduce((acc, property) => acc + property.latitude, 0);
      const totalLng = properties.reduce((acc, property) => acc + property.longitude, 0);
      const avgLat = totalLat / properties.length;
      const avgLng = totalLng / properties.length;
  
      setMapCenter({ lat: avgLat, lng: avgLng });
    } else {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setMapCenter({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            });
          },
          (error) => {
            console.error('Error getting user location:', error);
          }
        );
      } else {
        // Set a default location if geolocation is not available
        setMapCenter({ lat: 0, lng: 0 }); // You can adjust this to your desired default location
      }
    }
  
    setLoading(false); // Move setLoading here
    setKey(prevKey => prevKey + 1); // Increment key to force rerender
  }, [properties]);

  const mapStyles = {
    width: '100%',
    height: '100%'
  };

  if (loading) {
    return <div>Loading...</div>;
  }


  return mapCenter ? (
      <Map
        google={google}
        zoom={12}
        initialCenter={mapCenter} 
        key={key} // Add key prop
        containerStyle={{ position: 'relative', width: '100%', height: '80vh' }} // Adjust height as needed
      >
        {properties.map((property, i) => (
          <Marker
            key={i}
            position={{ lat: property.latitude, lng: property.longitude }}
            onClick={() => handleOpenModal(property)}
          />
        ))}
      </Map>
  ) : null;
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(GoogleMapNav);