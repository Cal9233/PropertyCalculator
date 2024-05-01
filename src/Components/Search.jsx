import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import Data from "../Components/Common/Data";

const Search = ({ handleSearchModal, setProperties, setLocationData }) => {
  const [input, setInput] = useState("");

  const fetchData = async (value) => {
    try {
      const options = {
        method: "GET",
        url: "https://zillow56.p.rapidapi.com/search",
        params: {
          location: value,
        },
        headers: {
          "X-RapidAPI-Key": `${process.env.REACT_APP_RAPID_API_KEY}`,
          "X-RapidAPI-Host": "zillow56.p.rapidapi.com",
        },
      };
      const response = Data;
      //const response = await axios.request(options); // Assuming the response data has a 'results' property containing the properties
      console.log("Response is:", response);
      setProperties(response);
      setLocationData(response);
      //handleOpenModal(response.data.results); // Call handleOpenModal with the search results
      // handleOpenModal(response)
      handleSearchModal(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (value) => {
    setInput(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
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
