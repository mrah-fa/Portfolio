import { useState, createContext } from "react";
import TopSection from "../../components/TopSection/TopSection";
import FavoritCard from "../../components/FavoritCard/FavoritCard";
import { Link } from "react-router-dom";
import { fav_card } from "../../data";
export const Translate = createContext(0);
export default function Details() {
  const [show, setShow] = useState(false);
  const [full, setFull] = useState(false);
  const hover = () => {
    setShow(true);
  };
  const leave = () => {
    setShow(false);
  };
  const fullScreen = () => {
    setFull(true);
  };
  const normalScreen = () => {
    setFull(false);
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateIndex, setTranslateIndex] = useState(Translate);

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(fav_card.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
    setTranslateIndex(currentIndex);
  };

  const handleNext = () => {
    if (currentIndex === fav_card.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
    setTranslateIndex(currentIndex);
  };
  return (
    <>
      <Translate.Provider value={translateIndex}>
        <div className="container max-w-[100vw] w-full mt-12 pb-[92.22px]  border-dashed border-b border-[#1D2130] dark:border-white pt-40 px-[70px] dark:bg-bg-black bg-white max-[992px]:p-12">
          <div className="contect flex justify-between items-start flex-wrap gap-9">
            <div
              className="left relative"
              onMouseEnter={hover}
              onMouseLeave={leave}
            >
              {show ? (
                <div className="hover max-w-[613px] h-[400px] w-full flex justify-center items-center bg-[#00000011] z-[9999]">
                  <img
                    src="/img/edujarD.png"
                    alt=""
                    className="max-w-[613px] h-[400px] w-full  rounded-2xl shadow-lg object-fill"
                  />
                  <div className="btn max-w-[613px] rounded-2xl h-[400px] w-full flex  justify-center items-center gap-8 absolute bg-black opacity-60">
                    <button onClick={fullScreen}>
                      <img
                        src="/img/full.svg"
                        className="w-20 h-20 max-[500px]:w-14  max-[500px]:h-14"
                        alt=""
                        title="Open Image In Full Screen"
                      />
                    </button>
                    <button>
                      <Link
                        to="https://edujar-sztn.vercel.app/"
                        title="Go To Project Demo"
                      >
                        <img
                          src="/img/demo.png"
                          className="w-20 h-20  max-[500px]:w-14  max-[500px]:h-14"
                          alt=""
                        />
                      </Link>
                    </button>
                  </div>
                  <div
                    className={`fullscreen rounded-2xl fixed max-w-[75vw] w-full left-[70px] top-0 flex justify-center items-center bg-[#00000011] z-[9999] ${
                      full == true ? "block" : "hidden"
                    }`}
                  >
                    <img
                      src="/img/edujarD.png"
                      alt=""
                      className=" max-w-[75vw] w-full object-cover rounded-lg shadow-lg shadow-black"
                      onClick={() => normalScreen()}
                    />
                  </div>
                </div>
              ) : (
                <img
                  src="/img/edujarD.png"
                  alt=""
                  className="max-w-[613px] h-[400px] w-full  rounded-2xl shadow-sm dark:shadow-[#ffffff8c]"
                />
              )}
            </div>
            <div className="right flex flex-col justify-between gap-4">
              <div className="top flex justify-between flex-wrap">
                <div className="tit flex flex-col gap-2">
                  <h3 className="font-semibold text-[28px] leading-[42px] text-text-slate-950 dark:text-white max-[992px]:text-[20px]">
                    Educational Platform
                  </h3>
                  <p className="font-medium text-sm leading-7 text-[#A6A6A6]">
                    30-6-2024
                  </p>
                </div>
                <button className="w-[35px] h-[35.71px]">
                  <Link
                    to="https://edujar-sztn.vercel.app/"
                    title="Go To Project Demo"
                  >
                    <img
                      src="/img/Icon-btn.png"
                      alt="btn"
                      className="w-[35px] h-[35.71px]"
                    />
                  </Link>
                </button>
              </div>
              <p className="max-w-[570.41px] font-normal text-base leading-7 text-text-slate-950 dark:text-white">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus netus in. Aliquet donec morbi convallis pretium.
                Turpis tempus pharetra Lorem ipsum dolor sit amet consectetur.
                Tristique amet
              </p>
              <p className="font-medium text-lg text-text-slate-950 dark:text-white">
                Basic Languages :{" "}
                <span className="font-medium text-sm text-text-slate-950 dark:text-white">
                  Html5 , Css , Javascript
                </span>
              </p>
              <p className="font-medium text-lg text-text-slate-950 dark:text-white">
                Framework :{" "}
                <span className="font-medium text-sm text-text-slate-950 dark:text-white">
                  Tailwind
                </span>{" "}
              </p>
              <p className="font-medium text-lg text-text-slate-950 dark:text-white">
                Library :{" "}
                <span className="font-medium text-sm text-text-slate-950 dark:text-white">
                  React.js
                </span>
              </p>
              <button className="font-medium text-base text-white max-w-[163.47px] h-[51.02px] bg-[#0C96E2] rounded-lg py-[11.22px] px-[32px] max-[460px]:text-sm">
                <Link
                  to="https://github.com/mrah-fa/Edujar"
                  title="Open Project Repo"
                >
                  Github Repo
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-20 items-end px-[70px] dark:bg-bg-black bg-white max-[992px]:p-12">
          <TopSection
            title="Portfolio"
            desc="The Best"
            span="Projects"
            btn={{ content: "", show: false }}
          />
          <div className="slider flex dark:bg-bg-black bg-white ">
            <button className="prev-button" onClick={handlePrev}>
              <img src="/img/left.png" />
            </button>
            <button className="next-button" onClick={handleNext}>
              <img src="/img/right.png" />
            </button>
          </div>
        </div>
        <div className="bot dark:bg-bg-black bg-white border-b border-[#1D2130] dark:border-white">
          <FavoritCard />
        </div>
      </Translate.Provider>
    </>
  );
}
