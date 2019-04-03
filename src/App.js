import React, { Component } from 'react';
import  GenerateEmployee  from  './components/GenerateEmployee';
import  DisplaySimpson  from  './components/DisplaySimpson';

import logo from './logo.svg';
import './App.css';

const sampleSimpson = {
  
    quote: "Shoplifting is a victimless crimelike punching someone in the dark.",
    character: "Nelson Muntz",
    image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
    characterDirection : "Left"
    
   }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // on peut mettre notre sampleEmployee par défaut
      // afin d'avoir toujours un employé d'affiché
      simpson:  sampleSimpson
    };
  }

  getEmployee() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response  =>  response.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          simpson:  data[0],
        });
    });
}

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <GenerateEmployee  selectEmployee={() =>  this.getEmployee()} />
        <DisplaySimpson  simpson={this.state.simpson}  />
      </div>
    );
  }
}

export default App;
