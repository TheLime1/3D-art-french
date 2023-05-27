import * as THREE from 'three';

let sound;

// setup audio for the scene
export const setupAudio = (camera) => {
  const listener = new THREE.AudioListener(); // create an audio listener and add it to the camera
  camera.add(listener);

  sound = new THREE.Audio(listener); // creating the audio source

  const audioLoader = new THREE.AudioLoader(); // create an audio loader
  audioLoader.load('sounds/tiersen.mp3', function (buffer) {
    // load the audio file
    sound.setBuffer(buffer); // set the audio source buffer
    sound.setLoop(true); // set the audio source to loop
    sound.setVolume(0.5); // set the audio source volume
  });
};

// play audio
export const startAudio = () => {
  if (sound) {
    sound.play();
  }
};

// pause audio
export const stopAudio = () => {
  if (sound) {
    sound.pause();
  }
};
