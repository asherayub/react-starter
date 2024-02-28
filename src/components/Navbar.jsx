import { useState } from "react";
import Button from "./Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const links = [
  {
    text: "services",
    to: "#",
  },
  {
    text: "portfolio",
    to: "#",
  },
  {
    text: "about us",
    to: "#",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="uppercase mx-8 lg:mx-32 flex justify-between items-center h-[120px]">
      <img className="" src="../../assets/logo.svg" alt="Web Olympus Logo" />

      <div className="">
        <span
          className="text-2xl lg:hidden"
          onClick={() => setToggle((prev) => !prev)}
        >
          {toggle ? <IoMdClose /> : <RxHamburgerMenu />}
        </span>
        <ul
          className={`${
            toggle ? "flex" : "hidden lg:flex"
          } items-center gap-12 lg:flex-row flex-col justify-between absolute top-[120px] left-0 right-0 bg-primary h-1/2 w-full p-10 lg:static`}
        >
          {links.map((link, _) => {
            return (
              <li key={_}>
                <a
                  className="p-1 relative before:absolute before:w-0 hover:before:w-full before:transition-all before:h-[1px] before:bottom-0 before:left-0 before:bg-white"
                  href={link.to}
                >
                  {link.text}
                </a>
              </li>
            );
          })}
          <span className="lg:hidden block">
            <Button text={"contact us"} />
          </span>
        </ul>
      </div>
      <span className="hidden lg:block">
        <Button text={"contact us"} />
      </span>
    </nav>
  );
};

export default Navbar;
