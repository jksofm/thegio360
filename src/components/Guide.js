import React, { useEffect, useState } from "react";
import styled from "styled-components";
import handicon from "../icon/handicon.png"
import mouseicon from "../icon/mouseicon.png"
import guideimage from "../image/guide.png"

function Guide({ handleGuide }) {
 
  useEffect(()=>{
    console.log("guide")
  setTimeout(()=>{
    handleGuide(true)
  },1000)
  },[])
  return (
    <Wrapper>
      <div className="layer" onClick={() => handleGuide(false)}></div>
      <img className="guide" onClick={() => handleGuide(false)} src={guideimage} alt="Guide" />
      {/* <div className="modal">
        <h1>HƯỚNG DẪN THAO TÁC</h1>
        <div className="action">
        <img alt="handicon" className="handicon" src={handicon} />
        <span>hoặc</span>
        <img alt="mouseicon" className="mouseicon" src={mouseicon} />


        </div>
        <p>
          Chạm, di chuyển hoặc click vào từng vị trí tham quan để xem chi tiết
        </p>
        <button onClick={() => handleGuide(false)} className="btn">
          Đã hiểu
        </button>
      </div> */}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-image: transparent !important;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  
  .guide {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30.9%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 100;
    cursor: pointer;
    animation : guideshow 0.7s;


  }
  .layer {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 100;
  transition: all 0.4s linear;
  animation : guideshow 0.7s;


  }
  .mouseicon {
   
  }
  .handicon {

  }
  span {
    margin-left  : 12px;
    margin-right  : 12px;

  }
  .modal {
    position: absolute;
    width: 30.9%;
    height: 46.29%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background: linear-gradient(
      180deg,
      rgba(239, 215, 175, 0.8) 0%,
      rgba(215, 178, 149, 0.8) 100%
    );
    /* color/w */

    border: 1px solid #ffffff;
    border-radius: 16px;
    z-index: 101;
    text-align: center;
    padding: 25px;

    /* h1 {
      font-size: 24px;
      font-weight: 700;
      text-align: center;
      color: #ffffff;
      margin-bottom  : 11%
    }
    p {
      font-size: 14px;
      font-weight: 400;
      color: #ffffff;
      margin-bottom: 20px;
    }
    .btn {
      width: 32%;
      background: #ffffff;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
      border-radius: 99px;
      color: #264755;
      font-family: "Google Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      letter-spacing: 0.5px;
      Line height: 100%
      Align: Center;
      Vertical align: Center;
      Letter spacing: 4%;
    } */
  }
  @keyframes guideshow {
    from{
      /* transform: translateY(-50%); */
      visibility: hidden;
      opacity: 0;
    }
    to{
      opacity: 1;
   visibility: visible;
   /* transform: translateY(0); */

    }
  }
`;

export default Guide;
