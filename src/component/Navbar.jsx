import React from "react";
import style from "../style/navbar.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { TbUniverse } from "react-icons/tb";

function Navbar() {
  return (
    <div id={style.container}>
      <div id={style.logoContainer}>
        <div className={style.logoicon}>
          <TbUniverse />
        </div>
        <div id={style.logo}>nova</div>
      </div>
      <div id={style.links}>
        <div>
          Buisness checking{" "}
          <div className={style.icon}>
            <MdKeyboardArrowDown />
          </div>
        </div>
        <div>
          Solution
          <div className={style.icon}>
            <MdKeyboardArrowDown />
          </div>
        </div>
        <div>
          Resources{" "}
          <div className={style.icon}>
            <MdKeyboardArrowDown />
          </div>
        </div>
        <div>Result</div>
        <div>
          Contact{" "}
          <div className={style.icon}>
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
      <div id={style.thirdDiv}>
        <div>Login</div>
        <div id={style.getStarted}>
          <div id={style.GetStartedicon}>
            <GoArrowUpRight />
          </div>
          Get Started{" "}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
