import useSound from 'use-sound';
import audio from "../../assets/Cat.mp3";

function SoundButton() {
  const [play] = useSound(audio);

  return (
    <div>
      <button onClick={() => play}>Ja morna</button>
    </div>
  );
}

export default SoundButton;

