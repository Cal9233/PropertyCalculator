// Home.js
import React, { useState } from 'react';
import GoogleMapNav from '../Components/GoogleMapNav';
import Modal from 'react-responsive-modal';
import Search from '../Components/Search';

const Home = () => {
    const [modal, setModal] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState(null);

    // Handler to open modal and set selected property data
    const handleOpenModal = (property) => {
        setSelectedProperty(property);
        setModal(true);
    };

    // Handler to close modal
    const handleCloseModal = () => {
        setSelectedProperty(null);
        setModal(false);
    };

    return (
        <div>
            <Search handleOpenModal={handleOpenModal} /> {/* Pass handleOpenModal function to Search component */}
            <div className="flex mb-4">
                <div className="w-1/2 mb-4 ml-2 mr-2 shadow-lg">
                    <div style={{ width: "100%", height: "100vh" }}>
                        <GoogleMapNav
                            handleOpenModal={handleOpenModal} // Pass handler to GoogleMapNav
                        />
                    </div>
                </div>
            </div>

            {selectedProperty && ( // Conditionally render modal if property is selected
                <Modal
                    open={modal}
                    onClose={handleCloseModal}
                >
                    <div className="flex">
                        <div className="w-full">
                            <img src={selectedProperty.imgSrc} style={{ width: '100px', height: '100px' }} alt='img' />
                        </div>
                        <div className="w-full ml-3">
                            <h1>{`Price: $${selectedProperty.price}`}</h1>
                            <p>{`${selectedProperty.streetAddress}, ${selectedProperty.state}, ${selectedProperty.zipcode}`}</p>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default Home;