import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Guide from '../components/Guide'
import Image360 from '../components/Image360'
import Menu from '../components/Menu'
import liftlobby from '../image/liftlobby.jpg'
import image2 from "../image/2.jpg";
import image1 from "../image/1.jpg";
import image4 from "../image/4.jpg";
import Mode from '../components/Mode'
import useKrpano from 'react-krpano-hooks'


function GeneralView({guide,handleGuide,loadnewscene,setCurrentscene,currentscene}) {
  const [image,setImage] = useState("../file360/wind-360/index.html?startscene=scene_view_from_river")
  // const [currentscene,setCurrentscene] = useState(null);
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

  useEffect(()=>{
    loadnewscene(currentscene)
  },[currentscene])
  useEffect(()=>{
      setCurrentscene("scene_view_from_river")
      console.log('river')
  },[])

  const handleClick = (value) =>{
        setImage(value)
  }

  const data = [
    {
      id: 1,
    
      text: "Ban ngày",
      url: "../file360/wind-360/index.html?startscene=scene_view_from_river",
      scene: 'scene_view_from_river',
    },
    {
      id: 2,
   
      text: "Ban đêm",
      url: "../file360/wind-360/index.html?startscene=scene_overview_sunset",
      scene: 'scene_overview_sunset',


    }
    ,
    {
      id: 3,
      
      text: "View tổng",
      url: "../file360/wind-360/index.html?startscene=scene_overview",
      scene: 'scene_overview',
      

    }
  ]
  return (
    <Wrapper>
    {/* {guide &&  <Guide guide={guide} handleGuide={handleGuide} /> } */}
   
    <Image360 containerRef={containerRef} url={image}/>
    <Mode setCurrentscene={setCurrentscene} loadnewscene={loadnewscene} data={data} currentImage={image} width="32.65%" handleClick={handleClick} />
    
  </Wrapper>
  )
}
const Wrapper = styled.div`
  height: 100vh;
  position: relative;
`



export default GeneralView