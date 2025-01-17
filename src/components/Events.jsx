import React from 'react'
import CourseItem from './CourseItem';
import courseImg from '../assets/images/third.jpg'

const Events = () => {
  return (
    <div>
        <h2 className='text-[28px] font-bold mb-5'>Upcoming Hackathon</h2>
        <CourseItem img={courseImg} name="Front-End Development" details="5 step to win the events."/>
    </div>
  )
}

export default Events