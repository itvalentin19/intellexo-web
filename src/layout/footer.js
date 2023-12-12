import * as React from "react";

function FooterForm(props) {
  return (
    <div className="self-stretch w-full mt-20 max-md:max-w-full max-md:mt-10 pr-16 max-md:pr-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c7f7734d5dc9137db98cdf8ab121afb9206fc1aeb0fd4fc77ea1380cc8fcf051?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7f7734d5dc9137db98cdf8ab121afb9206fc1aeb0fd4fc77ea1380cc8fcf051?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7f7734d5dc9137db98cdf8ab121afb9206fc1aeb0fd4fc77ea1380cc8fcf051?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7f7734d5dc9137db98cdf8ab121afb9206fc1aeb0fd4fc77ea1380cc8fcf051?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7f7734d5dc9137db98cdf8ab121afb9206fc1aeb0fd4fc77ea1380cc8fcf051?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7f7734d5dc9137db98cdf8ab121afb9206fc1aeb0fd4fc77ea1380cc8fcf051?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7f7734d5dc9137db98cdf8ab121afb9206fc1aeb0fd4fc77ea1380cc8fcf051?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7f7734d5dc9137db98cdf8ab121afb9206fc1aeb0fd4fc77ea1380cc8fcf051?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&"
            className="aspect-[1.55] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
          />
        </div>
        <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
          <div className="items-stretch flex flex-col mt-20 px-5 py-0.5 max-md:max-w-full max-md:mt-10">
            <div className="text-white text-2xl font-bold leading-[71px] whitespace-nowrap max-md:max-w-full">
              Form
            </div>
            <div className="text-white text-base leading-4 whitespace-nowrap mt-7 max-md:max-w-full">
              Email Id
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/75c357896daf5ffad8a31292529c6999224ba0532b44c1ec87012844d48a9852?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&"
              className="aspect-[885] object-contain object-center w-full stroke-[1px] stroke-zinc-400 overflow-hidden mt-6 max-md:max-w-full border border-b-[white]"
            />
            <div className="text-white text-base leading-4 whitespace-nowrap mt-7 max-md:max-w-full">
              Name
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/75c357896daf5ffad8a31292529c6999224ba0532b44c1ec87012844d48a9852?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&"
              className="aspect-[885] object-contain object-center w-full stroke-[1px] stroke-zinc-400 overflow-hidden mt-6 max-md:max-w-full border border-b-[white]"
            />
            <div className="text-white text-base leading-4 whitespace-nowrap mt-7 max-md:max-w-full">
              Mobile Number
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/75c357896daf5ffad8a31292529c6999224ba0532b44c1ec87012844d48a9852?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&"
              className="aspect-[885] object-contain object-center w-full stroke-[1px] stroke-zinc-400 overflow-hidden mt-6 max-md:max-w-full border border-b-[white] "
            />
            <div className="text-white text-base leading-4 whitespace-nowrap mt-7 max-md:max-w-full">
              Type here
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/75c357896daf5ffad8a31292529c6999224ba0532b44c1ec87012844d48a9852?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&"
              className="aspect-[885] object-contain object-center w-full stroke-[1px] stroke-zinc-400 overflow-hidden mt-40 max-md:max-w-full max-md:mt-10 border border-b-[white]"
            />
            <div className="justify-between items-center flex gap-2.5 mt-7 pl-8 pr-20 py-3 rounded-[81px] max-md:max-w-full max-md:flex-wrap max-md:px-5">
              <div className="justify-center items-center flex gap-2.5 mt-12 px-8 py-3 rounded-[81px] self-start max-md:mt-10 max-md:px-5 button-primary">
                <div className="text-white text-base font-medium leading-7 tracking-normal grow whitespace-nowrap max-md:whitespace-normal my-auto">
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
        </div>
      </div>
    </div>
  );
}

