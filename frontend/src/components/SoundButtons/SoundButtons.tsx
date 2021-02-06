import React, {Component} from 'react';
import { Howl, Howler } from 'howler';

const audioClips = [
  {mp3: '../../../public/assets/Cat.mp3', webm: '../../../public/assets/Cat.webm', label: "Cat"},
  {mp3: '../../../public/assets/Dog.mp3', webm: '../../../public/assets/Dog.webm', label: "Dog"},
  {mp3: '../../../public/assets/Dog.mp3', webm: '../../../public/assets/Dog.webm', label: "Mjau"}
]


class SoundButtons extends Component {


  RenderButtonAndSound = () => {
    return audioClips.map((soundObj, index) => {
      console.log(soundObj);
      return (
        <button key={index} onClick={() => {this.SoundPlay(soundObj.mp3, soundObj.webm)}}>
          {soundObj.label}
        </button>
      )
    })
  }

  render() {
    Howler.volume(1.0);
    return(
    <div>
      {this.RenderButtonAndSound()}
    </div>
    )}
}

export default SoundButtons;