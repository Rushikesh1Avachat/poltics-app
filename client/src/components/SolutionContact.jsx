import React, { useState } from "react";
import { Check } from "lucide-react";
import FormContact from "./FormContact";
import sanjayImage from '../assets/sanjaysaraogi.jpg';

const SolutionContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="w-full bg-[#f8f9fa] py-32">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {/* Text Content */}
            <div className="space-y-6 animate-fade-in-left col-span-1">
              <h4 className="uppercase text-orange-500 font-semibold">
                Solutions To Your Needs
              </h4>
              <h1 className="text-4xl md:text-5xl font-bold">
                Working Hard With Best Development Rate
              </h1>
              <p className="text-gray-700">
                A dedicated leader tirelessly serving society, always present
                with the local community, addressing their concerns day and
                night. Known for relentlessly questioning in assembly to ensure
                accountability and progress.
              </p>

              {/* Feature Points */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Check className="text-[#ff7f50] mt-1" />
                  <div>
                    <h2 className="text-lg font-semibold text-black">
                      Assembly Advocacy
                    </h2>
                    <p className="text-sm text-black">
                      Consistently asks critical questions in Assembly,
                      ensuring government transparency and addressing key
                      societal issues.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Check className="text-[#ff7f50] mt-1" />
                  <div>
                    <h2 className="text-lg font-semibold text-black">
                      Community Engagement
                    </h2>
                    <p className="text-sm text-black">
                      Actively available to the local public, addressing their
                      concerns and providing support around the clock.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <a
                  href="#"
                  className="inline-block bg-[#fd7e14] hover:bg-blue-700 text-white py-3 px-5 rounded-full transition duration-300"
                >
                  More Details
                </a>
              </div>
            </div>

            {/* Video/Image Content */}
            <div className="relative h-64 md:h-96 w-full rounded overflow-hidden shadow-lg col-span-1">
              <img
                src={sanjayImage}
                alt="Sanjay"
                className="object-cover w-full h-full"
              />
              <button
                onClick={() => setIsOpen(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition duration-300"
              >
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600">
                  <span className="block w-0 h-0 border-l-[14px] border-t-[10px] border-b-[10px] border-t-transparent border-b-transparent border-l-white ml-1"></span>
                </div>
              </button>
            </div>

            {/* Contact Form */}
<div className="col-span-1">
    <FormContact />

</div>
          </div>

          {/* Video Modal */}
          {isOpen && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
              <div className="relative w-full max-w-4xl aspect-video">
                <button
                  onClick={closeModal}
                  className="absolute -top-4 -right-4 bg-white text-black rounded-full p-2 shadow-lg z-50"
                >
                  ✕
                </button>
                <iframe
                  src="https://www.youtube.com/embed/se0h60Xn1l8"
                  title="Darbhanga के BJP MLA Sanjay Saraogi का Congress पर हमला"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full rounded"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SolutionContact;









