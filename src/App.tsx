import React from 'react';
import logo from './logo.svg';
import './App.css';
import CheckWeatherContainer from './containers/CheckWeatherContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CheckWeatherContainer />
      </header>
    </div>
  );
}

export default App;
