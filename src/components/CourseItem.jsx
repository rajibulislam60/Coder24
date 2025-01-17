import React from 'react';
import courseImg from '../assets/images/third.jpg'

const CourseItem = () => {
  return (
    <div className='flex gap-5 items-center'>
        <img src={courseImg} alt=""  className='w-[200px]'/>
        <div>
            <h4 className='text-[24px] font-semibold text-blue-950'>Name: React.js development.</h4>
            <p className="text-[18px] font-normal text-gray-600 mt-3">Topic: React.js basic to advance with 3 projects.</p>
        </div>
    </div>
  )
}

export default CourseItem