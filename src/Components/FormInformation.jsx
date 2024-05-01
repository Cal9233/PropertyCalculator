import React, {useState} from 'react';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const FormInformation = () => {
    const [formData, setFormData] = useState({
        utilities: '',
        inspectionFee: '',
        attornyFee: '',
        appraisalFee: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, for example, send data to a backend
        console.log(formData);
      };
    
      return (
        <Container maxWidth="sm">
          <Typography variant="h4" align="center" gutterBottom>
            Income Information
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Utilites"
              name="utilities"
              value={formData.utilities}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Inspection costs"
              name="inspection"
              value={formData.inspectionFee}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Attorny Charges"
              name="attornyFee"
              value={formData.attornyFee}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Appraisal Fees"
              name="appraisalFee"
              value={formData.appraisalFee}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />            
            <TextField
                label="Appraisal Fees"
                name="appraisalFee"
                value={formData.appraisalFee}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Submit
            </Button>
          </form>
        </Container>
      );
}

export default FormInformation