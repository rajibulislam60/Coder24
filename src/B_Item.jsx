import React from "react";

const B_Item = ({name, details, Icon}) => {
  return (
    <div className="w-[300px] h-[300px] text-center">
      <div>
        
        {Icon && <Icon className="text-[100px] mx-auto px-5 py-5 rounded-full bg-blue-950 text-white" />}
      </div>
      <h3 className="text-[24px] font-semibold text-blue-900 mt-4">{name}</h3>
      <p className="text-[18px] font-normal text-gray-600 mt-3">
        {details}
      </p>
    </div>
  );
};

export default B_Item;
