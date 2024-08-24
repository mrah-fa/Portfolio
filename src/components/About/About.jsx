import RangSlider from "../RangeSlider/RangSlider";
import "./About.css";
export default function About() {
  return (
    <>
      <section id="about ">
        <div className="container pb-[92.22px] max-[992px]:p-12 max-w-[100vw] w-full px-[70px] pt-24  dark:bg-bg-black flex flex-wrap gap-12 justify-between items-start ">
          <div className="left max-w-[509.5px] w-full h-[530px] pt-14 ">
            <div className="lang w-full max-w-[509.5px] h-[530px]  relative ">
              <div className="one one1 border-[1px] border-[#1D2130] rounded-full dark:border-[#ffffff]  max-w-[274.56px] w-full h-[255.56px] absolute left-12 top-0"></div>
              <div className="one one2 border-[1px] border-[#1D2130] rounded-full dark:border-[#ffffff]  max-w-[274.56px] w-full h-[255.56px] absolute left-6 top-4"></div>
              <div className="one one3 border-[1px] border-[#1D2130] rounded-full dark:border-[#ffffff]  max-w-[274.56px] w-full h-[255.56px] absolute left-0 top-8"></div>
            </div>
            <div className="img-lan relative">
              <img
                src="/img/html.png"
                alt="html"
                className="html img1 absolute top-[-33rem] left-[1.7rem] max-w-[83.59px]"
              />
              <img
                src="/img/github.png"
                alt="github"
                className="lan img2 absolute -top-[22rem] left-[1.4rem] dark:bg-white rounded-full  max-w-[83.59px]"
              />
              <img
                src="/img/react.png"
                alt="react"
                className="lan img3 absolute -top-[20rem] left-[13rem]  max-w-[83.59px]"
              />
              <img
                src="/img/figma.png"
                alt="figma"
                className="lan img4 absolute -top-[30.6rem] left-[14rem]  max-w-[83.59px]"
              />
              <img
                src="/img/css.png"
                alt="css"
                className="html img5 absolute top-[-26rem] left-[8rem]  max-w-[83.59px]"
              />
            </div>
          </div>
          <div className="right flex flex-col gap-[40.21px] pt-11">
            <h1 className="text-text-slate-950 dark:text-white font-semibold text-[40px]  max-[992px]:text-[26px]">
              About me
            </h1>
            <p className="max-w-[490px] w-full text-text-slate-500 dark:text-white font-normal text-lg">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium.
              Turpis tempus pharetra
            </p>

            <div className="progress flex flex-col justify-between gap-4 ">
              <RangSlider />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
