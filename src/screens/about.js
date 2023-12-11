import React from 'react';
import logo from '../logo.svg';

function AboutScreen() {

	return (
		<div className="bg-zinc-950 flex flex-col">
      <div className="self-center w-full max-w-[1377px] mt-11 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[56%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-10">
              <div className="text-orange-500 text-center text-xl leading-8 tracking-normal self-stretch whitespace-nowrap max-md:max-w-full">
                Get Your Custom PM WANI App
              </div>
              <div className="text-white text-6xl leading-[72px] tracking-tighter bg-clip-text bg-[linear-gradient(72deg,#FA5B0B_-6.32%,#8FD9F5_55.35%)] self-stretch mt-9 max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
                <span className="text-white">Bridging Minds, </span>Connecting
                Worlds
              </div>
              <div className="text-white text-xl leading-9 tracking-normal self-stretch mt-12 max-md:max-w-full max-md:mt-10">
                Unlock the digital services trusted by 15000 clients worldwide.
                We are a full-service digital agency that drives leads and
                revenue to your business.
              </div>
              <div className="justify-center items-center flex gap-2.5 mt-12 px-8 py-3 rounded-[81px] self-start max-md:mt-10 max-md:px-5">
                <div className="text-white text-base font-medium leading-7 tracking-normal grow whitespace-nowrap my-auto">
                  Get your PM WANI APP now!
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0c4c0375f6f61286cc236f2a4ef8bca7ed3da048df651626e2bb8d020c19aa3?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&"
                  className="aspect-square object-contain object-center w-7 overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[44%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6745641caf746f4ee896d62f66385ff5dc226abe2c982d431f2d23043b3edf52?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&"
              className="aspect-[1.19] object-contain object-center w-full justify-end items-center overflow-hidden grow max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
	)
}

export default AboutScreen;