import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image360 from "../components/Image360";
import Menu from "../components/Menu";
import Mode from "../components/Mode";
import image2 from "../image/2.jpg";
import image1 from "../image/1.jpg";

import image3 from "../image/3.jpg";
import image4 from "../image/4.jpg";
import Guide from "../components/Guide";
import useKrpano from 'react-krpano-hooks'


function Utility({guide,handleGuide,loadnewscene,setCurrentscene,currentscene}) {
  const [image,setImage] = useState("../file360/wind-360/index.html?startscene=scene_pool")
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

  const handleClick = (value) =>{
        setImage(value)
  }
  useEffect(()=>{
    setCurrentscene("scene_pool")
    console.log('river')
},[])

  const data = [
    {
      id: 1,
   
      text: "Hồ bơi",
      url: "../file360/wind-360/index.html?startscene=scene_pool",
      scene: 'scene_pool',

    },
    {
      id: 2,
    
      text: "Sân tennis",
      url: "../file360/wind-360/index.html?startscene=scene_tennis",
      scene: 'scene_tennis',


      
    }
    ,
    {
      id: 3,
    
      text: "Khu vui chơi trẻ em",
      url: "../file360/wind-360/index.html?startscene=scene_kid",
      scene: 'scene_kid',

      


    },
    {
      id: 4,
     
      text: "Trung tâm thương mại",
      url: "../file360/wind-360/index.html?startscene=scene_mall",
      scene: 'scene_mall',


    }
  ]
  return (
 
    <Wrapper>
     
      <Mode setCurrentscene={setCurrentscene} loadnewscene={loadnewscene} width="46%" data={data} currentImage={image} handleClick={handleClick} />
      <Image360 containerRef={containerRef} url={image} />
      {/* {guide &&  <Guide guide={guide} handleGuide={handleGuide} /> } */}
    </Wrapper>
   
  );
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

export default Utility;
