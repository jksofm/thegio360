
import './index.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Utility from './pages/Utility';
import GeneralView from './pages/GeneralView';
import HouseSample from './pages/HouseSample';
import Gallery from './pages/Gallery';
import GallerySingle from './pages/GallerySingle';
import Menu from './components/Menu';
import SharedLayout from './pages/SharedLayout';
import useKrpano from 'react-krpano-hooks'















function App() {
  const [guide,setGuide] = useState(false);
  const [currentscene,setCurrentscene] = useState("scene_overview");
  const { containerRef,callKrpano } = useKrpano({
    globalFunctions: {
      logNewScene: (scene) => {
        console.log('New scene: ', scene)
      },
    },
  })
  const loadnewscene = (scene) =>{
    callKrpano(`loadscene(${scene}, null, MERGE);`)
  }
  useEffect(()=>{
  
  setTimeout(()=>{
    handleGuide(true)
  },600)
  },[])
  const handleGuide=(value)=>{
    setGuide(value)
  }

  

  return (
  <Router>
    
    <Routes>
      <Route path="/wind" element={<SharedLayout currentscene={currentscene} setCurrentscene={setCurrentscene}  loadnewscene={loadnewscene} />}>

      <Route index path="/wind" element={<Home  guide={guide} handleGuide={handleGuide} />} />
      <Route  path="/wind/tienich" element={<Utility currentscene={currentscene} setCurrentscene={setCurrentscene} containerRef={containerRef} loadnewscene={loadnewscene}  guide={guide} handleGuide={handleGuide} />} />
      <Route path="/wind/toancanh" element={<GeneralView containerRef={containerRef} currentscene={currentscene} setCurrentscene={setCurrentscene} loadnewscene={loadnewscene}   guide={guide} handleGuide={handleGuide} />} />
      <Route path="/wind/nhamau" element={<HouseSample containerRef={containerRef} currentscene={currentscene} setCurrentscene={setCurrentscene} loadnewscene={loadnewscene}  guide={guide} handleGuide={handleGuide} />} />
      <Route path="/wind/thuvien" element={<Gallery  guide={guide} handleGuide={handleGuide} />} />
      </Route>
      <Route path="/wind/thuvien/:id" element={<GallerySingle   guide={guide} handleGuide={handleGuide} />} />

    </Routes>
  </Router>
  );
}

export default App;
