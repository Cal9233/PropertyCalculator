import React, { useState } from 'react';
import GoogleMapNav from '../Components/GoogleMapNav';
import Modal from 'react-responsive-modal';
import Search from '../Components/Search';
import { Container } from "@mui/system";
import { Grid } from "@mui/material";

const Home = () => {
  const [modal, setModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [properties, setProperties] = useState([]);
  const [locationData, setLocationData] = useState(null);

  const handleOpenModal = (property) => {
    setSelectedProperty(property);
    setModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);
    setModal(false);
  };

  const handleSelectedProperty = (property) => {
    setSelectedProperty(property);
    setModal(true); 
  };

  return (
    <Container maxWidth="xl">
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sx={{ marginTop: 4 }}>
        <Search
          handleOpenModal={handleOpenModal}
          setProperties={setProperties}
          setLocationData={setLocationData}
        />
      </Grid>

      <Grid container spacing={2} alignItems="flex-start">
        <Grid item xs={selectedProperty ? 8 : 12}>
          <GoogleMapNav
            properties={properties}
            handleOpenModal={handleOpenModal}
            handleSelectedProperty={handleSelectedProperty}
            mapCenter={locationData ? locationData.coords : null}
          />
        </Grid>

        {selectedProperty && (
          <Grid item xs={4}>
            <Modal open={modal} onClose={handleCloseModal} styles={{ modal: { right: 0 } }} center>
              <div className="modal-content">
                <div className="flex">
                  <div className="w-full">
                    <img src={selectedProperty.imgSrc} style={{ width: '100px', height: '100px' }} alt="img" />
                  </div>
                  <div className="w-full ml-3">
                    <h1>{`Price: $${selectedProperty.price}`}</h1>
                    <h2>{`${selectedProperty.streetAddress}, ${selectedProperty.state}, ${selectedProperty.zipcode}`}</h2>
                  </div>
                </div>
              </div>
            </Modal>
          </Grid>
        )}
      </Grid>
    </Grid>
  </Container>
  );
};

export default Home;