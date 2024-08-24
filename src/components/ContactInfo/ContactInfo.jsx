import { Input } from "../../data";

export default function ContactInfo() {
  return (
    <div className="left flex flex-col gap-6">
      {Input.map((ele, index) => {
        return (
          <>
            <div
              className="group1 flex gap-[19.88px] max-[360px]:gap-3 py-6 items-center"
              key={index}
            >
              <div className="img w-[61.85px] h-[56px] rounded-lg bg-[#0C96E2] flex justify-center items-center">
                <img src={ele.img} alt="" className="w-[25.13px] h-22.75px" />
              </div>
              <div className="detailes flex flex-col gap-4">
                <p className="font-normal text-base text-[#92929D] leading-[18px]">
                  {ele.title}
                </p>
                <p className="font-medium break-all text-base text-text-slate-950 dark:text-white leading-[18px] max-[360px]:text-[14px] ">
                  {ele.det}
                </p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
