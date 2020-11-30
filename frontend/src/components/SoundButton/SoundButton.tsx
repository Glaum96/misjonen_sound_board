import React from 'react';

function SoundButton() {

  let audio = new Audio("../../assets/Cat.mp3");


  function playSound() {
    console.log("HEI");
    audio.play().catch((err) => console.log(err));
}
  return (
    <div>
      <button onClick={playSound}>Ja morna</button>
    </div>
  );
}

export default SoundButton;
