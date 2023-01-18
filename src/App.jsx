import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function App() {
  let url = "http://localhost:3001";

  //React state
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const onLogin = () => {
    const loginData = {
      username: username,
      password: password,
    };
    axios.post(`${url}/users/login`, loginData).then((response) => {
      if (response.data.error) {
        loginErrText.innerText = response.data.error;
      }
    });
  };

  //executes extension functionality
  let head = document.createElement("h1");

  const test = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTabId = tabs[0].id;
      chrome.scripting.executeScript({
        target: { tabId: activeTabId },
        function: () => document.body.appendChild(head),
      });
    });
  };
  return (
    <>
      <div className="login-container">
        <div className="login-entry-container">
          <div className="login-entry">
            <input
              type="text"
              className="login-input"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              className="login-input"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login-btn" onClick={() => onLogin()}>
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
