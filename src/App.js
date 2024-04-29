import React from "react";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Calculator from "./Components/Calculator";
import './App.css';

import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/calculate" element={<Calculator />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
