import ContactInfo from "../ContactInfo/ContactInfo";
import SendMessage from "../SendMassege/SendMassege";
export default function Contact({ title, para, span }) {
  return (
    <>
      <section id="contact">
        <div className="container max-w-[100vw] w-full pt-24 px-[70px] dark:bg-bg-black bg-white max-[992px]:px-12 max-[992px]:pt-12 ">
          <p className="font-medium text-xl text-[#0C96E2]">{title}</p>
          <h1 className=" text-text-slate-950 dark:text-white font-semibold text-[40px]  max-[992px]:text-[26px]">
            {para}{" "}
            <span className="text-[#0C96E2] font-semibold text-[40px] max-w-[360px]  max-[992px]:text-[26px]">
              {" "}
              {span}{" "}
            </span>
          </h1>
          <div className="bottom pt-14 gap-8 flex justify-between items-start flex-wrap pb-[94px] border-b border-[#BEC0BF]">
            <ContactInfo />
            <SendMessage />
          </div>
        </div>
      </section>
    </>
  );
}
