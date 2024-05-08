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
