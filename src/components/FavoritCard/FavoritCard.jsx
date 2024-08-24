import { Link } from "react-router-dom";
import { fav_card } from "../../data";
import { useContext } from "react";
import { Translate } from "../../page/Details/Details";
export default function FavoritCard() {
  const translateIndex = useContext(Translate);
  return (
    <>
      <Translate.Provider value={translateIndex}>
        <div className="cards  pb-[94px] flex justify-between items-center overflow-hidden pt-14 gap-[58px] max-w-[100vw] w-full px-[70px] dark:bg-bg-black bg-white max-[992px]:p-12">
          {fav_card.map((ele, index) => {
            return (
              <>
                <div
                  key={index}
                  className="card h-[320px] shrink-0  dark:bg-bg-black bg-white flex flex-col justify-start items-start gap-8 max-w-[370px] w-full  "
                  style={{ transform: `translateX(-${translateIndex * 100}%)` }}
                >
                  <img src={ele.img} alt="img-project" className="max-w-[370px] w-full h-[220px] rounded-md"/>
                  <div className="description flex flex-col gap-[11px] max-w-[370px] w-full">
                    <h3 className="font-semibold text-[22px]  text-text-slate-950 dark:text-white max-[460px]:text-lg">
                      {ele.title}
                    </h3>
                    <div className="bottom flex justify-between items-center">
                      <p className=" text-text-slate-950 dark:text-white font-normal text-base max-[460px]:text-sm">
                        {ele.desc}
                      </p>
                      <button className="w-[35px] h-[35px] ">
                        <img
                          src={ele.btn}
                          alt="btn"
                          className="w-[35px] h-[35px] "
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </Translate.Provider>
    </>
  );
}
