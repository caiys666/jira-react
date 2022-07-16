import React from "react";
import logo from "./logo.svg";
import { ProjectListScreen } from "./screens/project-list";
import "./App.css";
import { UserArray } from "testStudy/user-array";
import { LoginScreen } from "screens/login/Login";

function App() {
  return (
    <div className="App">
      {/* <ProjectListScreen />
      <UserArray /> */}
      <LoginScreen />
    </div>
  );
}

export default App;
