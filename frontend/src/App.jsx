import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import SignUp from './pages/signUp';
import "./App.css"
import Login from "./pages/Login"


const App = () => {
  return (
    <> 
      <BrowserRouter>
        <RouteHandler/>
      </BrowserRouter>
    </>
  )
}

const RouteHandler = () => {
   return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
       <Route path="*" element={<NoPage />} />
    </Routes>
   )
}



export default App
