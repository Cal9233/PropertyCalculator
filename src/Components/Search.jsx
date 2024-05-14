import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
//import Data from "../Components/Common/Data";

const Search = ({ handleSearchModal, setLocationData }) => {
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
      //const response = Data;
      const response = await axios.request(options);
      setLocationData(response);
      handleSearchModal(response.data.results);
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
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Search;
