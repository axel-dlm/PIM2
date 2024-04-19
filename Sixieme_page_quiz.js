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
            <p className="text_1"> QUIZ</p>
            <p className="text_2">
            Quelle herbe est sur la pizza ?
            </p>
            <button className="button1">Lavande</button>
            <button className="button2">Basilic</button>
            <button className="button3">Paquerette</button>
          </header>
          <button className="button4">Valider</button>
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
