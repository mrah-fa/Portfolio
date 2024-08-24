export default function RiskFree({ title, paragraph, span, btn, arrow }) {
  return (
    <>
      <div className="container relative">
        <div className="content px-[136px] py-[120px] flex flex-wrap gap-10 max-[1122px]:p-20 max-[460px]:p-10 max-[334px]:p-8 justify-between items-center max-w-[1169px] w-full bg-[#583FBC] rounded-[32px]">
          <div className="left flex flex-col gap-4 justify-center">
            <h1 className="font-semibold text-white text-5xl max-[992px]:text-[20px] max-[370px]:text-lg">
              {title}
            </h1>
            <p className="font-normal text-xl text-white max-w-[500.18px] w-full max-[992px]:text-[18px] max-[370px]:text-sm  ">
              {paragraph}{" "}
              <span className="font-bold text-xl max-[640px]:text-lg max-[370px]:text-base">
                {span}
              </span>
            </p>
          </div>
          <div className="right z-[340]">
            <button className=" max-w-[155px] z-auto  w-full pl-[40.59px] pb-[14px] h-[50px] cursor-pointer rounded-md text-white pt-[12px] pr-[23.49px] bg-[#0C96E2] border-none text-sm font-semibold">
              <a
                title="Go To Contact Section"
                href="#contact"
                className="flex  justify-center items-center gap-[12.43px]"
              >
                {btn} <img src={arrow} alt="" />
              </a>
            </button>
          </div>
          <div className="vec absolute w-full bottom-0  left-0 h-full max-[992px]:hidden">
            <img
              src="/img/vec-bot.png"
              className="h-[382px]  max-w-[1179.69px] w-full absolute left-[-6px] top-0 pb-16 max-[1122px]:pb-0]"
              alt=""
            />
            <img
              src="/img/vec-mid.png"
              className="h-[334.14px] max-w-[1179.69px] w-full absolute left-[-6px] top-0 pb-4"
              alt=""
            />
            <img
              src="/img/vec-top.png"
              className="h-[288.81px] max-w-[1179.69px] w-full absolute left-[-6px] top-[2.6rem] pb-4"
              alt=""
            />
          </div>
        </div>
        <div className="blue -skew-y-[1.5deg] px-[136px] -z-10 py-[120px]  max-[640px]:px-[32px] max-[640px]:py-[32px] max-[992px]:h-[100%] bg-[#0C96E2] max-w-[1182px] w-full h-[350px] rounded-[32px] absolute left-[-9px] max-[1122px]:h-[100%] top-[2px]"></div>
      </div>
    </>
  );
}
