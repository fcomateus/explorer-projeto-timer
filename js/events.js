import { 
        buttonSoundOff,
        buttonSoundOn, 
      } from "./elements.js"

export default function Events({controls, timer, sound}) {
  

  function play() {
    controls.play();
    timer.countdown();
    sound.pressButton();
  }

  function pause() {
    controls.pause();
    timer.hold();
    sound.pressButton();
  }

  function stop() {
    controls.reset();
    timer.reset();
    sound.pressButton();
  }

  function soundOff() {
    buttonSoundOn.classList.remove('hide');
    buttonSoundOff.classList.add('hide');
    sound.bgAudio.play();
  }
  
  function soundOn() {
    buttonSoundOn.classList.add('hide');
    buttonSoundOff.classList.remove('hide');
    sound.bgAudio.pause();
  }

  function updateMinutes(){
    let newMinutes = controls.getMinutes();
    
    if(!newMinutes){
      timer.reset();
      return;
    }

    timer.updateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes);
  }

  return {
    play,
    pause,
    stop,
    soundOff,
    soundOn,
    updateMinutes
  }
}