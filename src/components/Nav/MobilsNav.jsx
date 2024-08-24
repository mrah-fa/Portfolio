import { IoClose } from "react-icons/io5";
import { Navlinks } from "./../../data";
import MainButton from "../elements/MainButton/MainButton";
import { Link } from "react-router-dom";
import { useState } from "react";
const MobilsNav = ({ setToggleNav }) => {
  const [activeItem, setActiveItem] = useState("");
  return (
    <div className="mobile-sidebar fixed bg-[#dfe1fae0] dark:bg-[#1b2431dc]  max-w-[270px] w-full h-[100vh] right-0 top-0 z-[900] py-[85px] px-[20px] flex flex-col items-center justify-center">
      <div className="content pt-16">
        <IoClose
          className="close-icon absolute top-[90px] left-5"
          fontSize={30}
          color="#0C96E2"
          onClick={() => setToggleNav(false)}
        />
        <div className="add2 bg-[#0C96E2] w-[26px] h-[26px] rounded-full absolute top-[9rem] left-[11rem] "></div>
        <div className="add21 bg-[#7DE0EA] w-[49.41px] h-[49.41px] rounded-xl absolute left-[13rem] top-48 rotate-45  "></div>
        <div className="add  bg-[#7B55EC]  w-4 h-4 absolute rounded-full left-[13rem] top-[17rem]   "></div>
        <ul className="mobile-sidebar-items hidden flex-col items-center gap-5 max-[992px]:flex">
          {Navlinks.map((element, index) => {
            return (
              <li
                className={`font-semibold text-base text-text-slate-950 dark:text-white ${
                  activeItem === element ? "active" : ""
                }`}
                key={index}
                onClick={() => {
                  setActiveItem(element);
                }}
              >
                <Link to={element.path}>{element.title}</Link>
              </li>
            );
          })}
        </ul>
        <div className="btn absolute top-[90px] right-[50px] max-w-7 w-full block">
          <MainButton title="mode" />
        </div>
        <div className="add2 bg-[#7DE0EA] w-[26px] h-[26px] rounded-full absolute top-[32rem] left-[5.7rem]"></div>
        <div className="one w-4 h-4 rounded-full bg-[#0C96E2] absolute top-[26rem] right-[15rem]"></div>
        <div className="one w-[49.41px] h-[49.41px] rounded-xl bg-[#583FBC] absolute top-[29rem] right-[12.75rem] rotate-45"></div>
      </div>
    </div>
  );
};

export default MobilsNav;
