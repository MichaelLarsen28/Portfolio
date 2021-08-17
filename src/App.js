import React from 'react';
//Helmet is used to set the title tag of the web page
import { Helmet } from "react-helmet";

import Intro from "./sections/Intro";
import Body from "./sections/Body";

function App() {
  return (
    <div className="App">
        <Helmet>
          <title>Michael Larsen | Software Engineer</title>
        </Helmet>

        <Intro />
        <Body/>

    </div>
  );
}

export default App;
