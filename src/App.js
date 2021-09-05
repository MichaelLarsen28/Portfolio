import React, {useState, useEffect} from 'react';
//Helmet is used to set the title tag of the web page
import { Helmet } from "react-helmet";

import MenuBar from "./components/MenuBar/MenuBar";
import Intro from "./sections/Intro";
import AboutMe from "./sections/AboutMe";
import Academic from "./sections/Academic";
import Professional from "./sections/Professional";
import Teamwork from "./sections/Teamwork";
import Research from "./sections/Research";
import Footer from "./sections/Footer";

import HashLoader from "react-spinners/HashLoader";
import "./App.css";

function App() {
  return (
    <div className="App">
    <Helmet>
      <title>Michael Larsen | Software Engineer</title>
    </Helmet>
          <React.Fragment>
            <MenuBar />
            <Intro/>
            <AboutMe />
            <Academic/>
            <Professional/>
            <Teamwork/>
            <Research/>
            <Footer/>
          </React.Fragment>
    </div>
  );
}

export default App;
