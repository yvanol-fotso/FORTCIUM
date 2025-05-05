
import './App.css';
import React from 'react';
import SignUp from './components/auth/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export default function () {
  return(
    <Routes>
      <Route path="/signin" element={<SignUp/>}/>
    </Routes>
  )
}
