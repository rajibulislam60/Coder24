import React from "react";
import B_Item from "../B_Item";
import { FaLaptopCode, FaGraduationCap } from "react-icons/fa6";

const Bannar = () => {
  return (
    <div className="bg-bannarImage">
      <div className="container">
        <div className="text-center mt-6">
          <h2 className="text-[34px] font-semibold leading-8 text-blue-950">
            Welcome To Coder24
          </h2>
          <h3 className="text-[18px] font-normal text-gray-600 mt-3">
            This is Web and Software competition and learn Accademy.
          </h3>
        </div>
        <div className="flex justify-around mt-[100px]">
          <B_Item
            Icon={FaLaptopCode}
            name="Competition"
            details="There are various events and competitions that make students better and
        more perfect."
          />
          <B_Item
            Icon={FaGraduationCap}
            name="Course"
            details="These course can be joined by students
        from anywhere."
          />
        </div>
      </div>
    </div>
  );
};

export default Bannar;
