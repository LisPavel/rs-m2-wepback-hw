import React, { useEffect, useRef, useState } from "react";
import rainSound from "./assets/sounds/rain.mp3";
import summerSound from "./assets/sounds/summer.mp3";
import winterSound from "./assets/sounds/winter.mp3";
import TrackButton from "./components/trackButton";

const tracks = [
  { name: "summer", track: summerSound },
  { name: "rain", track: rainSound },
  { name: "winter", track: winterSound },
];

export const App = () => {
  // const [trackName, setTrackName] = useState("summer");
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const audioRef = useRef();

  const playTrack = (newTrack) => {
    if (newTrack === trackIndex) {
      setIsPlaying((prev) => !prev);
    } else {
      setTrackIndex(newTrack);
      setIsPlaying(true);
      setCurrentTrack(tracks[newTrack]);
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
        {tracks.map((cfg, i) => (
          <TrackButton
            {...cfg}
            trackIndex={i}
            startPlaying={playTrack}
            isPlaying={isPlaying}
            currentTrack={currentTrack}
            key={i}
          />
        ))}
      </div>
      <audio src={currentTrack?.track} ref={audioRef} />
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
