import React, { useState } from "react";
import "./EightBall.css";

function choice(array) {
  let randIndex = Math.floor(Math.random() * array.length);
  return array[randIndex];
}
function EightBall({ answers }) {
  // get random item in array
  //   const [randomChoice, setChoice] = useState(choice(answers));
  const [color, setColor] = useState("black");
  const [msg, setMsg] = useState("Think of a Question");
  let clicked = () => {
    let pickedFortune = choice(answers);
    setColor(pickedFortune.color);
    setMsg(pickedFortune.msg);
  };
  return (
    <div
      className="EightBall"
      onClick={clicked}
      style={{ backgroundColor: color }}
    >
      <h3> {msg} </h3>
    </div>
  );
}
export default EightBall;
// start with default msg
// get random array
// change color of div and text
