import React from "react";

export default function RollCounter(props) {
  return (
    <div className="roll-counter-container">
      <h2>
        Number of Rolls: <span>{props.diceCount}</span>
      </h2>
    </div>
  );
}
