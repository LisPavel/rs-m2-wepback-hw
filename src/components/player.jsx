import React, { useEffect, useRef, useState } from "react";
import TrackButton from "./trackButton";
import "./player.scss";

const Player = ({ tracks }) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const audioRef = useRef();

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

  const playTrack = (newTrack) => {
    if (newTrack === trackIndex) {
      setIsPlaying((prev) => !prev);
    } else {
      setTrackIndex(newTrack);
      setIsPlaying(true);
      setCurrentTrack(tracks[newTrack]);
    }
  };

  const handleVolumeChange = (ev) => {
    setVolume(ev.target.valueAsNumber);
  };
  return (
    <div className={"player " + currentTrack.name}>
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
    </div>
  );
};

export default Player;
