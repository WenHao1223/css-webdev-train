import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// css
import './App.css'

// pages
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Error from './pages/Error';

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
          <Route path="/terms-of-use" element={<TermsOfUse/>}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}></Route>
          <Route path="/shared" element={<SharedNavbar/>}>
            <Route path="*" element={<Error/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;