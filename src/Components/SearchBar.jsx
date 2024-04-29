import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';

const SearchBar = () => {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [address, setAddress] = useState('');

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleZipChange = (event) => {
    setZip(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div className="search-bar-container">
      <div className="input-wrapper">
        <SearchIcon id="search-icon" />
        <TextField
          placeholder="State, City, Zip, or Address..."
          value={address}
          onChange={handleAddressChange}
        />
      </div>

      <div className="filter-dropdowns">
        <FormControl variant="outlined" className="filter-dropdown">
          <InputLabel id="state-label">State</InputLabel>
          <Select
            labelId="state-label"
            id="state-select"
            value={state}
            onChange={handleStateChange}
            label="State"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {/* Add menu items for states */}
          </Select>
        </FormControl>

        <FormControl variant="outlined" className="filter-dropdown">
          <InputLabel id="city-label">City</InputLabel>
          <Select
            labelId="city-label"
            id="city-select"
            value={city}
            onChange={handleCityChange}
            label="City"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {/* Add menu items for cities */}
          </Select>
        </FormControl>

        <FormControl variant="outlined" className="filter-dropdown">
          <InputLabel id="zip-label">Zip</InputLabel>
          <Select
            labelId="zip-label"
            id="zip-select"
            value={zip}
            onChange={handleZipChange}
            label="Zip"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {/* Add menu items for zip codes */}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default SearchBar;
