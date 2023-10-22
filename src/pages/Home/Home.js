import React from "react";
import Main from "../../components/Home/Main";
import Footer from "../../components/footer/Footer";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="px-5 md:px-0 md:mx-16 pt-10">
        <div className="flex justify-between">
          <div className="sticky top-10 left-0">
            <img className="sticky top-10 left-0" src={logo} alt="/" />
          </div>

          <div className="flex max-w-[844px] pt-12">
            <div className="">
              <h2 className="text-[#000000] max-w-[837px] text-[220px] font-[700] leading-[115%] font-sans">
                People, Brands 
              </h2>
              <h2 className="text-[#000000]  text-[220px] font-[700] leading-[115%] font-sans">
                and Products.
              </h2>
              <div className="flex justify-end mb-20">
                <h5 className="text-[28px] max-w-[590px] text-start  text-[#737373] font-[400] leading-[142.023%] font-sub">
                  My work has been an intersection of Products,
                  Marketing, Design, Brands and the people they serve—helping people
                  live their best lives, of course, while I live mine. I have
                  helped amazing brands like <a className="text-[#3F52FF]" target="_blank" href="https://www.usebyte.com/">Byte</a>, Extramile Africa, <a className="text-[#3F52FF]" target="_blank" href="https://tech4dev.com/">Tech4Dev</a>,
                  Home Advantage Africa, E-detectors, <a className="text-[#3F52FF]" target="_blank" href="https://prunedge.com/">Prunedge</a>, and others meet 
                  their product, brand design, marketing, communications, and
                  ultimately their business goals. I worked with the <a className="text-[#3F52FF]" target="_blank" href="https://www.un.org/en/">United
                  Nations</a> during my role at <a className="text-[#3F52FF]" target="_blank" href="https://www.hultprize.org/">HultPrize</a> Nigeria and got recognized
                  by the prestigious <a className="text-[#3F52FF]" target="_blank" href="https://25under25.org/">25under25 awards</a>.

                  <Link to="/about" className="bg-[#FFF0F0] w-[310px]  flex mt-9   gap-[34px] justify-center items-center h-[64px] rounded-[8px] ">
                  <h5 className="text-[#2A0435] font-sub text-[16px] font-[600]">
                   Read more about me
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
                </Link>
                </h5>
              </div>
              <Main />
            </div>
          </div>

          <div className="sticky flex justify-center top-10 left-0  border-[1px] h-fit px-[12px] border-[#E0E0E0] rounded-[12px]">
            <div className="">
            <div className="border-b-[1px] flex justify-center p-3.5 border-b-[#E0E0E0]">     
              <Link
                className="text-[#525252] font-sub text-[12px] font-[700] "
                to="/"
              >
                Home
              </Link>
            </div>

            <div  className="border-b-[1px] p-3.5 flex justify-center border-b-[#E0E0E0]">
              <Link
                className="text-[#525252] font-sub text-[12px] font-[700] "
                to="/about"
              >
                About
              </Link>
            </div>

            <div  className="border-b-[1px] p-3.5 flex justify-center border-b-[#E0E0E0]">
              <a
                className="text-[#525252] font-sub text-[12px] font-[700] "
                href="#bot"
              >
                Contact
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
