import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../components/Menu'

function SharedLayout({loadnewscene,setCurrentscene,currentscene}) {
  return (
    <>
    <Outlet />
    <Menu setCurrentscene={setCurrentscene} currentscene={currentscene} loadnewscene={loadnewscene}/>
    </>
  )
}

export default SharedLayout