import React, { useState, useCallback, useEffect } from "react";

export default function TitleSection({ images, title, content, cta }) {
  const [image, setImage] = useState({ index: -1, url: "" });

  let cycleImage = () => {
    let i = image.index + 1 >= images.length ? 0 : image.index + 1;
    setImage({
      index: i,
      ...images[i]
    });
    console.log("image change!");
  };

  useEffect(() => {
    cycleImage();
  }, []);

  return (
    <div className="items-center justify-center w-screen h-screen space-x-5 md:space-x-16 sm:flex">
      <img
        onClick={cycleImage}
        className="select-none shadow hover:shadow-xl max-w-xs p-0 duration-500 transform rounded-lg hover:scale-[1.03] cursor-pointer sm:max-w-xs md:max-w-md lg:max-w-lg aspect-w-3 aspect-h-2"
        src={image.url}
      />
      <div>
        <img className="mb-2 select-none h-14 w-14" src="../../logo.svg" />
        <h1 className="-mb-1 font-mono text-[39px] font-bold select-none dark:text-white">
          <span className="cursor-default"> {/* duration-300 hover:text-transparent cursor-help bg-clip-text bg-gradient-to-r from-orange-500 via-red-600 to-violet-600 */}
            {title}
          </span>
        </h1>
        <p
          className="leading-snug"
          dangerouslySetInnerHTML={{ __html: content }}
        ></p>
        {cta && <button className={"py-2 mt-4 font-semibold tracking-wide text-white bg-no-repeat rounded select-none hover:shadow-lg px-7 " + image.bgColor + " bg-position-change bg-gradient-to-r " + image.from + " " + image.to}>{cta} {"→"}</button>}
      </div>
    </div>
  );
}
