import React, { Component } from "react";
import { Animated } from 'react-web-animation';

export default class profile extends Component {
  constructor() {
        super();
        this.state = {
            currentTime: 0,
            playState: 'running'
        };
    }

    getKeyFrames() {
        return [
            { transform: 'scale(1)',    opacity: 1,     offset: 0 },
            { transform: 'scale(.5)',   opacity: 0.5,   offset: 0.3 },
            { transform: 'scale(.667)', opacity: 0.667, offset: 0.7875 },
            { transform: 'scale(.6)',   opacity: 0.6,   offset: 1 }
        ];
    }


    getTiming( duration ) {
        return {
            duration,
            easing: 'ease-in-out',
            delay: 0,
            iterations: 2,
            direction: 'alternate',
            fill: 'forwards'
        };
    }

 render() {
  return(
  <div className="page_profile">

   <Animated.div
             id="1"
             keyframes={this.getKeyFrames()}
         timing={this.getTiming(2500)}
         currentTime={this.state.currentTime}
           >
      <h1>Profile</h1>
        <p>Hello from the profile page!</p>

    </Animated.div>
    <Animated.div
              id="2"
              keyframes={this.getKeyFrames()}
          timing={this.getTiming(5000)}
          currentTime={this.state.currentTime}
            >

        <h1>Profile 2</h1>
        <p>Goodbye from the profile page!</p>

      </Animated.div>

  </div>
  );
 }
}
