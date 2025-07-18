import React from 'react'
import Hero from '../components/About/Hero'
import WorkExperience from '../components/About/WorkExperience'
import Process from '../components/About/Process'
import ProcessCard from '../components/About/ProcessCard'

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