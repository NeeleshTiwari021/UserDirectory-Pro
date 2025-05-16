import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { Context } from "./index"; // Import the Context
import { useContext } from "react"; // Import useContext hook
import "./styles/global.css";

function App() {
  const { userStore } = useContext(Context); // Get userStore from context

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage userStore={userStore} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;