import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import logotitre from './logotitre.svg';
import actu from './Icon Actualites.svg';
import compte from './Icon compte.svg';
import pokedex from './Icon pokedex.svg';
import quizz from './Icon quiz.svg';
import scan from './Icon scan.svg';
import image from './Palmier.png'

function App() {
  const canvasRef = useRef(null);
  return (
    <div className="App">
      <div className="rectangle-container">
        <div className="rectangle">
          <header className="App-header">
            <img src={logotitre} className="logotitre" alt="Logotitre" />
            <canvas ref={canvasRef} className="hidden"></canvas>
            <p className="text">
              Découvre la plante !
            </p>
            <img className="Palmier" alt="" src={image} />

            <button className="button">Découvrir</button>
          </header>
          <div className='footer'>
              <img src={actu} className="icon" alt="Actualites" />
              <img src={quizz} className="icon" alt="quiz" />
              <img src={scan} className="icon" alt="Scan" />
              <img src={pokedex} className="icon" alt="pokedex" />
              <img src={compte} className="icon" alt="compte" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
