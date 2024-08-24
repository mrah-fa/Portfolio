export default function SendMessage() {
  return (
    <>
      <div className="input ">
        <form action="" className="flex flex-col gap-6">
          <div className="top flex gap-6 flex-wrap ">
            <input
              type="text"
              placeholder="Full Name"
              className=" max-w-[375.53px] h-[56px] pl-[15.78px] py-4 rounded-lg border-[0.3px] border-[#BEC0BF] dark:bg-bg-black max-[544px]:max-w-[777.78px] max-[544px]:w-full"
            />
            <input
              type="text"
              placeholder="Email"
              className=" max-w-[375.53px] h-[56px] pl-[15.78px] py-4 rounded-lg border-[0.3px] border-[#BEC0BF] dark:bg-bg-black  max-[544px]:max-w-[777.78px] max-[544px]:w-full"
            />
          </div>
          <input
            type="text"
            placeholder="Phone Number"
            className=" max-w-[777.78px] w-full h-[56px] pl-[15.78px] py-4 rounded-lg border-[0.3px] border-[#BEC0BF] dark:bg-bg-black"
          />
          <textarea
            type="text"
            placeholder="Message"
            className=" max-w-[777.78px] w-full h-[170px] pl-[15.78px] py-4  rounded-lg border-[0.3px] border-[#BEC0BF] dark:bg-bg-black"
          ></textarea>
          <button
            type="submit"
            className="max-w-[200px] w-full h-[50px] rounded-lg bg-[#0C96E2] text-white py-[15px] px-[20px] "
          >Send Massege</button>
        </form>
      </div>
    </>
  );
}
