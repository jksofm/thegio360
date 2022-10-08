import React from 'react'
import styled from 'styled-components'
import Guide from '../components/Guide'
import Image360 from '../components/Image360'
import Image360gallery from '../components/Image360gallery'
import Menu from '../components/Menu'
import image1 from '../image/1.jpg'

function Gallery({guide,handleGuide}) {
  return (
    <Wrapper>
         {guide &&  <Guide guide={guide} handleGuide={handleGuide} /> }
      <Image360gallery />
      <Menu handleGuide={handleGuide}/>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  height: 100vh;
  position: relative;
`

export default Gallery