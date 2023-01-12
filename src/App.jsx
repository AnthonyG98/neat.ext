import "./App.css";

function App() {
  const test = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTabId = tabs[0].id;
      chrome.scripting.executeScript({
        target: { tabId: activeTabId },
        function: () => alert("Chrome extension"),
      });
    });
  };
  return (
    <>
      <div className="app">
        <button onClick={test}>TEST</button>
      </div>
    </>
  );
}

export default App;
