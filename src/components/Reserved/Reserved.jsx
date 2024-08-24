import { social } from "../../data";
import { Link } from "react-router-dom";
export default function Reserved({ right, developerName }) {
  return (
    <>
      <div className="container max-w-[100vw] gap-4 w-full px-[70px] py-8 max-[360px]:py-4 dark:bg-bg-black bg-white max-[992px]:p-12  flex flex-wrap justify-between items-center">
        <div className="left">
          <p className="text-text-slate-950 dark:text-white font-normal text-base leading-4 max-[360px]:text-sm">
            {right}
          </p>
        </div>
        <div className="mid">
          <p className="text-text-slate-950 dark:text-white font-normal text-base leading-4 max-[360px]:text-sm">
            {developerName}
          </p>
        </div>
        <div className="social flex gap-4 flex-wrap">
          {social.map((ele, index) => {
            return (
              <>
                <button
                  className="img w-[25.22px] h-[25px] bg-[#0C96E2] rounded-full flex justify-center items-center"
                  key={index}
                >
                  <Link to={ele.url}>
                    <img src={ele.img} alt="social-img" />
                  </Link>
                </button>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
