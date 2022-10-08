import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../image/logo.png";

function Menu({active,handleGuide}) {
  return (
    <Wrapper>
      <div className="line-top"></div>
      <div onClick={()=>handleGuide(true)} className="logo">
        <img src={logo} alt="logo" className="logo-img"></img>
      </div>
      <ul className="menu-list">
        <li className={active ? `menu-item active` : `menu-item`}>
          <svg
            className="menu-icon"
            width="25"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M320 64c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64zm-96 96c-35.3 0-64 28.7-64 64v48c0 17.7 14.3 32 32 32h1.8l11.1 99.5c1.8 16.2 15.5 28.5 31.8 28.5h38.7c16.3 0 30-12.3 31.8-28.5L318.2 304H320c17.7 0 32-14.3 32-32V224c0-35.3-28.7-64-64-64H224zM132.3 394.2c13-2.4 21.7-14.9 19.3-27.9s-14.9-21.7-27.9-19.3c-32.4 5.9-60.9 14.2-82 24.8c-10.5 5.3-20.3 11.7-27.8 19.6C6.4 399.5 0 410.5 0 424c0 21.4 15.5 36.1 29.1 45c14.7 9.6 34.3 17.3 56.4 23.4C130.2 504.7 190.4 512 256 512s125.8-7.3 170.4-19.6c22.1-6.1 41.8-13.8 56.4-23.4c13.7-8.9 29.1-23.6 29.1-45c0-13.5-6.4-24.5-14-32.6c-7.5-7.9-17.3-14.3-27.8-19.6c-21-10.6-49.5-18.9-82-24.8c-13-2.4-25.5 6.3-27.9 19.3s6.3 25.5 19.3 27.9c30.2 5.5 53.7 12.8 69 20.5c3.2 1.6 5.8 3.1 7.9 4.5c3.6 2.4 3.6 7.2 0 9.6c-8.8 5.7-23.1 11.8-43 17.3C374.3 457 318.5 464 256 464s-118.3-7-157.7-17.9c-19.9-5.5-34.2-11.6-43-17.3c-3.6-2.4-3.6-7.2 0-9.6c2.1-1.4 4.8-2.9 7.9-4.5c15.3-7.7 38.8-14.9 69-20.5z" />
          </svg>
          <Link className="menu-link" to="/the-gio">
            TOÀN CẢNH 360
          </Link>
          <div className="line"></div>
        </li>
        <li className="menu-item">
          <svg
            className="menu-icon"
            width="25"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M320 64c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64zm-96 96c-35.3 0-64 28.7-64 64v48c0 17.7 14.3 32 32 32h1.8l11.1 99.5c1.8 16.2 15.5 28.5 31.8 28.5h38.7c16.3 0 30-12.3 31.8-28.5L318.2 304H320c17.7 0 32-14.3 32-32V224c0-35.3-28.7-64-64-64H224zM132.3 394.2c13-2.4 21.7-14.9 19.3-27.9s-14.9-21.7-27.9-19.3c-32.4 5.9-60.9 14.2-82 24.8c-10.5 5.3-20.3 11.7-27.8 19.6C6.4 399.5 0 410.5 0 424c0 21.4 15.5 36.1 29.1 45c14.7 9.6 34.3 17.3 56.4 23.4C130.2 504.7 190.4 512 256 512s125.8-7.3 170.4-19.6c22.1-6.1 41.8-13.8 56.4-23.4c13.7-8.9 29.1-23.6 29.1-45c0-13.5-6.4-24.5-14-32.6c-7.5-7.9-17.3-14.3-27.8-19.6c-21-10.6-49.5-18.9-82-24.8c-13-2.4-25.5 6.3-27.9 19.3s6.3 25.5 19.3 27.9c30.2 5.5 53.7 12.8 69 20.5c3.2 1.6 5.8 3.1 7.9 4.5c3.6 2.4 3.6 7.2 0 9.6c-8.8 5.7-23.1 11.8-43 17.3C374.3 457 318.5 464 256 464s-118.3-7-157.7-17.9c-19.9-5.5-34.2-11.6-43-17.3c-3.6-2.4-3.6-7.2 0-9.6c2.1-1.4 4.8-2.9 7.9-4.5c15.3-7.7 38.8-14.9 69-20.5z" />
          </svg>
          <Link className="menu-link" to="/the-gio/tienich">
            TIỆN ÍCH 360
          </Link>
          <div className="line"></div>
        </li>
        <li className="menu-item">
          <svg
            className="menu-icon"
            width="25"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M320 64c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64zm-96 96c-35.3 0-64 28.7-64 64v48c0 17.7 14.3 32 32 32h1.8l11.1 99.5c1.8 16.2 15.5 28.5 31.8 28.5h38.7c16.3 0 30-12.3 31.8-28.5L318.2 304H320c17.7 0 32-14.3 32-32V224c0-35.3-28.7-64-64-64H224zM132.3 394.2c13-2.4 21.7-14.9 19.3-27.9s-14.9-21.7-27.9-19.3c-32.4 5.9-60.9 14.2-82 24.8c-10.5 5.3-20.3 11.7-27.8 19.6C6.4 399.5 0 410.5 0 424c0 21.4 15.5 36.1 29.1 45c14.7 9.6 34.3 17.3 56.4 23.4C130.2 504.7 190.4 512 256 512s125.8-7.3 170.4-19.6c22.1-6.1 41.8-13.8 56.4-23.4c13.7-8.9 29.1-23.6 29.1-45c0-13.5-6.4-24.5-14-32.6c-7.5-7.9-17.3-14.3-27.8-19.6c-21-10.6-49.5-18.9-82-24.8c-13-2.4-25.5 6.3-27.9 19.3s6.3 25.5 19.3 27.9c30.2 5.5 53.7 12.8 69 20.5c3.2 1.6 5.8 3.1 7.9 4.5c3.6 2.4 3.6 7.2 0 9.6c-8.8 5.7-23.1 11.8-43 17.3C374.3 457 318.5 464 256 464s-118.3-7-157.7-17.9c-19.9-5.5-34.2-11.6-43-17.3c-3.6-2.4-3.6-7.2 0-9.6c2.1-1.4 4.8-2.9 7.9-4.5c15.3-7.7 38.8-14.9 69-20.5z" />
          </svg>
          <Link className="menu-link" to="/the-gio/nhamau">
            NHÀ MẪU 360
          </Link>
          <div className="line"></div>
        </li>
        <li className="menu-item">
          <svg
            className="menu-icon"
            width="25"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M320 64c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64zm-96 96c-35.3 0-64 28.7-64 64v48c0 17.7 14.3 32 32 32h1.8l11.1 99.5c1.8 16.2 15.5 28.5 31.8 28.5h38.7c16.3 0 30-12.3 31.8-28.5L318.2 304H320c17.7 0 32-14.3 32-32V224c0-35.3-28.7-64-64-64H224zM132.3 394.2c13-2.4 21.7-14.9 19.3-27.9s-14.9-21.7-27.9-19.3c-32.4 5.9-60.9 14.2-82 24.8c-10.5 5.3-20.3 11.7-27.8 19.6C6.4 399.5 0 410.5 0 424c0 21.4 15.5 36.1 29.1 45c14.7 9.6 34.3 17.3 56.4 23.4C130.2 504.7 190.4 512 256 512s125.8-7.3 170.4-19.6c22.1-6.1 41.8-13.8 56.4-23.4c13.7-8.9 29.1-23.6 29.1-45c0-13.5-6.4-24.5-14-32.6c-7.5-7.9-17.3-14.3-27.8-19.6c-21-10.6-49.5-18.9-82-24.8c-13-2.4-25.5 6.3-27.9 19.3s6.3 25.5 19.3 27.9c30.2 5.5 53.7 12.8 69 20.5c3.2 1.6 5.8 3.1 7.9 4.5c3.6 2.4 3.6 7.2 0 9.6c-8.8 5.7-23.1 11.8-43 17.3C374.3 457 318.5 464 256 464s-118.3-7-157.7-17.9c-19.9-5.5-34.2-11.6-43-17.3c-3.6-2.4-3.6-7.2 0-9.6c2.1-1.4 4.8-2.9 7.9-4.5c15.3-7.7 38.8-14.9 69-20.5z" />
          </svg>
          <Link className="menu-link" to="/the-gio/thuvien">
            THƯ VIỆN 360
          </Link>
        </li>
      </ul>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background: #467184;
  box-shadow: 0px -2px 6px rgba(5, 37, 51, 0.16);
  /* border-radius: 16px 16px 0px 0px; */
  height: 10%;
  z-index:100;
  
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 20.625% auto;
  align-items: center;
  .menu-list {
    display: grid;
    
    grid-template-columns: 25% 25% 25% 25%;
    height: 100%;
    .menu-item {
      text-align: center;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      transition: all 0.3 linear;
      &:hover {
       
        background: linear-gradient(180deg, #efd7af 0%, #d7b295 100%);
        /* color/w */
        cursor: pointer;
        border: 1px solid #ffffff;
        border-radius: 16px 16px 0px 0px;
        transform : scale(1.18) translateX(-10px);
      transition: all 0s linear;

        
      }
      &:hover .line{
        display: none;
      }
      &:hover .menu-link{
        font-weight: 600;
        font-size: 16px;
      }
      .menu-icon {
        font-size: 12px;
      }
    }
    .menu-link {
      font-family: "Google Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 31px;
      margin-left: 14px;
      /* identical to box height */

      text-align: center;
      text-transform: uppercase;

      color: #ffffff;
    }
  }
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img {
      width: 32.58%;
      height: 95%;
    }
  }
  .line {
    height: 100%;
    position: absolute;
    width: 1px;
    background-image: linear-gradient(to bottom, #467184, #e6c29e);
    bottom: 0;
    right: 0;
  }
  .line-top {
    left: 0px;
    top: -5px;
    position: absolute;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 13px 13px 0px 0px;
    height: 5px;
    width: 100%;
  }
  .active{
        background: linear-gradient(180deg, #efd7af 0%, #d7b295 100%);
        /* color/w */
        cursor: pointer;
        border: 1px solid #ffffff;
        border-radius: 16px 16px 0px 0px;
  }
  .active .line {
    display: none;
  }
  .active .menu-link{
        font-weight: 600;
      }
`;

export default Menu;
