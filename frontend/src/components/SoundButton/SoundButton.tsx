/*
import React from 'react';

function SoundButton() {

    function playSound() {
        console.log("HEI")
    }

    const cat = require("../../assets/Cat.mp3");

  return (
    <div>
      <button onClick={playSound}>Ja morna</button>
      <audio src={cat} controls/>
    </div>
  );
}

export default SoundButton;
*/

import React, { useState, useEffect } from "react";

const useAudio = (url: string) => {
  console.log("QEIFNIWE");
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
        console.log("wfoewjfi");
        setPlaying(!playing);
    }

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const SoundButton = ( url ) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button onClick={() => toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

export default SoundButton;
