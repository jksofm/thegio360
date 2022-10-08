import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import image1 from "../image/1.jpg";
import image2 from "../image/2.jpg";
import image3 from "../image/3.jpg";
import image4 from "../image/4.jpg";

import arrowleft from "../icon/arrowleft.png";
import arrowright from "../icon/arrowright.png";
import backicon from "../icon/backicon.png";
import { Link,useParams } from "react-router-dom";




function GallerySingle() {
    const [mainImage,setMainImage] = useState(null)
    const [currentIndex,setCurrentIndex] = useState(0)
    console.log(currentIndex)
    const handleImage = (value)=>{
    if(value=="next"){
        console.log("next")
            setCurrentIndex(currentIndex + 1);

    }else{
        console.log("prev")

 setCurrentIndex(currentIndex - 1)
    }
    }
    let { id } = useParams();
    const data = [
        {
            id:1,
            mainimage: image1,
            thumbimages : [image1,image2,image3,image4]

        },
        {
            id:2,
            mainimage: image2,
            thumbimages : [image1,image2,image3,image4]

        },
        {
            id:3,
            mainimage: image3,
            thumbimages : [image1,image2,image3,image4]

        },
        {
            id:4,
            mainimage: image4,
            thumbimages : [image1,image2,image3,image4]

        }

    ]
 
    
    useEffect(()=>{
        data.forEach((item)=>{
       
            if(item.id==id){
                
                setMainImage(item.mainimage)
            }
        })
    },[id])
    
    
  return (
    <Wrapper>
    <img className='main-image' src={mainImage} />
    <div className='thumbs'>
        {data.map((item)=>{
         
               if(item.id== id){
               
                return (

                    item.thumbimages.map((eachthumb,key)=>{
                        return (
                            <div key={key} onClick={()=>{
                                setMainImage(item.thumbimages[currentIndex]);
                                setCurrentIndex(key)
                            }} className={eachthumb==mainImage ? "thumb-image active" : "thumb-image"}>
       
                            <img  src={eachthumb} />
                                </div>
                        )
                    })
                )
                      
             
                   
               }

        })}
   
   
    </div>
    <div onClick={()=>handleImage("prev")} className="arrow left">
        <img src={arrowleft}></img>
    </div>
    <div onClick={()=>handleImage("next")} className="arrow right">
        <img src={arrowright}></img>
    </div>
    <div className="back">
        <Link to="/the-gio/thuvien">
        <img src={backicon}></img>
        
        </Link>
   
    </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
height: 100vh;
position: relative;
.main-image{
position: absolute;
top:0;
left:0;
bottom:0;
width:100%;
height:100%;

transition : all 0.3s linear;
}
.back{
 position: absolute;
 top: 5%;
 left: 3%;

}
.arrow {
 position: absolute;
 top:50%;
 transform: translateY(-50%);
 cursor: pointer;
}
.left{
    left: 3%;

}
.right{
 right:3%;
}
.thumbs{
    position:absolute;
    bottom: 2%;
    gap :   8px;
   padding :8px;
    height:10%;
    background-color:
    rgba(242, 242, 242, 0.7);
    left:50%;
    transform: translateX(-50%);
    width: 92%;
    border-radius : 4px;
    display: flex;
   
   
    

    .thumb-image{
        width: 8.62%;
        padding :2px;
        background-color:white;
        border-radius : 4px;
        cursor : pointer;
        img{
            width:100%;
            height:100%;
            border-radius :4px;

        }
    }



}
.thumb-image.active{
    border: 1px solid   red;
}
@keyframes slide {
    from {
     opacity : 0;
     transform : translateY(-50%)
    }to{
        opacity : 1;
     transform : translateY(0)


    }
}



`
export default GallerySingle