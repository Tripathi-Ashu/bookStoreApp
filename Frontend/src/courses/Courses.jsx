import React from 'react'
import Navebar from '../components/Navebar'
import Footer from '../components/Footer'
import Course from '../components/Course'


export default function Courses() {
 
  return (
   <>
   <Navebar></Navebar>
   <div className=" min-h-screen">
        <Course />
      </div>
   <Footer></Footer>
   </>
  )
}

