import React from "react";
import image1 from "../images/Dice1.png";
import image2 from "../images/Dice2.png";
import image3 from "../images/Dice3.png";
import image4 from "../images/Dice4.png";
import image5 from "../images/Dice5.png";
import image6 from "../images/Dice6.png";
import heldImage1 from "../images/heldDice1.png";
import heldImage2 from "../images/heldDice2.png";
import heldImage3 from "../images/heldDice3.png";
import heldImage4 from "../images/heldDice4.png";
import heldImage5 from "../images/heldDice5.png";
import heldImage6 from "../images/heldDice6.png";

export default function Die(props) {
  // const divStyle = {
  //   background: props.isHeld ? "#59E391" : "white",
  // };

  const diceImages = [image1, image2, image3, image4, image5, image6];
  const heldImages = [
    heldImage1,
    heldImage2,
    heldImage3,
    heldImage4,
    heldImage5,
    heldImage6,
  ];
  const diceNumber = diceImages[props.value - 1];
  const heldDiceNumber = heldImages[props.value - 1];
  return (
    <div className="die-face" onClick={props.handleClick}>
      <h2 className="die-num">{props.value}</h2>
      <img
        className="die-image"
        src={props.isHeld ? heldDiceNumber : diceNumber}
        alt="dice"
      />
    </div>
  );
}
