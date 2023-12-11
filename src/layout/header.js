import * as React from "react";
import Button from "../components/button";

export default function Header(props) {
  return (
    <div className="self-stretch w-full max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
          <div className="flex-col overflow-hidden relative flex min-h-[129px] grow justify-center pl-16 py-11 items-end max-md:max-w-full max-md:pl-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/97925e98ab62b885fb697e4d830276d5e2c1365292cb0a8a177363450e3812c9?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/97925e98ab62b885fb697e4d830276d5e2c1365292cb0a8a177363450e3812c9?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/97925e98ab62b885fb697e4d830276d5e2c1365292cb0a8a177363450e3812c9?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/97925e98ab62b885fb697e4d830276d5e2c1365292cb0a8a177363450e3812c9?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/97925e98ab62b885fb697e4d830276d5e2c1365292cb0a8a177363450e3812c9?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/97925e98ab62b885fb697e4d830276d5e2c1365292cb0a8a177363450e3812c9?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/97925e98ab62b885fb697e4d830276d5e2c1365292cb0a8a177363450e3812c9?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/97925e98ab62b885fb697e4d830276d5e2c1365292cb0a8a177363450e3812c9?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&"
              className="absolute h-full w-full object-cover object-center inset-0"
            />
            <div className="relative flex w-full items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
              <div className="flex items-stretch justify-between gap-5 my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2feb30209006ed042343b60834e67092dbabfa36f9d058b9c39223ee8db830d?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&"
                  className="aspect-[5.72] object-contain object-center w-[183px] overflow-hidden shrink-0 max-w-full"
                />
                <div className="items-stretch self-center flex gap-4 my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3525efc2a2e5ceed8a291726980cd89a08e601baa8330c1424418f39bd26b30?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&"
                    className="aspect-[1.39] object-contain object-center w-[25px] overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-white text-lg leading-[83px] tracking-tighter self-center grow whitespace-nowrap my-auto">
                    Menu
                  </div>
                </div>
              </div>
              <Button
                text="Let’s Connect"
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/059c8c0b2cb059f57f13045a48a5a7dd5c1c69aa950c302adfa1809459dbde73?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&"
                onClick={() => {}}
              />
              {/* <div className="items-center bg-[linear-gradient(70deg,#FA5B0B_-37.29%,#8FD9F5_87.63%)] self-stretch flex justify-between gap-3 px-5 py-2.5 rounded-[136px]">
                <div className="text-white text-sm leading-[84px] tracking-tighter grow whitespace-nowrap my-auto">
                  Lets’ Connect
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/059c8c0b2cb059f57f13045a48a5a7dd5c1c69aa950c302adfa1809459dbde73?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&"
                  className="aspect-[1.14] object-contain object-center w-[25px] overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </div> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/db3cb84c75d6a09beb6e1f5c711df8169656e7ec82610703249c9d7d22d04d9f?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/db3cb84c75d6a09beb6e1f5c711df8169656e7ec82610703249c9d7d22d04d9f?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/db3cb84c75d6a09beb6e1f5c711df8169656e7ec82610703249c9d7d22d04d9f?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/db3cb84c75d6a09beb6e1f5c711df8169656e7ec82610703249c9d7d22d04d9f?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/db3cb84c75d6a09beb6e1f5c711df8169656e7ec82610703249c9d7d22d04d9f?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/db3cb84c75d6a09beb6e1f5c711df8169656e7ec82610703249c9d7d22d04d9f?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/db3cb84c75d6a09beb6e1f5c711df8169656e7ec82610703249c9d7d22d04d9f?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/db3cb84c75d6a09beb6e1f5c711df8169656e7ec82610703249c9d7d22d04d9f?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&"
            className="aspect-[7.44] object-contain object-center w-full overflow-hidden grow max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
}

