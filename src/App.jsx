import React from "react";
import rainSound from "./assets/sounds/rain.mp3";
import summerSound from "./assets/sounds/summer.mp3";
import winterSound from "./assets/sounds/winter.mp3";
import Player from "./components/player";

const tracks = [
  { name: "summer", track: summerSound },
  { name: "rain", track: rainSound },
  { name: "winter", track: winterSound },
];

export const App = () => {
  return <Player tracks={tracks} />;
};
