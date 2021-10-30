import React, { useState } from "react";
import "./Slider.css";
import ImgComp from "./ImgComp";
import i1 from "../../images/12.jpg";
import i2 from "../../images/13.jpg";
import i3 from "../../images/14.jpg";
import i4 from "../../images/15.jpg";
import i5 from "../../images/17.jpg";
import i6 from "../../images/18.jpg";
import i7 from "../../images/20.jpg";
import i8 from "../../images/21.jpg";
import i9 from "../../images/22.jpg";
import i10 from "../../images/2.jpeg";
import i11 from "../../images/24.jpg";
import i12 from "../../images/25.jpg";
import i13 from "../../images/26.jpg";
import i14 from "../../images/27.jpg";
import i15 from "../../images/28.jpg";
import i16 from "../../images/29.jpg";
import i17 from "../../images/30.jpg";
import i18 from "../../images/31.jpg";
import i19 from "../../images/32.jpg";
import i20 from "../../images/33.jpg";
import i21 from "../../images/34.jpg";
import i22 from "../../images/35.jpg";
import i23 from "../../images/4.png";
import i24 from "../../images/37.jpg";
import i25 from "../../images/38.jpg";
import i26 from "../../images/39.jpg";
import i27 from "../../images/40.jpg";

function Slider() {
  let sliderArr = [
    <ImgComp src={i1} />,
    <ImgComp src={i2} />,
    <ImgComp src={i3} />,
    <ImgComp src={i4} />,
    <ImgComp src={i5} />,
    <ImgComp src={i6} />,
    <ImgComp src={i7} />,
    <ImgComp src={i8} />,
    <ImgComp src={i9} />,
    <ImgComp src={i10} />,
    <ImgComp src={i11} />,
    <ImgComp src={i12} />,
    <ImgComp src={i13} />,
    <ImgComp src={i14} />,
    <ImgComp src={i15} />,
    <ImgComp src={i16} />,
    <ImgComp src={i17} />,
    <ImgComp src={i18} />,
    <ImgComp src={i19} />,
    <ImgComp src={i20} />,
    <ImgComp src={i21} />,
    <ImgComp src={i22} />,
    <ImgComp src={i23} />,
    <ImgComp src={i24} />,
    <ImgComp src={i25} />,
    <ImgComp src={i26} />,
    <ImgComp src={i27} />,
  ];

  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };
  return (
    <>
      {/* <h3 className="cont">Foto</h3> */}
      <div className="slider" id="/Slider">
        {sliderArr.map((item, index) => {
          return (
            <div
              key={index}
              className="slide"
              style={{ transform: `translateX(${x}%)` }}
            >
              {item}
            </div>
          );
        })}
        <button id="goLeft" className="btn" onClick={goLeft}>
          <i className="fa fa-chevron-left"></i>
        </button>
        <button id="goRight" className="btn" onClick={goRight}>
          <i className="fa fa-chevron-right"></i>
        </button>
      </div>
    </>
  );
}

export default Slider;
