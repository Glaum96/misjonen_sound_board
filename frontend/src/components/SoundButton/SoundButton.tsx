import React from 'react';

function SoundButton() {

  function playSound() {
      console.log("HEI")
      audio.play();
  }

  const cat = require("../../assets/Cat.mp3");
  let audio = new Audio("../../assets/Cat.mp3");

  return (
    <div>
      <button onClick={playSound}>Ja morna</button>
      <audio src={cat} controls/>
    </div>
  );
}

export default SoundButton;
