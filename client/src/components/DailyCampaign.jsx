import React from 'react'
import TodayActivity from './TodayActivity'

const DailyCampaign = () => {
  return (
    <>
<div className="max-w-[900px] text-center mx-auto mb-20">
  {/* Sub Title with lines */}
  <div className="relative inline-block uppercase text-[coral] mt-8">
    {/* Left Line */}
    <span className="absolute top-1/2 right-full transform -translate-y-1/2 mr-4 w-[100px] border-t border-[coral]"></span>
    
    {/* Text */}
    <h4 className="inline-block px-4 font-semibold text-lg">Daily Campaign</h4>
    
    {/* Right Line */}
    <span className="absolute top-1/2 left-full transform -translate-y-1/2 ml-4 w-[50px] border-t border-[coral]"></span>
  </div>

  {/* Main Heading */}
  <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-8">Our Daily Updates.</h1>

  {/* Paragraph */}
  <p className="text-gray-600 max-w-3xl mx-auto mt-8">
    Check out daily schedule activity and campaign in just one click and be updated about Sri Sanjay Saraogi ji. 
    See Images, Watch daily Message and ask Questions with Netaji in the <strong>Live Chat</strong> section.
  </p>
</div>

  <TodayActivity/>  
    </>
  )
}

export default DailyCampaign
