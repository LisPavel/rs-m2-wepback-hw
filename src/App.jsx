import React, { useEffect, useRef, useState } from "react";
import rainSound from "./assets/sounds/rain.mp3";
import summerSound from "./assets/sounds/summer.mp3";
import winterSound from "./assets/sounds/winter.mp3";

const tracks = {
  rain: rainSound,
  summer: summerSound,
  winter: winterSound,
};

export const App = () => {
  const [trackName, setTrackName] = useState("summer");
  const [currentTrack, setCurrentTrack] = useState(tracks[trackName]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const audioRef = useRef();

  const playTrack = (newTrackName) => {
    if (newTrackName === trackName) {
      setIsPlaying((prev) => !prev);
    } else {
      setIsPlaying(true);
      setTrackName(newTrackName);
      setCurrentTrack(tracks[newTrackName]);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef, currentTrack]);

  useEffect(() => {
    audioRef.current.volume = volume / 100;
  }, [volume, audioRef]);

  const handleVolumeChange = (ev) => {
    setVolume(ev.target.valueAsNumber);
  };

  return (
    <>
      <h1 className="text-xl ">Weather sounds</h1>
      <div className="btn-container">
        <button className="summer" onClick={() => playTrack("summer")}></button>
        <button className="rain" onClick={() => playTrack("rain")}></button>
        <button className="winter" onClick={() => playTrack("winter")}></button>
      </div>
      <audio src={currentTrack} ref={audioRef} />
      <input
        type="range"
        name="sound"
        id="sound"
        min={0}
        max={100}
        value={volume}
        onChange={handleVolumeChange}
      />
    </>
  );
};
