import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import './index.css'
import Home from './Pages/home.jsx'
import History from './Pages/history.jsx'
import Contact from './Pages/contact.jsx'
import Gallary from './Pages/gallary.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/nosotros" element={<History/>}/>
      <Route path="/contacto" element={<Contact/>}/>
      <Route path="/galeria" element={<Gallary/>}/>
      <Route path="/Galería" element={<Gallary/>}/>
    </Routes>
    <SpeedInsights />
    <Analytics />
  </BrowserRouter>, 
  
)
