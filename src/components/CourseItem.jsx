import React from 'react';

const CourseItem = ({img, name, details}) => {
  return (
    <div className='flex gap-5 items-center'>
        <img src={img} alt=""  className='w-[200px] h-[150px] object-cover'/>
        <div>
            <h4 className='text-[24px] font-semibold text-blue-950'>Name: {name}</h4>
            <p className="text-[18px] font-normal text-gray-600 mt-3">Topic: {details}</p>
        </div>
    </div>
  )
}

export default CourseItem