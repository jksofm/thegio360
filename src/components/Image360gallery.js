import React from "react";
import styled from "styled-components";
import image1 from "../image/1.jpg";
import image2 from "../image/2.jpg";
import image3 from "../image/3.jpg";
import image4 from "../image/4.jpg";
import { Link,useParams } from "react-router-dom";



import icon from "../icon/Fill 4.png";
function Image360gallery() {
  return (
    <Wrapper>
      <Link to={`/the-gio/thuvien/1`} className="image-box">
        <img alt="360" src={image1} />
      </Link>
      <Link to={`/the-gio/thuvien/2`} className="image-box">
        <img alt="360" src={image2} />
      </Link>
      <Link to={`/the-gio/thuvien/3`} className="image-box">
        <img alt="360" src={image3} />
      </Link>
      <Link to={`/the-gio/thuvien/4`}className="image-box">
        <img alt="360" src={image4} />
      </Link>
    </Wrapper>
  );
}
const Wrapper = styled.div`
height: 92.37%;

  padding: 6px;
  
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows : 50% 50%;
  gap: 6px;
  .image-box {
    height: 100%;
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
