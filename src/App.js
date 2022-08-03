// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import TodoFeatures from "./features/todo";
import AlbumFeature from "./features/Album";
import ColorBox from "./components/ColorBox";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <ColorBox />
      <Counter />
    </div>
  );
}

export default App;
