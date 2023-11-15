

import React from 'react'
import AboutCard from '../components/about/AboutCard'
import AWrapper from '../components/about/AWrapper'
import Newsletter from '../components/newsletter/Newsletter'
import Programs from '../components/programs/Programs'
import Reasons from '../components/reasons/Reasons'
// import Header from '../components/Header'




const Index = () => {
  return (
    <div className='container-fluid'>
      {/* <Header /> */}
      <AboutCard /> 
      <Programs /> 
      <Reasons />
      <AWrapper /> 
      <Newsletter />
    </div>
  )
}

export default Index
