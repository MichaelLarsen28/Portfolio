import React from 'react';
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

function App() {
  return (
    <div className="App">
        <Helmet>
          <title>Michael Larsen | Software Engineer</title>
        </Helmet>
        <Intro />
        <AboutMe />
        <Academic/>
        <Professional/>
        <Teamwork/>
        <Research/>
        <Footer/>

    </div>
  );
}

export default App;
