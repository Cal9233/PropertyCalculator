// Search.js
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const Search = ({ handleOpenModal }) => { // Pass handleOpenModal function as prop
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    axios.get('https://zillow56.p.rapidapi.com/search', {
      headers: {
        'X-RapidAPI-Key': `${process.env.REACT_APP_RAPID_API_KEY}`,
        'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
      },
      params: {
        searchTerm: value // Pass the search term to the Zillow API
      }
    })
      .then(response => {
        const results = response.data.results; // Assuming the response data has a 'results' property containing the properties
        handleOpenModal(results); // Call handleOpenModal with the search results
      })
      .catch(error => {
        console.error('Error fetching data from Zillow API:', error);
      });
  };

  const handleChange = (value) => {
    setInput(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      fetchData(input);
    }
  };

  return (
    <div className="input-wrapper">
      <SearchIcon id="search-icon" />
      <input
        placeholder="Neighborhood, City, Zip, or Address..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={handleKeyDown} // Call handleKeyDown on key press
      />
    </div>
  );
};

export default Search;