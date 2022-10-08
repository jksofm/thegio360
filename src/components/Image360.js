import React from 'react'
import styled from 'styled-components'
import image from '../image/1.jpg'
import icon from '../icon/Fill 4.png'
function Image360({url,playbtn}) {
    var url_string = window.location.href;
  // var url = new URL(url_string);
  // var params = url.searchParams.get("startscene");
  // if (params == null) {
  //   $('#render').find('iframe').show()
  // } else if (params.length != 0) {
  //   $('#render').find('iframe').attr('src', 'file/360/index.html?startscene=' + params)
  //   $('#render').find('iframe').show()
  // }
  return (
    <Wrapper>
      <div id="render">
        <iframe src="file360/the-gio-360/index.html" style="border: 0,width:100%,height:100%"></iframe>
      </div>
        <img className="image-360" alt="360" src={url} />
        {playbtn && <div className="play-btn">
        <div className='layer'></div>
            <img className="image-btn" alt="Play Button" src={icon} />
        </div>}
        
    </Wrapper>
  )
}
const Wrapper = styled.div`
  height: 92.37%;

  position: relative;
  .image-360{
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .layer{
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
  .play-btn{

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
    .image-btn{
       width: 33.33%;
       height: 35%;
    }
    #render {

    }
  }
`

export default Image360