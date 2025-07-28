import React from 'react'
import Hero from '../components/About/Hero'
import WorkExperience from '../components/About/WorkExperience'
import Process from '../components/About/Process'
import ProcessCard from '../components/About/ProcessCard'

export const metadata = {
  title: "ABOUT",
  description: "Learn about my journey as a Visual Communication Designer, educator, and PhD scholar. Discover my creative process, work experience, and professional certifications.",
};

const page = () => {

  

  return (
    <div>
        <Hero />
        <Process    />
        <WorkExperience />
        
    </div>
  )
}

export default page