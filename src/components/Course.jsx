import React from 'react'
import CourseItem from './CourseItem';
import courseImg from '../assets/images/second.jpg'

const Course = () => {
  return (
    <div>
        <h2 className='text-[28px] font-bold mb-5'>Course</h2>
        <CourseItem img={courseImg} name="React.js development." details="React.js basic to advance with 3 projects."/>
    </div>
  )
}

export default Course