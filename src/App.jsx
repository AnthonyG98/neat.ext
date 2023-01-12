import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
function App() {
  //add container to body
  // const insertNotif = () => {

  //   body.appendChild(".ext-notification-container");
  // };
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
      {/* <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router> */}
      <div className="app" onLoad={test}>
        {/* <h1 id="notif-container">hey</h1> */}
        <h1>You have 0 assignmnents with thus site</h1>
      </div>
    </>
  );
}

export default App;
