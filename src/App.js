import React, {useState, useEffect} from 'react';
//Helmet is used to set the title tag of the web page
import { Helmet } from "react-helmet";

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
     setLoading(false)
   }, 5000)
  }, [])

  return (
    <div className="App">
    <Helmet>
      <title>Michael Larsen | Software Engineer</title>
    </Helmet>
    {
      loading ?
      <div className="loading-container">
         <HashLoader color={"#1221ff"} loading={loading} size={60} />
         </div>
      :
          <React.Fragment>
            <Intro/>
            <AboutMe />
            <Academic/>
            <Professional/>
            <Teamwork/>
            <Research/>
            <Footer/>
          </React.Fragment>
    }

    </div>
  );
}

export default App;
