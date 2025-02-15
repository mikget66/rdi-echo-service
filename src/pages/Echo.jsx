import React, { useState, useRef } from "react";
import axios from "axios";
import toWav from "audiobuffer-to-wav";
import Loader from "../components/Loader";

const Echo = () => {
  const [state, setState] = useState("initial"); // initial, loading, output
  const [audioFile, setAudioFile] = useState(null);
  const [outputAudio, setOutputAudio] = useState(null);
  const [error, setError] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const mediaStreamRef = useRef(null);

  // Handle file upload
  const handleFileUpload = (event) => {
    setAudioFile(event.target.files[0]);
  };

  // Start recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };
      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });
        const wavBlob = await convertToWav(audioBlob); // Convert to WAV
        setRecordedAudio(wavBlob);
        audioChunksRef.current = [];
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (err) {
      setError(
        "Microphone access denied. Please allow access to record audio."
      );
    }
  };

  // Stop recording
  const stopRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      mediaRecorderRef.current.stop();
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      setIsRecording(false);
    }
  };

  // Convert recorded audio to WAV
  const convertToWav = async (blob) => {
    const arrayBuffer = await blob.arrayBuffer();
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    const wav = toWav(audioBuffer);
    return new Blob([wav], { type: "audio/wav" });
  };

  // Handle echo for both file upload and recorded audio
  const handleEcho = async () => {
    setState("loading");
    try {
      let audioData = audioFile || recordedAudio;
      if (!audioData) {
        throw new Error("No audio file or recording provided.");
      }

      // Step 1: Call Kateb API to convert audio to text
      const formData = new FormData();
      formData.append("file", audioData, "file.wav");
      const katebResponse = await axios.post(
        "https://echo-6sdzv54itq-uc.a.run.app/kateb",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      const text = katebResponse.data.json.words
        .map((word) => word.text)
        .join(" ");

      // Step 2: Modify text to repeat the last word 3 times
      const words = text.split(" ");
      const lastWord = words[words.length - 1];
      const modifiedText = `${text} ${lastWord} ${lastWord}`;

      // Step 3: Call Natiq API to generate electronic voice
      const natiqResponse = await axios.post(
        "https://echo-6sdzv54itq-uc.a.run.app/natiq",
        { text: modifiedText },
        { headers: { "Content-Type": "application/json" } }
      );
      const audioDataResponse = natiqResponse.data.wave;

      // Step 4: Convert urlsafe_b64 to regular base64 and set output audio
      const base64Audio = audioDataResponse
        .replace(/-/g, "+")
        .replace(/_/g, "/");
      setOutputAudio(`data:audio/wav;base64,${base64Audio}`);
      setState("output");
    } catch (err) {
      setError("An error occurred. Please try again.");
      setState("initial");
    }
  };

  // Reset function to clear all states
  const resetAll = () => {
    setState("initial");
    setAudioFile(null);
    setOutputAudio(null);
    setError(null);
    setIsRecording(false);
    setRecordedAudio(null);
    audioChunksRef.current = [];
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stream
        .getTracks()
        .forEach((track) => track.stop());
    }
  };

  return (
    <div className="page">
      <h1>Echo Page</h1>
      {state === "initial" && (
        <div>
          <div className="col">
            <h3>Upload Audio File</h3>
            <label className="audio" htmlFor="audio">
              {audioFile ? `${audioFile.name}` : "choose audio"}
            </label>
            <input
              id="audio"
              type="file"
              accept="audio/*"
              onChange={handleFileUpload}
              hidden
            />
            {audioFile && (
              <audio src={URL.createObjectURL(audioFile)} controls></audio>
            )}
          </div>
          <h3>Or Record Audio</h3>
          <button onClick={startRecording} disabled={isRecording}>
            Start Recording
          </button>
          <button onClick={stopRecording} disabled={!isRecording}>
            Stop Recording
          </button>
          {recordedAudio && (
            <div>
              <p>Recording Ready</p>
              <audio controls src={URL.createObjectURL(recordedAudio)} />
            </div>
          )}

          <button onClick={handleEcho} disabled={!audioFile && !recordedAudio}>
            Echo
          </button>
        </div>
      )}
      {state === "loading" && <Loader isVisible={true} />}
      {state === "output" && (
        <div className="output">
          <audio controls autoPlay src={outputAudio} />
          <button onClick={resetAll}>Try Again</button>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Echo;
