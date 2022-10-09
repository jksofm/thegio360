import React, { useEffect, useState } from "react";
import styled from "styled-components";

import bathroom from "../image/bathroom.jpg";
import billardroom from "../image/billardroom.jpg";
import danceroom from "../image/danceroom.jpg";
import eventroom from "../image/eventroom.jpg";
import golf from "../image/golf.jpg";
import guestroom from "../image/guestroom.jpg";
import gymroom from "../image/gymroom.jpg";
import kararoom from "../image/kararoom.jpg";
import kidroom from "../image/kidroom.jpg";
import libraryroom from "../image/libraryroom.jpg";
import openroom from "../image/openroom.jpg";
import playroom from "../image/playroom.jpg";
import yogaroom from "../image/yogaroom.jpg";
import sauna from "../image/sauna.jpg";
import arrowleft from "../icon/arrowleft.png";
import arrowright from "../icon/arrowright.png";
import arrowlefthover from "../icon/arrowlefthover.png";
import arrowrighthover from "../icon/arrowrighthover.png";
import backiconhover from "../icon/backhover.png"

import backicon from "../icon/backicon.png";
import hoverthumb from "../image/hoverthumb.png";

import { Link, useParams } from "react-router-dom";

function GallerySingle() {
  const [mainImage, setMainImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lefthover, setLefthover] = useState(false);
  const [righthover, setRighthover] = useState(false);
  const [hoverthumbstate,setHoverthumbstate] = useState(false);
  const [backstate, setBackstate] = useState(false);

  console.log(currentIndex);
  const handleImage = (value) => {
    if (value == "next") {
      console.log("next");
      data.map((item) => {
        if (item.id == id) {
          if (currentIndex > item.imagearray.length - 1) {
            setCurrentIndex(0);
            return;
          }
         

          setCurrentIndex(currentIndex + 1);
        }
      });
    } else {
      console.log("prev");
      data.map((item) => {
        if (item.id == id) {
          if (currentIndex < 0) {
            setCurrentIndex(0);

            return;
          }

          setCurrentIndex(currentIndex - 1);
        }
      });
    }
  };

  let { id } = useParams();
  const data = [
    {
      id: 1,
      mainimage: guestroom,
      imagearray: [
        bathroom,
        billardroom,
        danceroom,
        eventroom,
        golf,
        guestroom,
        gymroom,
        kararoom,
        yogaroom,
      ],
    },
    {
      id: 2,
      mainimage: yogaroom,

      imagearray: [
        bathroom,
        billardroom,
        danceroom,
        eventroom,
        golf,
        guestroom,
        gymroom,
        kararoom,
        yogaroom,
      ],
    },
    {
      id: 3,
      mainimage: danceroom,

      imagearray: [
        bathroom,
        billardroom,
        danceroom,
        eventroom,
        golf,
        guestroom,
        gymroom,
        kararoom,
        yogaroom,
      ],
    },
    {
      id: 4,
      mainimage: golf,

      imagearray: [
        bathroom,
        billardroom,
        danceroom,
        eventroom,
        golf,
        guestroom,
        gymroom,
        kararoom,
        yogaroom,
      ],
    },
  ];

  useEffect(() => {
    data.forEach((item) => {
      if (item.id == id) {
        setMainImage(item.mainimage);
      }
    });
  }, [id]);
  useEffect(() => {
    data.map((item) => {
      if (item.id == id) {
        if (currentIndex > item.imagearray.length - 1) {
          setMainImage(item.imagearray[0]);
          return;
        }
        if (currentIndex < 0) {
          setMainImage(item.imagearray[item.imagearray.length - 1]);
          return;
        }

        setMainImage(item.imagearray[currentIndex]);
      }
    });
  }, [currentIndex]);

  return (
    <Wrapper>
      <img className="main-image" src={mainImage} />
      <div className="thumbs">
        {data.map((item) => {
          if (item.id == id) {
            return item.imagearray.map((eachthumb, key) => {
              return (
                <div
                  key={key}
                  onClick={() => {
                    setMainImage(item.imagearray[currentIndex]);

                    setCurrentIndex(key);
                  }}
                  // onMouseDown={() => {
                  //   setHoverthumbstate(true)
                  // }}
                  // onMouseLeave={() => {
                  //   setHoverthumbstate(false)
                  // }}
                  className={
                    eachthumb == mainImage
                      ? "thumb-image active"
                      : "thumb-image"
                  }
                >
                  {/* {hoverthumbstate && <img className="hoverthumb" src={hoverthumb} />} */}
                  <img src={eachthumb} />
                </div>
              );
            });
          }
        })}
      </div>
      <div onMouseOver={()=>setLefthover(true)} onMouseLeave={()=>setLefthover(false)} onClick={() => handleImage("prev")} className="arrow left">
        <img src={lefthover ? arrowlefthover : arrowleft} alt="Arrow Left"></img>
      </div>
      <div onMouseOver={()=>setRighthover(true)} onMouseLeave={()=>setRighthover(false)} onClick={() => handleImage("next")} className="arrow right">
        <img src={righthover ? arrowrighthover : arrowright} alt="Arrow Right"></img>
      </div>
      <div  className="back">
        <Link  onMouseOver={()=>setBackstate(true)} onMouseLeave={()=>setBackstate(false)}   to="/wind/thuvien">
          <img src={backstate ? backiconhover : backicon} alt="Back" />
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  .main-image {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
   

    transition: all 0.3s linear;
  }
  .back {
    position: absolute;
    top: 5%;
    left: 3%;
  }
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  .left {
    left: 3%;
  }
  .right {
    right: 3%;
  }
  .thumbs {
    position: absolute;
    bottom: 2%;
    gap: 8px;
    padding: 8px;
    height: 10%;
    background-color: rgba(242, 242, 242, 0.7);
    left: 50%;
    transform: translateX(-50%);
    width: 92%;
    border-radius: 4px;
    display: flex;

    .thumb-image {
      width: 8.62%;
      position: relative;
      background-color: white;
      border-radius: 4px;
      /* display: flex;
      align-items: center;
      justify-content: center; */
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }
      &:hover {
        opacity: 0.5;
      }
      .hovethumb{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
      }
    }
  }
  .thumb-image.active {
    border: 3px solid #D7B295;
  }
  @keyframes slide {
    from {
      opacity: 0;
      transform: translateY(-50%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
export default GallerySingle;
