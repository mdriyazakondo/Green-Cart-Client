import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-12 lg:px-24 xl:px-32">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
