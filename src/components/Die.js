import React from "react";

export default function Die(props) {
  const divStyle = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };
  return (
    <div style={divStyle} className="die-face" onClick={props.handleClick}>
      <h2 className="die-num">{props.value}</h2>
    </div>
  );
}
