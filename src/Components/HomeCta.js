import React from 'react';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import WagmiUtils from '../blockchain/WagmiUtils';
import img1 from "../Images/pexels-photo-14354106.jpeg"
import YourApp from '../blockchain/YourApp';
import { useAccount } from 'wagmi';
import { useEffect } from 'react';

const HomeCta = () => {
  const { openConnectModal } = useConnectModal();
  const { address, isConnected } = useAccount();

  useEffect(()=>{
    
  },[isConnected])
  return (
    <div className="container my-0 my-24 lg:my-10 mx-auto md:px-6">
      <section className="mb-5 sm:mb-32">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
            <div className="flex lg:py-12">
              <img
                src={img1}
                className="w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px] z-[10]"
                alt="image"
              />
            </div>
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div className="flex h-full items-center rounded-lg bg-transparent p-6 text-center text-[#4361EE] lg:pl-12 lg:text-left" style={{ background: "transparent", border: "1px solid #4361EE" }}>
              <div className="lg:pl-12">
                <h2 className="mb-6 text-3xl font-bold">
                Unlocking Financial Access in Education: Discover the DFI Ecosystem.
                </h2>
                <p className="mb-6 pb-2 lg:pb-0 text-[#ffffff]">
                Discover innovative solutions and pathways to enhance financial access and support educational opportunities. Dive into the world of Decentralized Finance (DeFi) and its transformative role in shaping the future of education. Join us on this educational journey!
                </p>
                {
                  !isConnected ?
                    <WagmiUtils comp={<YourApp style={{ border: "1px solid #4361EE" }} classes="rounded-full border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-[#4361EE] hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200" />} />
                    :
                    <button className="rounded-full border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-[#4361EE] hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200" style={{ border: "1px solid #4361EE" }}> {address.slice(0, 6)}...{address.slice(-4)}</button>
                }



              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeCta;
