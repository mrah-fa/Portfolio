import { useState } from "react";
export default function NavItems({ links }) {
  const [activeItem, setActiveItem] = useState("");
  return (
    <>
      <ul
        className="nav-items z-[670] flex items-center gap-6 max-[992px]:hidden"
      >
        {links.map((el, index) => {
          return (
            <li
              className={`font-medium text-base dark:text-white text-text-slate-950 `}
              key={index}
              onClick={() => {
                setActiveItem(el);
              }}
            >
              <a
                href={el.path}
                className={`scroll-smooth text-[15px] font-medium  ${
                  activeItem === el ? "active" : ""
                } text-text-slate-950 dark:text-white transition-[0.4s]`}
                title={el.descPage}
              >
                {el.title}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
