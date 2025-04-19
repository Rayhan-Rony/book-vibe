import React from "react";
import bannerImage from "../../assets/bannerImage.png";
import bannerImage2 from "../../assets/images.jpeg";
import bannerImage3 from "../../assets/i3.png";

const Banner = () => {
  return (
    <div className="flex items-center justify-between  p-30 gap-20 bg-[#1313130d] rounded-3xl">
      <div className="banner-item space-y-12 ">
        <h1 className="playfair text-6xl font-semibold leading-20">
          Books to freshen up <br /> your bookshelf
        </h1>

        <button className="work py-5 px-7 text-xl text-white bg-[#43ff64d9] font-semibold rounded-lg cursor-pointer">
          View The List
        </button>
      </div>
      <div className="banner-item flex items-center justify-center gap-20 ">
        <img src={bannerImage} />
        <img src={bannerImage2} />
        <img src={bannerImage3} />
      </div>
    </div>
  );
};

export default Banner;