function FooterNavs(props) {
  return (
    <div className="self-center flex w-full max-w-[1361px] flex-col mt-36 items-start max-md:max-w-full max-md:mt-10 p-16 max-md:p-10">
      <div className="self-stretch flex w-full justify-between gap-5 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
        <div className="flex grow basis-[0%] flex-col items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd2a6ebb04fd9519a75c34ae256e34e437320fb15ec65cf36dae1b77962e144b?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&"
            className="aspect-[9.28] object-contain object-center w-[297px] overflow-hidden"
          />
          <div className="text-white text-sm leading-7 self-stretch mt-14 max-md:mt-10">
            <span className="">
              n0131, Sekh Para, Deulia, Kamalpur, Mongalkote, Purba Barddhaman,
              West Bengal, India,{" "}
            </span>
            <span className="font-bold">
              713147.
              <br />
              CIN: U72900WB2018PTC225797
              <br />
              GSTIN: 19ABACS2203B2ZZ
            </span>
          </div>
        </div>
        <div className="items-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <div className="items-stretch flex grow basis-[0%] flex-col">
            <div className="text-white text-xl font-bold leading-[71px] whitespace-nowrap">
              IT Services
            </div>
            <div className="text-white text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-7">
              Managed IT
            </div>
            <div className="text-white text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-5">
              IT Support
            </div>
            <div className="text-white text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-5">
              IT Consultancy
            </div>
            <div className="text-white text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-5">
              Cloud Computing
            </div>
            <div className="text-white text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-5">
              Cyber Security
            </div>
            <div className="text-white text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-5">
              Custom Software
            </div>
          </div>
          <div className="items-stretch flex grow basis-[0%] flex-col">
            <div className="text-white text-xl font-bold leading-[71px] whitespace-nowrap">
              Industries
            </div>
            <div className="text-white text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-7">
              Banking
            </div>
            <div className="text-white text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-5">
              Capital markets
            </div>
            <div className="text-white text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-5">
              Enterprise Technology
            </div>
            <div className="text-white text-sm font-medium leading-7 tracking-normal mt-5">
              Manufacturing
            </div>
            <div className="text-white text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-5">
              Healthcare
            </div>
            <div className="text-white text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-5">
              Higher Education
            </div>
          </div>
          <div className="items-stretch flex grow basis-[0%] flex-col">
            <div className="text-white text-xl font-bold leading-[71px] whitespace-nowrap">
              Company
            </div>
            <div className="text-white text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-7">
              About
            </div>
            <div className="text-white text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-5">
              Leadership Team
            </div>
            <div className="text-white text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-5">
              IT Blog
            </div>
            <div className="text-white text-sm font-medium leading-7 tracking-normal mt-5">
              Case Studies
            </div>
            <div className="text-white text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-5">
              Locations
            </div>
            <div className="text-white text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-5">
              Careers
            </div>
          </div>
          <div className="items-stretch flex basis-[0%] flex-col">
            <div className="text-white text-xl font-bold leading-[71px]">
              Support
            </div>
            <div className="text-white text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-7">
              Forum Support
            </div>
            <div className="text-white text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-5">
              Help & FAQ{" "}
            </div>
            <div className="text-white text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-5">
              Contact Us
            </div>
            <div className="text-white text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-5">
              Pricing & plans
            </div>
            <div className="text-white text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-5">
              Cookies Policy
            </div>
            <div className="text-white text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-5">
              Privacy Policy
            </div>
          </div>
        </div>
      </div>

      <div className="self-stretch flex flex-wrap w-full justify-between gap-5 mt-12 px-px items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:flex-col-reverse">
        <div className="flex grow basis-[0%] flex-col items-stretch mt-4 w-5/12 max-md:w-full">
          <div className="flex w-full justify-between gap-5 items-start max-md:max-w-full max-md:flex-wrap">
            <div className="flex grow basis-[0%] flex-col items-stretch ">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1ebee4ff637bddff17ef17902980c8fa77b4dd116c446455b9c502e30e32a8a?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&"
                className="aspect-[5.86] object-contain object-center w-[129px] overflow-hidden max-w-full mt-8 max-md:hidden"
              />
              <div className="text-white text-2xl font-bold leading-[71px] whitespace-nowrap">
                Subsribe Now
              </div>
              <div className="text-white text-base leading-4 whitespace-nowrap mt-8">
                Email Id
              </div>
              <div className="justify-center items-center border border-[color:var(--12,#FA5B0B)] flex gap-2.5 mt-7 -mb-3 px-4 py-2 rounded-[91px] border-solid self-end">
                <div className="text-white text-base font-medium leading-7 tracking-normal grow whitespace-nowrap my-auto">
                  Send
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc8582eea985a6070ecd7eede3dd58a55bc138d579c1b6a477cb13db0202ee10?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&"
                  className="aspect-square object-contain object-center w-7 overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e611f2590457d4ea7415e1038142cda9387355a23031b3d00afe643c32b0ce8e?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&"
            className="aspect-[603] object-contain object-center w-full stroke-[1px] stroke-orange-600 overflow-hidden mt-5 max-md:max-w-full border-b border-b-white"
          />
        </div>
        <div className="self-stretch w-7/12 flex justify-end max-md:justify-start max-md:w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[49%] max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch px-5 max-md:mt-10">
                <div className="text-white text-base leading-[71px] whitespace-nowrap">
                  Contact
                </div>
                <div className="text-white text-2xl font-bold leading-[71px] whitespace-nowrap mt-9 max-md:mt-0">
                  +91 45555555555
                </div>
                <div className="text-white text-2xl font-bold leading-[71px] underline whitespace-nowrap mt-6 max-md:mt-0">
                  <a href="tel:+919933711955" target="_blank">
                    91-9933-711-955
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch px-5 max-md:mt-0">
                <div className="text-white text-base leading-[71px] whitespace-nowrap">
                  Email
                </div>
                <div className="text-white text-2xl font-bold leading-[71px] underline whitespace-nowrap mt-9 max-md:mt-0">
                  <a href="mailto:hello@simplifon.in" target="_blank">
                    hello@simplifon.in
                  </a>
                </div>
                <div className="text-white text-2xl font-bold leading-[71px] underline whitespace-nowrap mt-5 max-md:mt-0">
                  mail
                  <a href="mailto:hello@simplifon.in" target="_blank">
                    @simplifon.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1ebee4ff637bddff17ef17902980c8fa77b4dd116c446455b9c502e30e32a8a?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&"
        className="invisible aspect-[5.86] object-contain object-center w-[129px] overflow-hidden max-w-full mt-8 max-md:visible"
      />
    </div>
  );
}

function FooterBottom(props) {
  return (
    <div className="justify-center items-center bg-[linear-gradient(70deg,#FA5B0B_-37.29%,#8FD9F5_87.63%)] self-stretch flex w-full flex-col mt-20 px-16 py-8 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="flex w-full max-w-[1360px] items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:text-center">
        <div className="text-zinc-950 text-sm leading-[71px] grow whitespace-nowrap">
          ©2023 intellexo, All Rights Reserved.
        </div>
        <div className="items-stretch flex justify-between gap-5 self-start max-md:hidden max-md:flex-wrap max-md:justify-center">
          <div className="text-zinc-950 text-sm leading-[71px] whitespace-nowrap">
            Terms of use{" "}
          </div>
          <div className="text-zinc-950 text-sm leading-[71px]">
            Cookie Policy
          </div>
          <div className="text-zinc-950 text-sm leading-[71px]">
            Data Protection
          </div>
          <div className="text-zinc-950 text-sm leading-[71px] whitespace-nowrap">
            Privacy Notice
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <>
      <FooterForm />
      <FooterNavs />
      <FooterBottom />
    </>
  );
}
