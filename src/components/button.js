import * as React from "react";

export default function Button(props) {
  const { text, icon, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="w-52 max-md:w-40 my-auto justify-center items-center flex gap-2.5 px-8 py-3 rounded-full self-start max-md:px-5 button-primary max-md:hidden"
    >
      <div className="text-white text-base font-medium leading-7 tracking-normal grow whitespace-nowrap my-auto">
        {text}
      </div>
      <img
        loading="lazy"
        src={icon}
        className="aspect-square object-contain object-center w-7 overflow-hidden self-stretch shrink-0 max-w-full"
      />
    </div>
  );
}
