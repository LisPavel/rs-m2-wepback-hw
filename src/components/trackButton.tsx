import React from "react";
import "./trackButton.scss";

interface Props {
  name: string;
  startPlaying: (trackIndex: number) => void;
  trackIndex: number;
  isPlaying: boolean;
  currentTrack: { name: string };
}

const TrackButton = ({
  name,
  startPlaying,
  trackIndex,
  isPlaying,
  currentTrack,
}: Props) => {
  const classNames: string =
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
