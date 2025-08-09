import React from 'react';

const FormContact = () => {
  return (
 <div className="bg-[#efa2864d] p-10 max-w-4xl mx-auto my-10 rounded-lg shadow-lg">
  <p className="text-orange-600 font-semibold mb-2 text-lg uppercase">Get in Touch</p>

      <h2 className="text-4xl font-bold text-gray-800 mb-6">Report Your Problem</h2>
      
      <form className="space-y-4">
        
        {/* Full Name */}
        <input
          type="text"
          placeholder="Enter Your Full Name"
          className="w-full p-4 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Mobile Number + File Upload in One Row */}
        <div className="flex flex-row flex-nowrap gap-x-4">
          <input
            type="text"
            placeholder="Enter Your Mobile Number"
            className="p-4 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 w-fit min-w-[200px]"
          />
         <input
            type="file"
            className="w-full px-4 py-2 border border-orange-300 rounded-md file:text-orange-600 file:border-none file:mr-4"
          />
        </div>

        {/* Full Address */}
        <input
          type="text"
          placeholder="Enter Your Full Address"
          className="w-full p-4 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Problem Description */}
        <textarea
          placeholder="Write your problem and attach an image"
        //   rows="4"
          className="w-full p-4 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 bg-orange-400 text-white font-semibold rounded-md hover:bg-orange-500 transition duration-300"
        >
          SUBMIT NOW
        </button>
      </form>
    </div>
  );
};

export default FormContact;


