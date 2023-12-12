import * as React from "react";
import Button from "../components/button";

export default function Header(props) {
  return (
    <div className="self-stretch w-full">
      <div className="flex-col overflow-hidden relative flex flex-wrap min-h-[129px] grow justify-center max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/97925e98ab62b885fb697e4d830276d5e2c1365292cb0a8a177363450e3812c9?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/97925e98ab62b885fb697e4d830276d5e2c1365292cb0a8a177363450e3812c9?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/97925e98ab62b885fb697e4d830276d5e2c1365292cb0a8a177363450e3812c9?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/97925e98ab62b885fb697e4d830276d5e2c1365292cb0a8a177363450e3812c9?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/97925e98ab62b885fb697e4d830276d5e2c1365292cb0a8a177363450e3812c9?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/97925e98ab62b885fb697e4d830276d5e2c1365292cb0a8a177363450e3812c9?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/97925e98ab62b885fb697e4d830276d5e2c1365292cb0a8a177363450e3812c9?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/97925e98ab62b885fb697e4d830276d5e2c1365292cb0a8a177363450e3812c9?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&"
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <div className="flex flex-wrap max-md:flex-col sm:px-0 items-center justify-between gap-5 xl:mx-[15%] lg:mx-[10%] md:mx-[5%]">
          <div className="flex items-stretch justify-start gap-10 my-auto max-md:justify-between">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2feb30209006ed042343b60834e67092dbabfa36f9d058b9c39223ee8db830d?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&"
              className="aspect-[5.72] object-contain object-center w-[183px] overflow-hidden shrink-0 max-w-full"
            />
            <div className="items-stretch self-center flex gap-5 my-auto">
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
          <div className="flex justify-end">
            <Button
              text="Let’s Connect"
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/059c8c0b2cb059f57f13045a48a5a7dd5c1c69aa950c302adfa1809459dbde73?apiKey=df2f42d74d4f4bf7aed2d41dd08bafca&"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
