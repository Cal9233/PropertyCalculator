import React from 'react';
import Calculator from '../Components/Calculator';
import FormInformation from '../Components/FormInformation';
import { useLocation } from 'react-router-dom';

const Calculations = () => {
    const location = useLocation();
    const selectedProperty = location.state?.selectedProperty || null;
    return (
        <>
            <div>
                <FormInformation />
            </div>
            <div>
                {/* <Calculator selectedProperty={selectedProperty} /> */}
            </div>
        </>
    )
}

export default Calculations