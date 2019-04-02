import React, { Component } from 'react';
import Particles from 'react-particles-js';
//import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Sign from './components/Signin/Signin'; 
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
    
  }            
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onImputChange = (event) => {
    console.log(event.target.value);
  }

  onSubmit = () => {
    console.log('click');
  }
  render() {
    return (
      <div className="App">
      <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation />
        <Sign />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition />
      </div>
    );
  }
}

export default App;
