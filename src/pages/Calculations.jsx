import React from 'react';
import Calculator from '../Components/Calculator';
import { useLocation } from 'react-router-dom';

const Calculations = () => {
    const location = useLocation();
    const selectedProperty = location.state?.selectedProperty || null;
    return (
        <>
            <div>
                <Calculator selectedProperty={selectedProperty} />
            </div>
        </>
    )
}

export default Calculations