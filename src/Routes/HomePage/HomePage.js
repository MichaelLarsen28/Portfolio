import React from 'react';
//Helmet is used to set the title tag of the web page
import { Helmet } from "react-helmet";

import MenuBar from "./components/MenuBar";

function HomePage() {
  return (
    <div className="App">
        <Helmet>
          <title>Michael Larsen | Software Engineer</title>
        </Helmet>

        <MenuBar />
    </div>
  );
}

export default HomePage;
