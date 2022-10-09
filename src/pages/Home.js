import React, { useState } from 'react'
import styled from 'styled-components'
import Guide from '../components/Guide'
import Image360 from '../components/Image360'
import Menu from '../components/Menu'
import sauna from '../image/sauna.jpg'


function Home({guide,handleGuide}) {
 
  return (
    <Wrapper>
      {guide &&  <Guide guide={guide} handleGuide={handleGuide} /> }
     
      <Image360 imagenormal url={sauna} playbtn/>
      
    </Wrapper>
  )
}
const Wrapper = styled.div`
  height: 100vh;
  position: relative;
`

export default Home