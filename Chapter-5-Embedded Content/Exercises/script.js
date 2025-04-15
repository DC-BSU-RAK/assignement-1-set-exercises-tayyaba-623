// Code for the audios
var audio = document.getElementById("Audios");
var audioSource = document.getElementById("audioSource");

function playAudio(filename) {
  audioSource.src = 'Audio Sampler/Audio/' + filename; // Source of the audio file
  audio.load();
  audio.play();
}

// Code for the text box
let button = document.querySelector('speak');
let text = document.querySelector('textarea');
speak.addEventListener('click',() => {
  let talk = new
  // Turns the input text into speech
  SpeechSynthesisUtterance(text.value); 
  // Making the browser speak the text
  speechSynthesis.speak(talk);
})