import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { animenu } from './js/animenu';

import profile from "./profile";
import library from "./library";
import explore from "./explore";
import settings from "./settings";

class App extends Component {
  componentDidMount(){
    animenu();
  }

  render() {
    return (
      <div> {/*without this div cant render*/}
        <div className="wrapper">
          <figure>
          	<div className="phone"></div>
          	<div className="profile"></div>
          		<div className="list" >
          			<li><i className="fa fa-user" aria-hidden="true"></i><Link to="/">&nbsp;&nbsp;Profile</Link></li>
          			<li><i className="fa fa-file-image-o" aria-hidden="true"></i><Link to="/library">&nbsp;&nbsp;Library</Link></li>
          			<li><i className="fa fa-compass" aria-hidden="true"></i><Link to="/explore">&nbsp;&nbsp;Explore</Link></li>
          			<li><i className="fa fa-cog" aria-hidden="true"></i><Link to="/settings">&nbsp;&nbsp;Settings</Link></li>
          		</div>
          		<div id="menu"></div>
          		<div id="back"></div>
          		<div id="jelly"></div>
          </figure>
        </div>
      <div className="content">
        <Route exact path="/" component={profile} />
        <Route exact path="/library" component={library} />
        <Route exact path="/explore" component={explore} />
        <Route exact path="/settings" component={settings} />
      </div>
    </div>
    );
  }
}

export default App;
