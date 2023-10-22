import React from 'react'
import vect from "../../assets/bgF.svg";
import email from "../../assets/Email.svg";
import ln from "../../assets/LinkedIn.svg";
import tw from "../../assets/Twitter.svg";
import ig from "../../assets/Mask group (13).svg";

const Footer = () => {
  const date = new Date();

  return (
    <div id="bot" className='mt-[120px]'>
     <div className=" flex gap-[48px]  text-center justify-center ">
     <a className="text-[#3F52FF]" target="_blank" href="mailto:victorobabatunde@gmail.com"> <img className="" src={email} alt="/" /></a>
     <a className="text-[#3F52FF]" target="_blank" href="https://www.linkedin.com/in/victorobabatunde/"><img className="" src={ln} alt="/" /></a>
     <a className="text-[#3F52FF]" target="_blank" href="https://twitter.com/victorobabatund"><img className="" src={tw} alt="/" /></a>
     <a className="text-[#3F52FF]" target="_blank" href="https://www.instagram.com/victorobabatunde/"><img className="" src={ig} alt="/" /></a>

</div>

     <div
  class="relative overflow-hidden  flex items-end rounded-lg bg-cover bg-no-repeat  text-center"
  style={{
    backgroundImage: `url(${vect})`,
    backgroundRepeat: "no-repeat",
  }}
  className="w-full "
  >
     <div className=" flex gap-[48px] py-20  text-center justify-center ">
     <h5 className=" text-sm text-[#525252] text-[14px] font-[400] font-sub ">
                {" "}
                &copy; {date.getFullYear()} Victor(O). All rights reserved.
                
              </h5>
              <h5 className=" text-sm text-[#525252] text-[14px] font-[400] font-sub ">
               
                Timezone GMT +1
              </h5>
              <h5 className=" text-sm text-[#525252] text-[14px] font-[400] font-sub ">
               
              Site developed by <a className='text-black font-bold' target="_blank" href="https://www.linkedin.com/in/joseph-ijaola-95267b1a6">IJB</a>
              </h5>
        </div>
    </div> 
    </div>
  )
}

export default Footer
