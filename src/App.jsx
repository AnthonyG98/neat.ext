import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  let url = "http://localhost:3001";

  // React state
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
      } else {
        // chrome.storage.sync({ id: response.data.id }, function () {
        //   console.log("Saved");
        // });
        test(response.data.id);
      }
    });
  };

  //executes extension functionality
  const test = (ping) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTabId = tabs[0].id;
      chrome.scripting.executeScript({
        target: { tabId: activeTabId },
        function: alert(ping),
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
            <button className="login-btn" onClick={onLogin}>
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
