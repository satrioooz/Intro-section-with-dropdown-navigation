import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './pages/Nav'
import Home from './pages/Home/Home'
import Features from './pages/Features/Features'

const Routers = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Nav/>}>
                <Route index element={<Home/>}/>
                <Route path="/features" element={<Features/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Routers