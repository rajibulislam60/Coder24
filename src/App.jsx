import React from "react";
import Navbar from "./components/Navbar";
import Bannar from "./components/Bannar";
import Details from "./components/Details";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Bannar />
      <Details />
      <Footer />
    </div>
  );
};

export default App;
