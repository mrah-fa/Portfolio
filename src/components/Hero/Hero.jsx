import axios from "axios";
import { useState } from "react";

export default function Hero() {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadResume = () => {
    setIsDownloading(true);
    axios
      .get("/doc/Marh-Farroukh.pdf", {
        responseType: "blob",
      })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Marh-Farroukh.pdf");
        document.body.appendChild(link);
        link.click();
      });
    setIsDownloading(false);
  };
  return (
    <>
      <section id="hero" className="personal">
        <div className="container border-dashed border-b border-[#1D2130] dark:border-white dark:bg-bg-black relative max-w-[100vw] pr-[70px] w-full max-[992px]:p-12">
          <div className="p-info max-w-[100vw] w-full mt-12 pb-[103.62px] dark:border-[#ffffff] flex justify-between items-center relative flex-wrap">
            <div className="left mt-14 max-w-[645.62px] w-full flex flex-col gap-8 items-start pl-[70px] max-[992px]:pl-0 ">
              <h1 className="name font-bold text-text-6xl text-text-slate-950 max-w-[599px] w-full dark:text-white max-[992px]:text-4xl max-[992px]:place-items-start max-[460px]:text-3xl">
                <span className="name font-normal text-text-6xl text-text-slate-950 dark:text-white  max-[992px]:text-4xl  max-[460px]:text-3xl ">
                  Hey!
                </span>{" "}
                I'm Marh, Frontend Developer
              </h1>
              <p className="font-normal text-lg  text-text-slate-500 max-w-[320px] dark:text-white">
                Agency-quality Webflow websites with the personal touch of a
                freelancer.
              </p>
              <button
                className="text-text-slate-950 text-text-sm font-medium bg-white py-2 px-3 z-[190] shadow-md"
                onClick={downloadResume}
                disabled={isDownloading}
                title="Download CV"
              >
                Download CV
              </button>
              <img
                src="/img/blur.png"
                alt=""
                className="blur absolute max-w-[645.62px] h-full w-full -z-[1] dark:z-[1] top-[10px] left-0 max-[992px]:h-[45vh]"
              />
            </div>
            <div className="right w-full max-w-[413.26px] pt-32">
              <div className="img max-w-[413.26px] w-full h-[379.89px]  relative z-[5] bg-[#DFE1FA] rounded-full max-[470px]:h-[330px] max-[420px]:h-[270px]  max-[370px]:h-[230px]  max-[320px]:h-[200px]">
                <img
                  src="/img/Image.png"
                  className="w-full object-center absolute max-w-[391.85px] top-[-4rem] "
                />
                <div className="one w-[54.68px] h-[57.02px] bg-[#583FBC] absolute top-0 rotate-45 max-[992px]:w-[35.68px]  max-[992px]:h-[35.02px] max-[992px]:rounded-xl rounded-2xl "></div>
                <div className="one w-[11.88px] h-[12.92px] rounded-full bg-[#583FBC] absolute top-6 right-10 max-[370px]:top-0"></div>
                <div className="one w-[37.74px] h-[38.92px] rounded-xl bg-[#0C96E2] absolute top-1/4 -right-1 rotate-45 max-[370px]:-right-4 max-[370px]:w-8 max-[370px]:h-8"></div>
                <div className="one w-[19.31px] h-[21px] rounded-full bg-[#7DE0EA] absolute top-1/2 right-2 rotate-45 max-[370px]:-right-[8px]"></div>
                <div className="one w-[9.88px] h-[10.92px] rounded-full bg-[#583FBC] absolute bottom-4 left-0"></div>
              </div>
              <img
                src="/img/vector-1.png"
                alt="vector"
                className="absolute left-[68px] top-16 max-w-[100vw] w-full max-[992px]:hidden"
              />
              <img
                src="/img/vector-2.png"
                alt="vector"
                className="absolute left-[68px] top-[132px] max-w-[100vw] w-full max-[992px]:hidden"
              />
            </div>
            <div className="mid absolute top-[37.3rem] right-[42rem] h-[28px] w-[28px] rounded-full border max-[1400px]:hidden">
              <div className="w-[22px] h-[22px] border-[2px] border-[#1D2130] dark:border-white rounded-full relative top-[2px] left-[2.5px] ">
                <div className="w-[16px] h-[16px] border-[2px] border-[#1D2130] dark:border-white rounded-full  absolute top-[1.44px] left-[1.49999999px]">
                  <div className="w-1 h-1 border-[2px] border-[#1D2130] dark:border-white rounded-full absolute top-[4.4px] left-[5px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
