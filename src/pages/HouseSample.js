import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import Image360 from '../components/Image360';
import Menu from '../components/Menu';
import Mode from '../components/Mode';
import image2 from "../image/2.jpg";
import image1 from "../image/1.jpg";

import image3 from "../image/3.jpg";
import image4 from "../image/4.jpg";
import Guide from '../components/Guide';
import useKrpano from 'react-krpano-hooks'


function HouseSample({guide,handleGuide,loadnewscene,setCurrentscene,currentscene}) {
  const [image,setImage] = useState("../file360/wind-360/index.html?startscene=scene_landscape")
  // const [currentscene,setCurrentscene] = useState("scene_pool");
  const { containerRef,callKrpano,setKrpano } = useKrpano({
    globalFunctions: {
      logNewScene: (scene) => {
        console.log('New scene: ', scene)
      },
    },
  })
  useEffect(()=>{},[
    callKrpano(`loadscene(${currentscene}, null, MERGE);`),
    // setKrpano(`layer[${currentscene}]`,0)

 ],[currentscene])
  useEffect(()=>{},[
    loadnewscene(currentscene)
 ],[currentscene])
 useEffect(()=>{
  setCurrentscene("scene_landscape")
  console.log('river')
},[])

  const handleClick = (value) =>{
    setImage(value)
}



  const data = [
    {
      id: 1,
      
      text: "Căn 1PN",
      url: "../file360/wind-360/index.html?startscene=scene_landscape",
      scene: 'scene_landscape'

    },
    {
      id: 2,
    
      text: "Căn 2PN",
      url: "../file360/wind-360/index.html?startscene=scene_pool_night",
      scene: 'scene_pool_night'
    }
    ,
    
   
  ]
  return (
    <Wrapper>
    <Image360 containerRef={containerRef} url={image} />
    <Mode setCurrentscene={setCurrentscene} loadnewscene={loadnewscene} data={data} currentImage={image} width="20%" handleClick={handleClick} />

    {/* {guide &&  <Guide guide={guide} handleGuide={handleGuide} /> } */}
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