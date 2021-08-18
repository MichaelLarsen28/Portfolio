import React from 'react';
//Helmet is used to set the title tag of the web page
import { Helmet } from "react-helmet";

import MenuBar from "./components/MenuBar/MenuBar";
import Intro from "./sections/Intro";
import Academic from "./sections/Academic";
import Professional from "./sections/Professional";
import Teamwork from "./sections/Teamwork";
import Leadership from "./sections/Leadership";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="App">
        <Helmet>
          <title>Michael Larsen | Software Engineer</title>
        </Helmet>
        <MenuBar />
        <Intro />
        <Academic/>
        <Professional/>
        <Teamwork/>
        <Leadership/>
        <Footer/>

    </div>
  );
}

export default App;
