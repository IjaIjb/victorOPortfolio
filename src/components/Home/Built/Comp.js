import React, { useState } from "react";

const Comp = (props) => {
  const {
    icon,
    text,
    subText,
    myText,
    subOne,
    subTwo,
    subThree,
    subFour,
    buttonText,
    color,
  } = props;

  const [studio, setStudio] = useState(false);

  const handleStudioMouseOver = () => {
    setStudio(true);
  };

  const handleStudioMouseOut = () => {
    setStudio(false);
  };

  return (
    <div>
      <div className="flex h-full w-full gap-[8px]">
        <div
          onMouseOver={handleStudioMouseOver}
          onClick={handleStudioMouseOver}
          onMouseLeave={handleStudioMouseOut}
          className="flex w-full text-left justify-center"
        >
          {!studio ? (
            <div className="flex w-full flex-col">
              <img className="" src={icon} alt="/" />
              <div className="text-start ">
                <h4 className="text-[#000] text-[32px] font-[700] font-sans">
                  {text}
                </h4>
                <h4 className="text-[#737373] text-[16px] font-[400] font-sub">
                  {subText}
                </h4>
              </div>
            </div>
          ) : (
            <div className=" w-full h-full relative ">
            <div className={`${color === '1' ? 'bg-[#FDF6FF]' : color === '2' ? 'bg-[#F6F9FF]' : color === '3' ? 'bg-[#FFFCF6]' : 'bg-[#FFF4F4]'} h-full flex flex-col  relative w-full  rounded-[12px] px-[40px] py-[50px]`}>
              <div className="flex gap-[20px] w-full font-sub text-[16px]  ">
                <div className="text-[#C193D0] font-[400]">{subOne}</div>
                <div className="text-[#2A0435]  font-[600]">{subTwo}</div>
                <div className="text-[#2A0435]  font-[600]">{subThree}</div>
                <div className="text-[#2A0435]  font-[600]">{subFour}</div>
              </div>
              <h4 className="flex max-w-[318px] font-sub text-[16px] pt-[60px] font-[400] text-[#80548D] ">
                {myText}
              </h4>


              <div className="  mt-auto ">
                <div className=" flex mt-auto items-end w-full">
                <div className="bg-[#FBECFF] w-full  flex  gap-[34px] justify-center items-center py-4 rounded-[8px] ">
                  <h5 className="text-[#2A0435] font-sub text-[16px] font-[600]">
                    {buttonText}
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
                </div>
                </div>
              </div>
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comp;
