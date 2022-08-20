import React from "react";
import ReactDOM from "react-dom/client";
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
        <>
          <Routes>
            <Route path="/" exact>
              <Header />
            </Route>
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
