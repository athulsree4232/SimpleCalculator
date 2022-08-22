import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear = (e) => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, -1));
  };
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("error");
    }
  };
  return (
    <div>
      <div className="container">
        <form action="">
          <input type="text" value={result} className="resultWindow" />
        </form>

        <div className="keypad">
          <button onClick={clear} id="clear" className="highlight">
            Clear
          </button>
          <button onClick={backspace} id="backspace" className="highlight">
            C
          </button>
          <button name="/" onClick={handleClick} className="highlight">
            &divide;
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button onClick={handleClick} name="9">
            9
          </button>
          <button onClick={handleClick} className="highlight" name="*">
            &times;
          </button>
          <button onClick={handleClick} name="4">
            4
          </button>
          <button onClick={handleClick} name="5">
            5
          </button>
          <button onClick={handleClick} name="6">
            6
          </button>
          <button onClick={handleClick} className="highlight" name="-">
            &ndash;
          </button>
          <button onClick={handleClick} name="1">
            1
          </button>
          <button onClick={handleClick} name="2">
            2
          </button>
          <button onClick={handleClick} name="3">
            3
          </button>
          <button onClick={handleClick} className="highlight" name="+">
            +
          </button>
          <button onClick={handleClick} name="0">
            0
          </button>
          <button onClick={handleClick} name=".">
            .
          </button>
          <button onClick={calculate} id="result" className="highlight">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
