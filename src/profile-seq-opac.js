import React, { Component } from "react";
import { AnimationSequence, Animatable } from 'react-web-animation';

export default class profile extends Component {

  constructor() {
        super();
        this.state = {
            currentTime: 0,
            playState: 'running'
        };
        this.isRemovable = false ;
    }

    getKeyFrames() {
        return [
            { transform: 'scale(1)',    opacity: 0,     offset: 0 },
            { transform: 'scale(.5)',   opacity: 0.5,   offset: 0.3 },
            { transform: 'scale(.667)', opacity: 0.667, offset: 0.7875 },
            { transform: 'scale(.6)',   opacity: 0,   offset: 1 }
        ];
    }

    getKeyFrames1() {
        return [
            { transform: 'scale(.1)',    opacity: 0,     offset: 0 },
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
            iterations: 1,
            direction: 'alternate',
            fill: 'forwards'
        };
    }

 render() {
  return(
  <div className="page_profile">
  <AnimationSequence
           playState={this.state.playState}
           currentTime={this.state.currentTime}
         >
         <Animatable.div
                   id="1"
                   keyframes={this.getKeyFrames()}
                   timing={this.getTiming(2000)}

                 >
      <h1>Profile</h1>
        <p>Hello from the profile page!</p>

        </Animatable.div>
                <Animatable.div
                  id="2"
                  keyframes={this.getKeyFrames1()}
                  timing={this.getTiming(4000)}
                  style={{opacity:0}}
                >

        <h1>Profile 2</h1>
        <p>Goodbye from the profile page!</p>

        </Animatable.div>

           </AnimationSequence>

  </div>
  );
 }
}
