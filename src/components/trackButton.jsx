import React from "react";
import "./trackButton.scss";

const TrackButton = ({
  name,
  startPlaying,
  trackIndex,
  isPlaying,
  currentTrack,
}) => {
  const classNames =
    "track-button " +
    name +
    (isPlaying && currentTrack.name === name ? " playing" : "");
  return (
    <button
      className={classNames}
      onClick={() => startPlaying(trackIndex)}
    ></button>
  );
};

export default TrackButton;
