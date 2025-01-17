import React from "react";
import Navbar from "./components/Navbar";
import Bannar from "./components/Bannar";
import Details from "./components/Details";
import Footer from "./components/Footer";
import BannarFooter from "./components/BannarFooter";

const App = () => {
  return (
    <div>
      <Navbar />
      <Bannar />
      <BannarFooter/>
      <Details />
      <Footer />
    </div>
  );
};

export default App;
