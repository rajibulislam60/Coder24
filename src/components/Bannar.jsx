import React from "react";

const Bannar = () => {

  let handleRegistration = () =>{
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSf6kVm0b8lLXfOzzYeGUdrucJa9hjwZ57IXEv_FYnYNnjMrJA/viewform?usp=header";
  }
  return (
    <div className="bg-bannarImage bg-cover bg-center">
      <div className="container text-center py-[180px]">
        <h1 className="text-[44px] font-bold text-white">Upcoming Hackathon</h1>
        <button onClick={handleRegistration} className="bg-white text-[24px] font-medium leading-7 rounded-md mt-6 px-6 py-2">Registration</button>
      </div>
    </div>
  );
};

export default Bannar;
