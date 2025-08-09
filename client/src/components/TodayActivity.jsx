import React from 'react';
import SolutionContact from './SolutionContact';
import activity1 from '../assets/activity-1.jpg';
import activity2 from '../assets/activity-2.jpg';
import activity3 from '../assets/activity-3.jpg';
import activity4 from '../assets/activity-4.jpg';

const TodayActivity = () => {
  return (
    <>
<div className="max-w-[900px]  mx-auto mb-20 text-center">
  {/* Sub Title with lines */}
  <div className="relative inline-block uppercase text-[coral] mt-8">
    {/* Left Line */}
    <span className="absolute top-1/2 right-full transform -translate-y-1/2 mr-4 w-[100px] border-t border-[coral]"></span>
    
    {/* Text */}
    <h4 className="inline-block px-4 font-semibold text-lg">Today Activity</h4>
    
    {/* Right Line */}
    <span className="absolute top-1/2 left-full transform -translate-y-1/2 ml-4 w-[50px] border-t border-[coral]"></span>
  </div>

  
  </div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-8 ">
  {/* Box 1 */}
  <div className="rounded shadow-md flex flex-col h-full bg-white animate-fadeInUp hover:bg-teal-800 transition-opacity " style={{ animationDelay: '0.3s', animationName: 'fadeInUp', visibility: 'visible' }}>
    <div className="rounded-t overflow-hidden h-[250px]">
      <img src={activity1} alt="Image" className="w-full h-full object-cover" />
    </div>
    <div className="rounded-b bg-white p-2 flex flex-col">
      <div className="overflow-y-scroll px-1 h-[250px]">
        <p className="mb-1 text-sm text-gray-600">Jul 1 2025 11:18PM</p>
        <p className="mb-2 font-bold text-justify text-base">
          मंदिर निर्माण हेतु 882.87 करोड़ की राशि कैबिनेट से स्वीकृत
        </p>
        <p className="mb-2 text-justify text-sm text-gray-800">
          पुनौराधाम में माँ जानकी का भव्य मंदिर मिथिला के गौरव का प्रतीक बनेगा,
          मेरा सौभाग्य है कि मैं इस ऐतिहासिक निर्णय का हिस्सा बना: संजय सरावगी
        </p>
      </div>
    </div>
  </div>

  {/* Box 2 */}
  <div className="rounded shadow-md flex flex-col h-full bg-white animate-fadeInUp hover:bg-teal-800 transition-opacity" style={{ animationDelay: '0.3s', animationName: 'fadeInUp', visibility: 'visible' }}>
    <div className="rounded-t overflow-hidden h-[250px]">
      <img src={activity2} alt="Image" className="w-full h-full object-cover" />
    </div>
    <div className="rounded-b bg-white p-2 flex flex-col">
      <div className="overflow-y-scroll px-1 h-[250px]">
        <p className="mb-1 text-sm text-gray-600">Jul 2 2025 10:00AM</p>
        <p className="mb-2 font-bold text-justify text-base">
          शिक्षा नीति पर संजय सरावगी की अहम घोषणा
        </p>
        <p className="mb-2 text-justify text-sm text-gray-800">
          नई शिक्षा नीति के तहत मिथिला क्षेत्र के विद्यार्थियों को मिलेगा अधिक लाभ,
          संजय सरावगी ने जताई प्रसन्नता।
        </p>
      </div>
    </div>
  </div>

  {/* Box 3 */}
  <div className="rounded shadow-md flex flex-col h-full bg-white animate-fadeInUp hover:bg-teal-800 transition-opacity" style={{ animationDelay: '0.3s', animationName: 'fadeInUp', visibility: 'visible' }}>
    <div className="rounded-t overflow-hidden h-[250px]">
      <img src={activity3} alt="Image" className="w-full h-full object-cover" />
    </div>
    <div className="rounded-b bg-white p-2 flex flex-col">
      <div className="overflow-y-scroll px-1 h-[250px]">
        <p className="mb-1 text-sm text-gray-600">Jul 3 2025 05:30PM</p>
        <p className="mb-2 font-bold text-justify text-base">
          जल जीवन हरियाली अभियान को नई गति
        </p>
        <p className="mb-2 text-justify text-sm text-gray-800">
          मिथिला क्षेत्र में पेड़-पौधों और जल संरक्षण के लिए सरावगी जी की नई पहल,
          जनता में जागरूकता फैलाई।
        </p>
      </div>
    </div>
  </div>

  {/* Box 4 */}
  <div className="rounded shadow-md flex flex-col h-full bg-white animate-fadeInUp hover:bg-teal-800 transition-opacity" style={{ animationDelay: '0.3s', animationName: 'fadeInUp', visibility: 'visible' }}>
    <div className="rounded-t overflow-hidden h-[250px]">
      <img src={activity4} alt="Image" className="w-full h-full object-cover" />
    </div>
    <div className="rounded-b bg-gray-100 p-2 flex flex-col">
      <div className="overflow-y-scroll px-1 h-[250px]">
        <p className="mb-1 text-sm text-gray-600">Jul 4 2025 09:45AM</p>
        <p className="mb-2 font-bold text-justify text-base">
          स्वास्थ्य अभियान के अंतर्गत मुफ्त जांच शिविर
        </p>
        <p className="mb-2 text-justify text-sm text-gray-800">
          दरभंगा में मुफ्त जांच और दवाइयों का वितरण, लोगों ने सरावगी जी की पहल की सराहना की।
        </p>
      </div>
      
    </div>
     
  </div>

</div>
<div className="pt-6 flex justify-center mb-12">
  <a
    href="#"
    className="bg-[#fd7e14] hover:bg-blue-700 text-white py-3 px-5 rounded-full transition duration-300"
  >
    View Activity
  </a>
</div>

<SolutionContact/>
    </>
  )
}

export default TodayActivity;
