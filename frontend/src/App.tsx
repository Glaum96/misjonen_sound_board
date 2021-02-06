import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SoundButton from './components/SoundButton/SoundButton';

function App() {

  const audioURL:string = "../../assets/Cat.mp3";

  return (
    <div className="App">
      <Header/>
      <SoundButton/>
    </div>
  );
}

export default App;
