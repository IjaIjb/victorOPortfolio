import React from "react";
import Footer from "../../components/footer/Footer";
import logo from "../../assets/logo.svg";
import pic from "../../assets/mypic1.svg";
import picv from "../../assets/picv.svg";
import picv1 from "../../assets/picv1.svg";
import picv2 from "../../assets/picv2.svg";
import picv3 from "../../assets/picv3.svg";
import picv4 from "../../assets/picv4.svg";
import picv5 from "../../assets/picv5.svg";
import picv6 from "../../assets/picv6.svg";
import picv7 from "../../assets/picv7.svg";
import picv8 from "../../assets/picv8.svg";
import picc from "../../assets/mypic2.svg";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const About = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2, // optional, default to 1.
    },
  };

  return (
    <div className="bg-[#FFF8FA] w-full">
      <div className="px-5 md:px-0 md:mx-16 pt-10">
        <div className="flex justify-between">
        <div className="sticky top-10 left-0">
            <img className="sticky top-10 left-0" src={logo} alt="/" />
          </div>

          <div className="flex max-w-[844px] text-start">
            <div className="">
              <h2 className="text-[#000000] max-w-[837px] text-[220px] font-[700] leading-[115%] font-sans">
                Helping people live their best lives...
              </h2>

              <div className="rounded-[40px] flex max-w-[844px]  w-full">
                <div className="w-full rounded-[40px]">
                  <div className="w-full rounded-[40px]">
                    <div className="mt-7 rounded-[40px]">
                      <Carousel
                        swipeable={true}
                        draggable={true}
                        rtl={true}
                        autoPlay={true}
                        showDots={false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlaySpeed={1500}
                        customTransition="all 20s linear"
                        keyBoardControl={true}
                        transitionDuration={5000}
                        containerclassName="carousel-container"
                        removeArrowOnDeviceType={[
                          "desktop",
                          "tablet",
                          "mobile",
                        ]}
                        dotListclassName="custom-dot-list-style"
                        itemclassName="carousel-item-padding-40-px"
                        className="rounded-[7px]"
                      >
                        <div className="mr-3">
                          <img className="rounded-lg" src={picc} alt="/" />
                        </div>

                        <div className="mr-3">
                          <img className="rounded-lg" src={pic} alt="/" />
                        </div>

                        <div className="mr-3">
                          <img className="rounded-lg" src={picv} alt="/" />
                        </div>

                        <div className="mr-3">
                          <img className="rounded-lg" src={picv1} alt="/" />
                        </div>
                        <div className="mr-3">
                          <img className="rounded-lg" src={picv2} alt="/" />
                        </div>
                        <div className="mr-3">
                          <img className="rounded-lg" src={picv3} alt="/" />
                        </div>
                        <div className="mr-3">
                          <img className="rounded-lg" src={picv4} alt="/" />
                        </div>
                        <div className="mr-3">
                          <img className="rounded-lg" src={picv5} alt="/" />
                        </div>
                        <div className="mr-3">
                          <img className="rounded-lg" src={picv6} alt="/" />
                        </div>
                        <div className="mr-3">
                          <img className="rounded-lg" src={picv7} alt="/" />
                        </div>
                        <div className="mr-3">
                          <img className="rounded-lg" src={picv8} alt="/" />
                        </div>
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-start mt-10 mb-10">
                <h5 className="text-[22px] max-w-[590px] text-start  text-[#737373] font-[400] leading-[142.023%] font-sub">
                  My work has been an intersection of products, marketing,
                  design, brands and the people they serve—helping people live
                  their best lives, of course, while I live mine.
                  <br />
                  <br /> I have helped amazing brands like{" "}
                  <a
                    className="text-[#3F52FF]"
                    target="_blank"
                    href="https://www.usebyte.com/"
                  >
                    Byte
                  </a>
                  , Extramile Africa,{" "}
                  <a
                    className="text-[#3F52FF]"
                    target="_blank"
                    href="https://tech4dev.com/"
                  >
                    Tech4Dev
                  </a>
                  , Home Advantage Africa, E-detectors,{" "}
                  <a
                    className="text-[#3F52FF]"
                    target="_blank"
                    href="https://prunedge.com/"
                  >
                    Prunedge
                  </a>
                  , and others meet their product, brand design, marketing,
                  communications, and ultimately their business goals.
                  <br />
                  <br /> Asides from having my educational background in{" "}
                  <a className="text-[#3F52FF]" href="">
                    Industrial Design
                  </a>{" "}
                  , I also learned design from one of Africa’s best agency—
                  <a
                    className="text-[#3F52FF]"
                    target="_blank"
                    href="https://fourthcanvas.co/"
                  >
                    Fourthcanvas
                  </a>
                  , worked with the{" "}
                  <a
                    className="text-[#3F52FF]"
                    target="_blank"
                    href="https://www.un.org/en/"
                  >
                    United Nations
                  </a>{" "}
                  during my role at{" "}
                  <a
                    className="text-[#3F52FF]"
                    target="_blank"
                    href="https://www.hultprize.org/"
                  >
                    HultPrize
                  </a>{" "}
                  Nigeria, got recognized by the prestigious{" "}
                  <a
                    className="text-[#3F52FF]"
                    target="_blank"
                    href="https://25under25.org/"
                  >
                    25under25 awards
                  </a>{" "}
                  in 2022 for my unparalleled work at Byte and formidable
                  contributions to the technology and design ecosystem in Africa
                  and across the globe. <br />
                  <br />
                  After about a decade of working in various value-driven
                  organizations, my recent adventure is building{" "}
                  <a className="text-[#3F52FF]" href="">
                    HealthGap
                  </a>
                  , with the primary aim of unlocking the power of modern
                  healthcare for Africans. On the other side, I am deliberate
                  about Africa and her growth, deliberately championing the
                  equipping of young Africans with the knowledge and skills
                  needed to be relevant in today's world and the future through{" "}
                  <a
                    className="text-[#3F52FF]"
                    target="_blank"
                    href="https://www.instagram.com/vobfoundation/"
                  >
                    VOB Foundation
                  </a>
                  .<br />
                  <br />
                  In respect to contributing to the growth of the technology and
                  design ecosystem, I am currently a member of the{" "}
                  <a
                    className="text-[#3F52FF]"
                    target="_blank"
                    href="https://www.invisionapp.com/future-of-work/design-leadership"
                  >
                    Design Leadership Forum by InVision
                  </a>{" "}
                  and a global design mentor at{" "}
                  <a
                    className="text-[#3F52FF]"
                    target="_blank"
                    href="https://adplist.org/"
                  >
                    ADP List
                  </a>
                  .<br />
                  <br />
                  When I have some free time, I share my honest and evolving
                  thought about faith, business and life through{" "}
                  <a
                    className="text-[#3F52FF]"
                    target="_blank"
                    href="https://podcasts.apple.com/ng/podcast/living-daily-withvictor-o/id1660055025"
                  >
                    Living Daily
                  </a>
                  . I also document daily in-betweens of creativity, processes,
                  people and the life they live{" "}
                  <a
                    className="text-[#3F52FF]"
                    target="_blank"
                    href="https://www.instagram.com/victorocaptures/"
                  >
                    here
                  </a>
                  , research and give concrete analysis of the past, present,
                  and future of Technology, Design, Growth, Marketing and Media
                  at{" "}
                  <a className="text-[#3F52FF]" href="">
                    TGDM Perusal
                  </a>
                  .
                </h5>
              </div>
            </div>
          </div>

          <div className="sticky flex justify-center top-10 left-0  border-[1px] h-fit px-[12px] border-[#E0E0E0] rounded-[12px]">
            <div className="">
            <div className="border-b-[1px] flex justify-center py-4 px-3.5 border-b-[#E0E0E0]">     
              <Link
                className="text-[#525252] font-sub text-[12px] font-[700] "
                to="/"
              >
                Home
              </Link>
            </div>

            <div  className="border-b-[1px] py-4 px-3.5 flex justify-center border-b-[#E0E0E0]">
              <Link
                className="text-[#525252] font-sub text-[12px] font-[700] "
                to="/about"
              >
                About
              </Link>
            </div>

            <div  className="py-4 px-3.5 flex justify-center ">
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

export default About;
