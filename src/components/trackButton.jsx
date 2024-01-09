import React from "react";
import "./trackButton.scss";

const TrackButton = ({ name, startPlaying, trackIndex }) => {
  const classNames = "track-button " + name;
  return (
    <button
      className={classNames}
      onClick={() => startPlaying(trackIndex)}
    ></button>
  );
};

export default TrackButton;
