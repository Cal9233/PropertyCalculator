import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const MoreFilter = ({ data, setData }) => {
  const [formData, setFormData] = useState({
    homeOwnerInsurance: 0,
    pmi: 0,
    hoaFees: 0,
    propertyTax: 0,
    utilities: 0,
    inspectionCosts: 0,
    attorneyCharges: 0,
    appraisalFees: 0,
  });
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { ...data, ...formData };
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
              type="number"
              label="Property tax per month"
              name="propertyTax"
              value={formData.propertyTax}
              onChange={handleChange}
              fullWidth
              margin="dense"
            />
            <TextField
              type="number"
              label="Homeowner's insurance per month"
              name="homeOwnerInsurance"
              value={formData.homeOwnerInsurance}
              onChange={handleChange}
              fullWidth
              margin="dense"
            />
            <TextField
              type="number"
              label="PMI per month"
              name="pmi"
              value={formData.pmi}
              onChange={handleChange}
              fullWidth
              margin="dense"
            />
            <TextField
              type="number"
              label="HOA fees per month"
              name="hoaFees"
              value={formData.hoaFees}
              onChange={handleChange}
              fullWidth
              margin="dense"
            />
            <TextField
              type="number"
              label="Utilities"
              name="utilities"
              value={formData.utilities}
              onChange={handleChange}
              fullWidth
              margin="dense"
            />
            <TextField
              type="number"
              label="Inspection costs"
              name="inspectionCosts"
              value={formData.inspectionCosts}
              onChange={handleChange}
              fullWidth
              margin="dense"
            />
            <TextField
              type="number"
              label="Attorney Charges"
              name="attorneyCharges"
              value={formData.attorneyCharges}
              onChange={handleChange}
              fullWidth
              margin="dense"
            />
            <TextField
              type="number"
              label="Appraisal Fees"
              name="appraisalFees"
              value={formData.appraisalFees}
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
