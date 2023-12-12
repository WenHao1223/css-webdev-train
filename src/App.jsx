import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// css
import './App.css'

// pages
import SignUp from './SignUp';
import SignIn from './SignIn';
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
          <Route path="/" element={<SignUp/>}></Route>
          <Route path="/sign-in" element={<SignIn/>}></Route>
          <Route path="/shared" element={<SharedNavbar/>}>
            <Route path="*" element={<Error/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;