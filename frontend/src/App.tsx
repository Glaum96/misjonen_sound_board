import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SoundButtons from './components/SoundButtons/SoundButtons';

function App() {

  const audioURL:string = "../../assets/Cat.mp3";

  return (
    <div className="App">
      <Header/>
      <SoundButtons/>
    </div>
  );
}

export default App;
