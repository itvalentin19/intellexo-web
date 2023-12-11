import * as React from "react";

export default function Button(props) {
	const {text, icon, onClick} = props;
  return (
    <div onClick={onClick} className="justify-center items-center flex gap-2.5 mt-12 px-8 py-3 rounded-[81px] self-start max-md:mt-10 max-md:px-5 button-primary">
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


