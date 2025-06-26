import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [randomOutput, setRandomOutput] = useState('');

  const generateRandomNumber = () => {
    const num = Math.floor(Math.random() * 100);
    setRandomOutput(num);
  };

  const generateRandomLetter = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letter = letters[Math.floor(Math.random() * letters.length)];
    setRandomOutput(letter);
  };

  const getDescription = () => {
    if (activeSection === 'number') {
      return 'You have selected the "Random Numbers" section. Click the button above to generate a random number between 0 and 99.';
    } else if (activeSection === 'letter') {
      return 'You have selected the "Random Letters" section. Click the button above to generate a random uppercase letter from A to Z.';
    } else {
      return 'Click on "Random Numbers" or "Random Letters" to begin.';
    }
  };

  return (
    <div className="container">
      <h1 className="title">Random Generator</h1>

      <div className="section-toggle">
        <h2 onClick={() => { setActiveSection('number'); setRandomOutput(''); }}>
          Random Numbers
        </h2>
        <h2 onClick={() => { setActiveSection('letter'); setRandomOutput(''); }}>
          Random Letters
        </h2>
      </div>

      {activeSection && (
        <div className="generator">
          <button
            className="generate-btn"
            onClick={activeSection === 'number' ? generateRandomNumber : generateRandomLetter}
          >
            Generate Random {activeSection === 'number' ? 'Number' : 'Letter'}
          </button>

          <div className="output">
            {randomOutput !== '' && <strong>Result: {randomOutput}</strong>}
          </div>
        </div>
      )}

      <div className="description">
        <p>{getDescription()}</p>
      </div>
    </div>
  );
}

export default App;
