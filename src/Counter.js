import React, { useState, useEffect } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    changeColor();
  }, [counter]);

  function increment() {
    if (counter < 10) {
      setCounter(counter + 1);
      changeColor();
    }
  }

  function decrement() {
    if (counter > 0) {
      setCounter(counter - 1);
      changeColor();
    }
  }

  function changeColor() {
    const h1 = document.getElementById("header");

    if (counter >= 0 && counter <= 4) {
      h1.style.color = "green";
    } else if (counter >= 5 && counter <= 9) {
      h1.style.color = "blue";
    } else if (counter === 10) {
      h1.style.color = "red";
    }
  }

  return (
    <div style={{ marginTop: "5%" }}>
      <h3>
        <u>Counter</u>
      </h3>

      <h1 id="header"style={{ marginTop: "3%", marginBottom: "3%" }}>{counter}</h1>
      <button
        className="btn btn-primary"
        style={{
          fontSize: "20px",
          margin: "10px",
          borderRadius: "5px",
          cursor: "pointer",
          paddingLeft: "5px",
          paddingRight: "5px",
        }}
        onClick={increment}
      >
        Increment(+)
      </button>
      <button
        className="btn btn-danger"
        style={{
          fontSize: "20px",
          margin: "10px",

          borderRadius: "5px",
          cursor: "pointer",
          paddingLeft: "5px",
          paddingRight: "5px",
        }}
        onClick={decrement}
      >
        Decrement(-)
      </button>
    </div>
  );
}

export default Counter;
