import { useState } from "react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"; // or use any icon lib you prefer
import DailyCampaign from "./DailyCampaign";
import banner1 from '../assets/banner-1.jpg';
import banner2 from '../assets/banner-2.jpg';
import banner3 from '../assets/banner-3.jpg';
const banners = [
  {
    img: "../src/assets/banner-1.jpg " || banner1,
    title: "Sanjay Sarogi",
    subtitle: "Minister for Revenue and Land Reforms of Government of Bihar",
  },
  {
    img: "../src/assets/banner-2.jpg" || banner2,
    title: "Sanjay Sarogi",
    subtitle: "Minister for Revenue and Land Reforms of Government of Bihar.",
  },
  {
    img: "../src/assets/banner-3.jpg" || banner3,
    title: "Sanjay Sarogi",
    subtitle: "Minister for Revenue and Land Reforms of Government of Bihar.",
  },
];

 function Banner() {
  const [current, setCurrent] = useState(0);
  const length = banners.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  return (
   <>
     <div className="w-full h-[500px] relative overflow-hidden">
      {/* Banner Image */}
      <img
        src={banners[current].img}
        alt={`Banner ${current + 1}`}
        className="w-full h-full object-cover"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          {banners[current].title}
        </h1>
        <p className="text-white text-base md:text-lg">
          {banners[current].subtitle}
        </p>
      </div>

    

    {/* Left Arrow - Previous */}
<button
  onClick={prevSlide}
  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white rounded-full p-3 shadow-lg hover:bg-orange-600 transition duration-300"
>
  <ArrowLeft size={24} />
</button>

{/* Right Arrow - Next */}
<button
  onClick={nextSlide}
  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white rounded-full p-3 shadow-lg hover:bg-orange-600 transition duration-300"
>
  <ArrowRight size={24} />
</button>
    </div>
    <DailyCampaign/>
   </>
  );
}

export default Banner