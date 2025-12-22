import { useState } from 'react'
// import './App.css'
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from './assets/components/shared/ScrollToTop';
import Homepage from './pages/Homepage'
import Rooms from './pages/Rooms'
import MapPage from './pages/MapPage'
import Gallery from './pages/Gallery'
import Booking from './pages/Booking'
import { ContactsProvider } from './contexts/ContactsContext';
import { LocationProvider } from './contexts/LocationContext';
import { RoomsProvider } from './contexts/roomsContext';
import { GalleryProvider } from './contexts/GalleryContext';
import { PropertyProvider } from './contexts/PropertyProvider';
import { BookingFormProvider } from './contexts/BookingContext';

function App() {
  return (
    <PropertyProvider>
    <ContactsProvider>
      <LocationProvider>
        <RoomsProvider>
          <GalleryProvider>
            <BookingFormProvider>
              
      <HashRouter>
        <ScrollToTop/>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="booking-form" element={<Booking />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="maps" element={<MapPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
     </HashRouter>
            
            </BookingFormProvider>
          </GalleryProvider>
        </RoomsProvider>
      </LocationProvider>
    </ContactsProvider>
    </PropertyProvider>
  )
}

export default App
