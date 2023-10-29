import React, { useState } from "react";
import Comp from "./Built/Comp";
import man from "../../assets/man.svg";
import byteProd from "../../assets/byteProd.svg";
import wyteProd from "../../assets/wydeProd.svg";
import medipt from "../../assets/medipt.svg";
import com from "../../assets/com.svg";
import hG from "../../assets/hG.svg";
import tdgm from "../../assets/tdgm.svg";
import ld from "../../assets/ld.svg";
import prun from "../../assets/prun.svg";
import cowry from "../../assets/cowry.svg";
import pic1 from "../../assets/pic1.svg";
import pic2 from "../../assets/pic2.svg";
import pic3 from "../../assets/pic3.svg";
import pic4 from "../../assets/pic4.svg";
import pic5 from "../../assets/pic5.svg";
import pic6 from "../../assets/pic6.svg";
import pic7 from "../../assets/pic7.svg";
import pic8 from "../../assets/pic8.svg";
import pic9 from "../../assets/pic9.svg";
import pic10 from "../../assets/pic10.svg";
import pic11 from "../../assets/pic11.svg";
import pic12 from "../../assets/pic12.svg";
import pic13 from "../../assets/pic13.svg";
import pic14 from "../../assets/pic14.svg";
import pic15 from "../../assets/pic15.svg";
import pic16 from "../../assets/pic16.svg";
import pic17 from "../../assets/pic17.svg";
import pic18 from "../../assets/pic18.svg";

