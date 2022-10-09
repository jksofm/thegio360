import React from "react";
import styled from "styled-components";
import image from "../image/1.jpg";
import icon from "../icon/Fill 4.png";
import useKrpano from 'react-krpano-hooks'
function Image360({ url, playbtn, imagenormal,containerRef }) {

  return (
    
    <Wrapper>
      {imagenormal ? (
        <img className="image-360" alt="360" src={url} />
      ) : (
        <div className="image-360">
           <div ref={containerRef} style={{ width: '100%', height: '100%' }} ></div>
        </div>
      )}

      {playbtn && (
        <div className="play-btn">
          <div className="layer"></div>
          <img className="image-btn" alt="Play Button" src={icon} />
        </div>
      )}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 92.37%;

  position: relative;
  .image-360 {
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .layer {
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    border-radius: 50%;
  }
  .play-btn {
    width: 5.208%;
    height: 8.26%;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translateX(-50%) translateY(-45%);
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: white; */
    .image-btn {
      width: 33.33%;
      height: 35%;
    }
    #render {
    }
  }
`;

export default Image360;
