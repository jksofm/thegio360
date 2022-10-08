import React, { useState } from 'react'
import styled from "styled-components";
import Image360 from '../components/Image360';
import Menu from '../components/Menu';
import Mode from '../components/Mode';
import image2 from "../image/2.jpg";
import image1 from "../image/1.jpg";

import image3 from "../image/3.jpg";
import image4 from "../image/4.jpg";
import Guide from '../components/Guide';

function HouseSample({guide,handleGuide}) {
  const [image,setImage] = useState(image3)
  const handleClick = (value) =>{
    setImage(value)
}
  const data = [
    {
      id: 1,
      image: image3,
      text: "Hồ bơi"
    },
    {
      id: 2,
      image: image4,
      text: "Công viên"
    }
    ,
    {
      id: 3,
      image: image1,
      text: "Khu Vui Chơi Trẻ Em"
    },
    {
      id: 4,
      image: image2,
      text: "Trường mầm non"
    }
  ]
  return (
    <Wrapper>
    <Image360 url={image} />
    <Mode data={data} currentImage={image} handleClick={handleClick} />
    <Menu handleGuide={handleGuide} />
    {guide &&  <Guide guide={guide} handleGuide={handleGuide} /> }
  </Wrapper>
  )
}
const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  .mode {
    position: absolute;
    width: 25.57%;
    height: 6.57%;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(242, 242, 242, 0.7);
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    padding: 6px;

    align-items: center;
    gap: 6px;
    .mode-item {
      /* box-sizing: border-box; */
      flex: 33.33%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
      border-radius: 8px;
      height: 100%;
      
      cursor: pointer;
      h3 {
        padding: 0;
        margin: 0;
        font-family: "Google Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 23px;
        color: #959595;
        letter-spacing: 1px;
      }
    }
    .mode-item.active {
      background: linear-gradient(180deg, #efd7af 0%, #d7b295 100%);
      /* color/w */

      border: 1px solid #ffffff;
      border-radius: 8px;
      h3{
        font-weight: 700;
        color : white;
      }
    }
  }
`;

export default HouseSample