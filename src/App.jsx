import { useState } from 'react'
import {HashRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/welcome.jsx';
import Login from './components/login.jsx'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter> 
  );
}

export default App
