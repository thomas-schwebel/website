import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Resume from './pages/resume';
import Photos from './pages/photos';
import Code from './pages/code';


export default function Tschwebel() {

  var grid_not_supported = typeof document.createElement('div').style.grid !== 'string';
  if (grid_not_supported) {
      alert("Sorry you need a proper internet browser in order to use this website... Redirecting to PDF version...");
      window.location = `${process.env.PUBLIC_URL}/resume.pdf`;
  }

  return (
    <div className="content">
      <Router>
          <Switch>
            <Route exact path="/" component={Resume} />
            <Route exact path="/photos" component={Photos} />
            <Route exact path="/code" component={Code} />
          </Switch>
      </Router>
    </div>
  );
}
