import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import Welcome from './components/welcome.jsx';
import './App.css'

function App() {
  return (
  <BrowserRouter>
    <Welcome/>
   </BrowserRouter>
  )
}

export default App
