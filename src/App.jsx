import React, { useState } from 'react';

import './App.css'
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { constant } from './utils/constants'
// import About from './Components/About'; 

export default function App() {
  const [textBtn, settextBtn] = useState("Dark mode enable");
  const [darkMode, setdarkMode] = useState("dark"); //whether dark mode enable or not 
  // document.body.style.backgroundColor = 'lightslategrey' ;

  const togleMode = () => {
    if (darkMode === "dark") {

      setdarkMode("light");
      settextBtn("light mode enabled");
      document.body.style.backgroundColor = 'white';
    }
    else {
      setdarkMode("dark");
      settextBtn("dark mode enabled");
      document.body.style.backgroundColor = 'darkslategrey';
    }
  }
  return (

    <>

      < Navbar title="TextUtil" home="Home" mode={darkMode} text={textBtn} toggle={togleMode} />
      <TextForm heading={constant.heading} mode={darkMode} />

      {/*       <About  /> */}

    </>
  );
} 
