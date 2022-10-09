import React from "react";
import styled from "styled-components";
import playroom from "../image/playroom.jpg";
import openview from "../image/openroom.jpg";
import lobby from "../image/lobbya1.jpg";
import golf from "../image/golf.jpg";
import { Link,useParams } from "react-router-dom";



import icon from "../icon/Fill 4.png";
function Image360gallery() {
  return (
    <Wrapper>
      <Link to={`/wind/thuvien/1`} className="image-box">
        <img alt="360" src={playroom} />
      </Link>
      <Link to={`/wind/thuvien/2`} className="image-box">
        <img alt="360" src={openview} />
      </Link>
      <Link to={`/wind/thuvien/3`} className="image-box">
        <img alt="360" src={lobby} />
      </Link>
      <Link to={`/wind/thuvien/4`}className="image-box">
        <img alt="360" src={golf} />
      </Link>
    </Wrapper>
  );
}
const Wrapper = styled.div`
height: 92.37%;

  padding: 6px;
  
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows : 50% 50%;
  text-align: center;
  overflow: hidden;
  gap: 6px;
  .image-box {
    height: 100%;
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor : pointer;
    &:hover img {
     opacity : 0.8;
    }
    img {
      width:100%;
      height:100%;
      z-index: -1;
      // flex:1
      
    }
  }
`;

export default Image360gallery;
