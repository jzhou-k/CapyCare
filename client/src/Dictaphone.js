import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Speech from './Speech';

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (

    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button>PlayBack</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
      <Speech />
    </div>
  );
};
export default Dictaphone;