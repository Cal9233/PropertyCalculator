import React from "react";
import Navbar from "./Components/Navbar";
import Calculations from "./pages/Calculations";
import Home from "./pages/Home";

import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProvider } from "./Context/AppProvider";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar />
        <Box sx={{ padding: "10px" }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/calculate" element={<Calculations />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;

//if else statements for property tax and homeowner insurance tax dynamically add keys to doughnut, but if you remove them and readd them they wont come back