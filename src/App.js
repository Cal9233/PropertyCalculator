import React from "react";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Calculations from "./pages/Calculations";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Box sx={{ padding: "10px" }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/calculate" element={<Calculations />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;

//If you make any changes and save while you are on the /calculate page you will get a 
//Maximum call stack size exceeded
//RangeError: Maximum call stack size exceeded


//In SliderSelect component the bank limit is set to home value, if I were to lower home value it would also lower the bank limit for some reason. 
//For example if Home Limit is 200,000 and I lower the value it updates data.homeValue to the new value, only fix for this is to probably set a hard number

//Using the sliders is so slow, might be due to huge number amount, how can we make this faster?

//I want to be able to have the Results pie chart be updated with values from MoreFilter (The bottom button saying "Taxes, etc etc") if they exist to show new monthly payments.
//And Im pretty sure monthy payments is in correct considering it says Monthly Payment: $ 2109426496727.55 which is worth more than the house, need to check and see what is wrong with calculations