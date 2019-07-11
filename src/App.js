import React from 'react';
import logo from './logo.svg';
import './App.css';
import More from './More';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Game Theory</h1>
      </header>
      <div className="container">
        Game theory is the study of how people strategically interact in games.
        <More>
          Games count as anything that involves decisions and multiple people, like chess, but also many business situations.
        </More>
        An example of a game theory is the Prisoner's dilemma, where asymmetric awards and punishments cause competitive behaviour.
        <More>
          Competitive behaviour <More>Behaviour is how you act.</More> means that each person is trying to get the best outcome, sometimes sacrificing others in the process.
        </More>
      </div>
    </div>
  );
}

export default App;
