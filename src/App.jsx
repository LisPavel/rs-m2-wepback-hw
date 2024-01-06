import React from "react";

export const App = () => {
  return (
    <>
      <h1 className="text-xl ">Weather sounds</h1>
      <div className="btn-container">
        <button className="summer"></button>
        <button className="rain"></button>
        <button className="winter"></button>
      </div>
      <input type="range" name="sound" id="sound" />
    </>
  );
};