const Main = () => {
  const [showBuilt, setShowBuilt] = useState(true);
  const [product, setProduct] = useState(false);
  const [brand, setBrand] = useState(false);
  const [photo, setPhoto] = useState(false);
  const [resources, setResources] = useState(false);

  const handleShowBuilt = () => {
    setProduct(false);
    setBrand(false);
    setPhoto(false);
    setResources(false);
    setShowBuilt(true);
  };

  const handleProduct = () => {
    setShowBuilt(false);
    setProduct(true);
    setBrand(false);
    setPhoto(false);
    setResources(false);
  };

  const handleBrand = () => {
    setShowBuilt(false);
    setProduct(false);
    setBrand(true);
    setPhoto(false);
    setResources(false);
  };

  const handlePhoto = () => {
    setShowBuilt(false);
    setProduct(false);
    setBrand(false);
    setPhoto(true);
    setResources(false);
  };

  const handleResources = () => {
    setShowBuilt(false);
    setProduct(false);
    setBrand(false);
    setPhoto(false);
    setResources(true);
  };

  return (
    <div>
      <div id="top" className="flex gap-[48px] items-start font-sub">
        <div
          onClick={handleShowBuilt}
          className="font-[600] text-[#BABABA] cursor-pointer text-[20px] "
        >
          {showBuilt ? (
            <div className="text-[#353535] border-b-2">Built(ing)</div>
          ) : (
            <div className="hover:text-[#3F52FF]">Built(ing)</div>
          )}
        </div>
        <div
          onClick={handleProduct}
          className="font-[600] cursor-pointer text-[#BABABA] text-[20px] "
        >
          {product ? (
            <div className="text-[#353535] border-b-2">Product & UX</div>
          ) : (
            <div className="hover:text-[#3F52FF]">Product & UX</div>
          )}
        </div>
        <div
          onClick={handleBrand}
          className="font-[600] cursor-pointer text-[#BABABA] text-[20px] "
        >
          {brand ? (
            <div className="text-[#353535] border-b-2">Brand & Marketing</div>
          ) : (
            <div className="hover:text-[#3F52FF]">Brand & Marketing</div>
          )}
        </div>
        <div
          onClick={handlePhoto}
          className="font-[600] cursor-pointer text-[#BABABA] text-[20px] "
        >
          {photo ? (
            <div className="text-[#353535] border-b-2">Photography</div>
          ) : (
            <div className="hover:text-[#3F52FF]">Photography</div>
          )}
        </div>
        <div
          onClick={handleResources}
          className="font-[600] cursor-pointer text-[#BABABA] text-[20px] "
        >
          {resources ? (
            <div className="text-[#353535] border-b-2">Resources</div>
          ) : (
            <div className="hover:text-[#3F52FF]">Resources</div>
          )}
        </div>
      </div>
      {showBuilt && (
        <div className="grid grid-cols-2 gap-[20px] mb-20 mt-5">
          <Comp
            icon={man}
            subOne="Industry"
            color={'1'}
            colorFoot={'1'}
            subTwo="Agency"
            subThree="Design"
            buttonText="Visit our studio"
            text="Studio Nix"
            myText="In stealth, I started Studio Nix with David in 
            the year 2019 and successfully worked on a couple of clients’ projects with the intention of launching publicly within a year. We did not. Maybe it is fair to say we failed before we started but we picked up lessons that have accelerated our growth individually and communally."
            // sub="my news is now global"
            subText="Unlocking the possibilities of modern healthcare "

          />
          <Comp
            icon={hG}
            subOne="Industry"
            color={'2'}
            colorFoot={'2'}
            subTwo="Health"
            subThree="Nonprofit"
            buttonText="Visit our website"
            text="HealthGap"
            myText="In Africa, the healthcare industry is under-supported. We witnessed this in our early years of building Medipt and we have set out to solve our very own problem for founders. HealthGap was founded to bridge a major gap in the health tech ecosystem, providing insights and support for founders solving Africa’s health problems."
            // sub="my news is now global and now is here"
            subText="Unlocking the possibilities of modern healthcare "
          />
          <Comp
            icon={tdgm}
            subOne="Industry"
            subTwo="Design"
            color={'3'}
            colorFoot={'3'}
            subThree="Media"
            subFour="Growth"
            buttonText="Read my thoughts"
            text="TDGM Perusal"
            myText="I research and give concrete analysis of the past, present, and future of Technology, Design, Growth, Marketing and Media at 
            TDGM Perusal"
            // sub="my news is now global and now is here"
            subText="Concrete analysis of the past, present, and future of Design, Growth, Marketing and Media"
          />
          <Comp
            icon={ld}
            subOne="Industry"
            color={'4'}
            colorFoot={'4'}
            subTwo="Life"
            subThree="Leadership"
            subFour="Podcast"
            buttonText="Hear my thoughts"
            text="Living Daily"
            myText="In this podcast, I share my honest and evolving opinion about faith, business and life through Living Daily. All these are lessons from daily in-between of helping people live their best lives, while I live mine."
            // sub="my news is now ontop of the global"
            subText="Helping people live their best lives"
          />
        </div>
      )}

      {product && (
        <div className="grid grid-cols-2 gap-[20px] mb-20 mt-5">
          <Comp
            icon={byteProd}
            color={'1'}
            colorFoot={'1'}
            subOne="Industry"
            subTwo="Finance"
            subThree="SaaS"
            // subFour="Podcast"
            buttonText="View website"
            text="Byte"
            myText="Africa has a vast number of small businesses. These businesses find it difficult to grow because of the lack of basic tools that aids business intelligence and processes.

            Byte is a all in one solution that solves these problem with simplicity. Think inventory and stock management, debt management, credit and payment all in once place."
            // sub="my news is now ontop of the global"
            subText="Accelerating growth for African businesses"
          />
          <Comp
            icon={wyteProd}
            subOne="Industry"
            color={'2'}
            colorFoot={'2'}
            subTwo="Finance"
            subThree="SaaS"
            buttonText="View website"
             text="Wyde"
            myText="Wyde provides a full stack integration platform to manage all your payment providers all in one place. Integrate once, use everywhere."
            subText="Optimizing payment integrations to scale in minutes."
          />
          <Comp
            icon={medipt}
            subOne="Industry"
            subTwo="Health"
            color={'3'}
            colorFoot={'3'}
            subThree="SaaS"
            buttonText="View website"
            text="Medipt"
            myText="Whether you're tracking your health progress, communicating with your healthcare provider, or ensuring that your family's health is in good hands. Medipt is tailored with caregiver and receivers in mind, all healthcare need just in one place."
            subText="All important healthcare records in your hands "
          />
          <Comp
            icon={com}
            subOne="Industry"
            color={'4'}
            colorFoot={'4'}
            subTwo="Soon"
            subThree="Soon"
            text="Coming Soon"
            myText="I said soon.  😂😂"
            subText="You will get to know soon"
          />
        </div>
      )}

      {brand && (
        <div className="grid grid-cols-2 gap-[20px] mb-20 mt-5">
          <Comp
            icon={prun}
            subOne="Industry"
            color={'1'}
            colorFoot={'1'}
            subTwo="Agency"
            subThree="Software Dev"
            buttonText="Read case study"
            text="Prunedge"
            myText="Prunedge’s mission is to innovate and create affordable technological solutions that solve day-to-day human problems by increasing the efficiency of systems and processes within the social, commercial, and public sector space. 

            During my role as a Storytelling and Marketing Designer, I pioneered the Marketing team at Prunedge Development Technologies, developing the first-ever content strategy that the entire marketing team would build on today."
       
            subText="Building innovative technology solutions for real world problems"
          />
          <Comp
            icon={cowry}
            subOne="Industry"
            color={'2'}
            colorFoot={'2'}
            subTwo="Fintech"
            subThree="SaaS"
            buttonText="Read case study"
            text="Cowrywise"
            myText="Cowrywise is building a savings and investment culture among the growing population of underserved African middle class and millennials. 

            During my role as the pioneer ambassadors Design Lead, I led various design and art directions to aid Cowrywise’s marketing effort. I also directed a short testimonial of young individuals in their ambassador's community."
       
            subText="Digitizing wealth management for Africans"
          />
        </div>
      )}

      {photo && (
        <div>
        <div className="grid grid-cols-3 gap-[10px] mb-16 mt-5">
          <img className="rounded-[12px]" src={pic1} alt="/" />
          <img className="rounded-[12px]" src={pic2} alt="/" />
          <img className="rounded-[12px]" src={pic3} alt="/" />
          <img className="" src={pic4} alt="/" />
          <img className="rounded-[12px]" src={pic5} alt="/" />
          <img className="rounded-[12px]" src={pic6} alt="/" />
          <img className="" src={pic7} alt="/" />
          <img className="" src={pic8} alt="/" />
          <img className="" src={pic9} alt="/" />
          <img className="" src={pic10} alt="/" />
          <img className="" src={pic11} alt="/" />
          <img className="" src={pic12} alt="/" />
          <img className="rounded-[12px]" src={pic13} alt="/" />
          <img className="rounded-[12px]" src={pic14} alt="/" />
          <img className="" src={pic15} alt="/" />
          <img className="" src={pic16} alt="/" />
          <img className="rounded-[12px]" src={pic17} alt="/" />
          <img className="rounded-[12px]" src={pic18} alt="/" />
        </div>

<div className="flex justify-center">
<a  target="_blank"
  href="https://www.instagram.com/victorocaptures/" className="bg-[#FFF0F0] w-fit  flex mb-7 px-20  gap-[34px] justify-center items-center py-4 rounded-[8px] ">
<h5 className="text-[#2A0435] font-sub text-[16px] font-[600]">
 See more here
</h5>
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="37"
  height="16"
  viewBox="0 0 37 16"
  fill="none"
>
  <path
    d="M8 16L6.575 14.6L12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16Z"
    fill="#2A0435"
  />
  <path
    d="M29 16L27.575 14.6L33.175 9H21V7H33.175L27.575 1.4L29 0L37 8L29 16Z"
    fill="#2A0435"
  />
</svg>
</a>
  </div>
</div>
      )}
      <div  className="flex justify-center items-center gap-[45px]">
     <a href="#top" onClick={handleShowBuilt}>   {showBuilt ? (
          <div className="flex w-[169px] py-[10px] px-[38px] justify-center items-center gap-10px rounded-[12px] border-[1px] border-[#EEDBDB] bg-[#F6EEF1]">
            <h4 className="font-sub text-[14px] font-[400] text-[#353535]">
            Built(ing)
            </h4>
          </div>
        ) : (
          <h4 className="font-sub text-[14px] hover:text-[#3F52FF] font-[400] text-[#BABABA]">
             Built(ing)
          </h4>
        )}
</a>
<a href="#top" onClick={handleProduct} >
        {product ? (
          <div className="flex w-[169px] py-[10px] px-[38px] justify-center items-center gap-10px rounded-[12px] border-[1px] border-[#EEDBDB] bg-[#F6EEF1]">
            <h4 className="font-sub text-[14px] font-[400] text-[#353535]">
              Product & UX
            </h4>
          </div>
        ) : (
          <h4 className="font-sub text-[14px] hover:text-[#3F52FF]  font-[400] text-[#BABABA]">
            Product & UX
          </h4>
        )}
</a>
<a href="#top" onClick={handleBrand} >
        {brand ? (
          <div className="flex w-fit py-[10px] px-[38px] justify-center items-center gap-10px rounded-[12px] border-[1px] border-[#EEDBDB] bg-[#F6EEF1]">
            <h4 className="font-sub text-[14px] font-[400] text-[#353535]">
              Brand & Marketing
            </h4>
          </div>
        ) : (
          <h4 className="font-sub text-[14px] hover:text-[#3F52FF]  font-[400] text-[#BABABA]">
            Brand & Marketing
          </h4>
        )}
</a>
<a href="#top" onClick={handlePhoto} >
        {photo ? (
          <div className="flex w-[169px] py-[10px] px-[38px] justify-center items-center gap-10px rounded-[12px] border-[1px] border-[#EEDBDB] bg-[#F6EEF1]">
            <h4 className="font-sub text-[14px] font-[400] text-[#353535]">
              Photography
            </h4>
          </div>
        ) : (
          <h4 className="font-sub text-[14px] hover:text-[#3F52FF]  font-[400] text-[#BABABA]">
            Photography
          </h4>
        )}
</a>
<a href="#top" onClick={handleResources} >
        {resources ? (
          <div className="flex w-[169px] py-[10px] px-[38px] justify-center items-center gap-10px rounded-[12px] border-[1px] border-[#EEDBDB] bg-[#F6EEF1]">
            <h4 className="font-sub text-[14px] font-[400] text-[#353535]">
              Resources
            </h4>
          </div>
        ) : (
          <h4 className="font-sub text-[14px] hover:text-[#3F52FF]  font-[400] text-[#BABABA]">
            Resources
          </h4>
        )}
        </a>
      </div>
    </div>
  );
};

export default Main;
