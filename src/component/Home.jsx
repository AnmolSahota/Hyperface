import React from "react";
import style from "../style/home.module.css";
import { GoArrowUpRight } from "react-icons/go";
import img from "../image/image.avif";
import img_2 from "../image/img_2.avif";
function Home() {
  return (
    <>
      <div id={style.mainContainer}>
        <div>
          <div id={style.capital}>
            <div>All your Buisness banking in one platform</div>
          </div>
          <div id={style.para}>
            Take your buisness to new heights with faster cash flow and clear
            financial insights all with free Novo Account Apply in 10 Minutes
          </div>
          <div id={style.getStarted}>
            <div id={style.GetStartedicon}>
              <GoArrowUpRight />
            </div>
            Get Started{" "}
          </div>
          <div id={style.allready}>
            Allready Started?{" "}
            <span style={{ color: "orange" }}>finish your application</span>
          </div>
        </div>
        <div id={style.imgContianer}>
          <img src={img}></img>
        </div>
        <div id={style.img2Container}>
          <img src={img_2}></img>
          <div id={style.mainLastContainer}>
            <div>
              <div id={style.getStarted} style={{ margin: "20px 0px" }}>
                <div id={style.GetStartedicon}>
                  <GoArrowUpRight />
                </div>
                Get Started{" "}
              </div>
              <div id={style.lastpara}>
                <div>instant Card Control</div>
                <div>
                  Monitor all your purchase in one place and your purchase in
                  one place and{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
