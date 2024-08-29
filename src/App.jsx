import { useState } from 'react'
import {HashRouter, Routes, Route } from 'react-router-dom'
import Welcome from './components/welcome.jsx'
import Login from './components/login.jsx'
import Feed from './components/Feed.jsx'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Feed" element={<Feed />} />
      </Routes>
    </HashRouter> 
  );
}

export default App
