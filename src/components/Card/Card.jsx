import { Link } from "react-router-dom";
import { Card_Info } from "../../data";
export default function Card() {
  return (
    <>
      {Card_Info.map((ele, index) => {
        return (
          <>
            <div
              key={index}
              className="card h-[320px] max-w-[370px] w-full  dark:bg-bg-black bg-white flex flex-col justify-start items-start gap-8 "
            >
              <Link to={ele.path} title="Go To Details Page">
                <img
                  src={ele.img}
                  alt="img-project"
                  className="max-w-[370px] w-full h-[220px] rounded-lg object-fill"
                />
              </Link>
              <div className="max-w-[370px] w-full description flex flex-col gap-[11px] ">
                <h3 className="font-semibold text-[22px]  text-text-slate-950 dark:text-white max-[460px]:text-lg">
                  {ele.title}
                </h3>
                <div className="bottom flex justify-between max-w-[370px] max-[370px]:gap-10 w-full ">
                  <p className=" text-text-slate-950  dark:text-white font-normal text-base max-[460px]:text-sm">
                    {ele.desc}
                  </p>
                  <button className="w-[35px] h-[35px] ">
                    <Link to={ele.url} title={ele.demo}>
                      <img
                        src={ele.btn}
                        alt="btn"
                        className="w-[35px] h-[35px] "
                      />
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
