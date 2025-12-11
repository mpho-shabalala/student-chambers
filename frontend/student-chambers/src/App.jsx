import { useState } from 'react'
// import './App.css'
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from './assets/components/shared/ScrollToTop';
import Homepage from './pages/Homepage'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Booking from './pages/Booking'

function App() {
  return (
     <HashRouter>
        <ScrollToTop/>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="booking-form" element={<Booking />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="why-us" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
     </HashRouter>
  )
}

export default App
