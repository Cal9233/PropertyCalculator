import React, { useState } from "react";
import GoogleMapNav from "../Components/GoogleMapNav";
import Modal from "react-responsive-modal";
import Search from "../Components/Search";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  // const [modal, setModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [properties, setProperties] = useState([]);
  const [locationData, setLocationData] = useState(null);
  const history = useNavigate(); 

  const handleSearchModal = (property) => {
    setProperties(property);
    setSelectedProperty(null);
    // setModal(true);
  };
  const handleOpenModal = (property) => {
    setSelectedProperty(property);
    // setModal(true);
  };

  const handleSelectedProperty = (property) => {
    console.log("Selected property:", property);
    setSelectedProperty(property);
  };

  const handleCalculateClick = () => {
    console.log("Selected property before navigation:", selectedProperty);
    history('/calculate', { state: { selectedProperty } });
  }

  return (
    <Container maxWidth="xl">
      <Grid container spacing={0} alignItems="center">
        <Grid item xs={12} sx={{ marginTop: 2, marginBottom: 2 }}>
          <Search
            handleSearchModal={handleSearchModal}
            setProperties={setProperties}
            setLocationData={setLocationData}
          />
        </Grid>
        <Grid container spacing={1} alignItems="flex-start">
          <Grid item xs={7}>
            <GoogleMapNav
              properties={properties}
              handleOpenModal={handleOpenModal}
              handleSelectedProperty={handleSelectedProperty}
              mapCenter={locationData ? locationData.coords : null}
            />
          </Grid>
          <Grid item xs={5}>
            {selectedProperty ? (
                      <Grid item md={6}>
                      <Card sx={{ maxWidth: 300 }}>
                        <CardMedia
                          component="img"
                          height="140"
                          image={selectedProperty.imgSrc}
                          alt="img"
                        />
                        <CardContent sx={{ height: 120 }}>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                          >
                            {`Price: $${selectedProperty.price}`}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {selectedProperty.streetAddress}, {selectedProperty.state},{" "}
                            {selectedProperty.zipcode}
                          </Typography>
                          <Button variant="outlined" onClick={handleCalculateClick}>Calculate</Button>
                        </CardContent>
                      </Card>
                    </Grid>
            ) : (
              <div className="properties">
                <Grid container columnSpacing={1} rowSpacing={1}>
                  {(properties || []).map((property, index) => {
                    return (
                      <Grid item md={6} key={index}>
                        <Card sx={{ maxWidth: 300 }}>
                          <CardMedia
                            component="img"
                            height="140"
                            image={property.imgSrc}
                            alt="img"
                          />
                          <CardContent sx={{ height: 120 }}>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {`Price: $${property.price}`}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {property.streetAddress}, {property.state},{" "}
                              {property.zipcode}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>
              </div>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
