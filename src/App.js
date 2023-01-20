import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <div class="video-bg">
        <video width="320" height="240" autoPlay loop muted>
          <source
            src="https://assets.codepen.io/3364143/7btrrd.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="dark-light">
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      </div>
      <div class="app">
        <Header />

        <div class="wrapper">
          <Sidebar />

          <div class="main-container">
            <Main />
          </div>
        </div>
        <div class="overlay-app"></div>
      </div>
    </div>
  );
}

export default App;
