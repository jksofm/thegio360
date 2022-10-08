import React from 'react'
import styled from "styled-components";

function Mode({data,handleClick,currentImage}) {
  return (
    <Wrapper>
          
        {data.map((item)=>{
               return (

        <div className={currentImage===item.image? "mode-item active" : "mode-item"} onClick={()=>handleClick(item.image)}>
          <h3>{item.text}</h3>
        </div>
               )
        })}
      
      
    </Wrapper>
  )
}
const Wrapper = styled.div`
 
  
    position: absolute;
    width: 40.57%;
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
      text-align: center;
      
      cursor: pointer;
      h3 {
        padding: 0;
        margin: 0;
        font-family: "Google Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 12px;
        color: #959595;
        letter-spacing: 1px;
      }
    }
    .mode-item:hover{
        background: linear-gradient(180deg, #efd7af 0%, #d7b295 100%);
      /* color/w */

      border: 1px solid #ffffff;
      border-radius: 8px;
      h3{
        font-weight: 700;
        color : white;
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
  
`;
export default Mode