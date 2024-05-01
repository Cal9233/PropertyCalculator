import React from "react";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Calculations from "./pages/Calculations";

import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/calculate" element={<Calculations />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
