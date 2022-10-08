
import './index.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Utility from './pages/Utility';
import GeneralView from './pages/GeneralView';
import HouseSample from './pages/HouseSample';
import Gallery from './pages/Gallery';
import GallerySingle from './pages/GallerySingle';

function App() {
  const [guide,setGuide] = useState(false);
  const handleGuide=(value)=>{
    setGuide(value)
  }
  // var url_string = window.location.href;
  // var url = new URL(url_string);
  // var params = url.searchParams.get("startscene");
  // if (params == null) {
  //   $('#render').find('iframe').show()
  // } else if (params.length != 0) {
  //   $('#render').find('iframe').attr('src', 'file/360/index.html?startscene=' + params)
  //   $('#render').find('iframe').show()
  // }
  return (
  <Router>
    <Routes>
      <Route path="/the-gio" element={<Home guide={guide} handleGuide={handleGuide} />} />
      <Route path="/the-gio/tienich" element={<Utility  guide={guide} handleGuide={handleGuide} />} />
      <Route path="/the-gop/toancanh" element={<GeneralView  guide={guide} handleGuide={handleGuide} />} />
      <Route path="/the-gio/nhamau" element={<HouseSample  guide={guide} handleGuide={handleGuide} />} />
      <Route path="/the-gio/thuvien" element={<Gallery  guide={guide} handleGuide={handleGuide} />} />
      <Route path="/the-gio/thuvien/:id" element={<GallerySingle  guide={guide} handleGuide={handleGuide} />} />

    </Routes>
  </Router>
  );
}

export default App;
