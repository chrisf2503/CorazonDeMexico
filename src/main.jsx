import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './Pages/home.jsx'
import History from './Pages/history.jsx'
import Contact from './Pages/contact.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Nosotros" element={<History/>}/>
      <Route path='/Contacto' element={<Contact/>}/>
    </Routes>
  </BrowserRouter>, 
)
