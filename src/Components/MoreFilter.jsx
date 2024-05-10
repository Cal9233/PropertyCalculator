import React, { useState } from 'react';
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const MoreFilter = ({ data, setData }) => {
    const [formData, setFormData] = useState({
        homeOwnerInsurance: '',
        pmi: '',
        hoa: '',
        propertyTax: '',
        utilities: '',
        inspectionFee: '',
        attorneyFee: '',
        appraisalFee: ''
    });
    const [open, setOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Merge the new form data with the existing data object
        const newData = { ...data, ...formData };
        console.log(newData);
        setData(newData);
    };

    const toggleOpen = () => {
        setOpen(!open);
    };
  
    return (
        <FormControl fullWidth>
            <Button
                variant="outlined"
                onClick={toggleOpen}
                endIcon={open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            >
                Taxes, insurance, HOA fees...
            </Button>
            {open && (
                <Container maxWidth="sm">
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Property tax per month"
                            name="propertyTax"
                            value={formData.propertyTax}
                            onChange={handleChange}
                            fullWidth
                            margin="dense"
                        />
                        <TextField
                            label="Homeowner's insurance per month"
                            name="homeOwnerInsurance"
                            value={formData.homeOwnerInsurance}
                            onChange={handleChange}
                            fullWidth
                            margin="dense"
                        />
                        <TextField
                            label="PMI per month"
                            name="pmi"
                            value={formData.pmi}
                            onChange={handleChange}
                            fullWidth
                            margin="dense"
                        />
                        <TextField
                            label="HOA fees per month"
                            name="hoa"
                            value={formData.hoa}
                            onChange={handleChange}
                            fullWidth
                            margin="dense"
                        />
                        <TextField
                            label="Utilities"
                            name="utilities"
                            value={formData.utilities}
                            onChange={handleChange}
                            fullWidth
                            margin="dense"
                        />
                        <TextField
                            label="Inspection costs"
                            name="inspection"
                            value={formData.inspectionFee}
                            onChange={handleChange}
                            fullWidth
                            margin="dense"
                        />
                        <TextField
                            label="Attorney Charges"
                            name="attorneyFee"
                            value={formData.attorneyFee}
                            onChange={handleChange}
                            fullWidth
                            margin="dense"
                        />
                        <TextField
                            label="Appraisal Fees"
                            name="appraisalFee"
                            value={formData.appraisalFee}
                            onChange={handleChange}
                            fullWidth
                            margin="dense"
                        />            
                        <Button variant="contained" color="primary" type="submit" fullWidth>
                            Update
                        </Button>
                    </form>
                </Container>
            )}
        </FormControl>
    );
};
  
export default MoreFilter;