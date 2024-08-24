import Logo from "../elements/Logo/Logo";
import MainButton, { ThemeContext } from "../elements/MainButton/MainButton";
import MobilsNav from "./MobilsNav";
import NavItems from "./NavItems";
import { Navlinks } from "./../../data";
import { CiMenuFries } from "react-icons/ci";
import { useContext, useState } from "react";
export default function Nav() {
  const [toggleNav, setToggleNav] = useState(false);
  const theme = useContext(ThemeContext);
  return (
    <>
      <div className="container z-[10000]">
        <nav className="dark:bg-bg-black z-[10000] bg-white p-p-16 flex justify-between items-center h-[90px] fixed left-0 top-0 w-full max-[768px]:h-[70px]">
          <Logo name="Marh" />
          <NavItems links={Navlinks} />
          <div className="btn max-[992px]:hidden">
            <MainButton />
          </div>
          <CiMenuFries
            fontSize={40}
            fontWeight={800}
            color="#0C96E2"
            className="menu-icon hidden max-[992px]:block"
            onClick={() => setToggleNav(true)}
          />
        </nav>
      </div>
      {toggleNav && <MobilsNav setToggleNav={setToggleNav} />}
    </>
  );
}
