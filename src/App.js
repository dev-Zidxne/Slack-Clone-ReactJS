import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" exact>
            <Route path="/" element={<Header />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
