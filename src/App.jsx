import { useState } from "react";
import handleClick from "./component/onClick-component";
import "./App.css";


function App() {
  const [clickStatus, setStatus] = useState("Greeting Message");

  return (
    <div className="App">
      <div className="greeting-container">{clickStatus}</div>
      <div className="buttons">
        <button onClick={() => handleClick("สวัสดี!", setStatus)}>สวัสดี!</button>
        <button onClick={() => handleClick("Hi!", setStatus)}>Hi!</button>
        <button onClick={() => handleClick("你好!", setStatus)}>你好!</button>
      </div>
    </div>
  );
}

export default App;
