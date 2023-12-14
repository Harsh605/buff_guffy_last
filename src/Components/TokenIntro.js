import React from 'react'
import police from "../police.jpg"
import EcoSystemImage from '../R.jpg'

const TokenIntro = () => {
  return (
    <div id="ecosystem" className="abc bg-transparent md:mt-10 py-3 px-3 md:px-14 md:pt-24 md:px-28 sm:p-14  pb-0">

      <h2 className='mt-5 mb-5 md:mb-10' style={{ textAlign: 'center', color: "#f1552c", fontWeight: "700" }}>OUR PROJECT &amp; ECOSYSTEM</h2>
      <div className="container sm:my-0 mx-auto md:px-6">
        <section className="sm:mb-0">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
              <div className="flex lg:py-12">
                <img
                  src={EcoSystemImage}
                  className="w-[100%] h-[280px] rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px] z-[10]"
                  alt="image"
                  
                />
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div className="flex h-full items-center rounded-lg bg-transparent p-6 text-center text-[#4361EE] lg:pl-12 lg:text-left" style={{ background: "transparent", border: "1px solid #4361EE" }}>
                <div className="lg:pl-12">
                  <p style={{ fontFamily: "revert", fontWeight: "600" }} className='text-xl text-white'>Our "DFI" coin on the Arbitrum Layer 2 network creates a dynamic DeFi ecosystem tailored for the education sector. Students and educational institutions form the core participants, gaining access to a range of financial services, including lending, borrowing, and transparent financial management tools.
                  </p> <br />
                  <p style={{ fontFamily: "revert", fontWeight: "600" }} className='text-xl text-white'>Our ecosystem fosters financial inclusivity, security, and innovation, connecting global educational communities and revolutionizing how finances are managed and accessed within the education landscape.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}

export default TokenIntro