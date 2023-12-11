import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// css
import './App.css'

// pages
import SignUp from './SignUp';
import Error from './Error';

// shared components
import SharedNavbar from './components/SharedNavbar';

// import { Carousel, initTE } from "tw-elements";
// initTE({ Carousel });

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedNavbar/>}>
            <Route index element={<SignUp/>}></Route>
            <Route path="*" element={<Error/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;