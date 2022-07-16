import React from "react";
import logo from "./logo.svg";
import { ProjectListScreen } from "./screens/project-list";
import "./App.css";
import { UserArray } from "testStudy/user-array";

function App() {
  return (
    <div className="App">
      <ProjectListScreen />
      <UserArray />
    </div>
  );
}

export default App;
