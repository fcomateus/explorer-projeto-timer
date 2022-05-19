import Controls  from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
//named import
import {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOff,
  buttonSoundOn,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"
import Events from "./events.js"

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

const sound = Sound();

const events = Events({controls, timer, sound});


buttonPlay.addEventListener('click', function() {
  // controls.play();
  // timer.countdown();
  // sound.pressButton();
  events.play();
})

buttonPause.addEventListener('click', function() {
  // controls.pause();
  // timer.hold();
  // sound.pressButton();
  events.pause();
})

buttonStop.addEventListener('click', function() {
  // controls.reset();
  // timer.reset();
  // sound.pressButton();
  events.stop();
})

buttonSoundOff.addEventListener('click', function() {
  // buttonSoundOn.classList.remove('hide');
  // buttonSoundOff.classList.add('hide');
  // sound.bgAudio.pause();
  events.soundOff();
})

buttonSoundOn.addEventListener('click', function() {
  // buttonSoundOn.classList.add('hide');
  // buttonSoundOff.classList.remove('hide');
  // sound.bgAudio.play();
  events.soundOn();
})

buttonSet.addEventListener('click', function() {
  // let newMinutes = controls.getMinutes();
  
  // if(!newMinutes){
  //   timer.reset();
  //   return;
  // }

  // timer.updateDisplay(newMinutes, 0);
  // timer.updateMinutes(newMinutes);
  events.updateMinutes();
})
