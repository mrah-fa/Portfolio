import { Link } from "react-router-dom";

export default function TopSection({ title, desc, span, btn, img1, img2 }) {
  return (
    <>
      <div className="top max-w-[100vw] w-full dark:border-white dark:bg-bg-black bg-white ">
        <p className="font-medium text-xl text-[#0C96E2]">{title}</p>
        <div className="top flex justify-between items-end flex-wrap gap-8">
          <h1 className=" text-text-slate-950 dark:text-white max-w-[486px] w-full font-semibold text-[40px]  max-[992px]:text-[26px]">
            {desc}{" "}
            <span className="text-[#0C96E2] font-semibold text-[40px] max-w-[360px]  max-[992px]:text-[26px]">
              {" "}
              {span}{" "}
            </span>
          </h1>
          <button
            title="Go To GitHub Account"
            style={{ display: btn.show ? "block" : "none" }}
            className="btn max-w-[163.47px]  w-full h-[50px] bg-[#0C96E2] font-medium text-sm text-white rounded-md px-[11.54px] pb-[13px] pt-[16px] "
          >
            <Link
              to="https://github.com/marh-fa"
              className="justify-center flex  items-center gap-[3px]"
            >
              {btn.content}
              <img src={img1} alt="" />
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
