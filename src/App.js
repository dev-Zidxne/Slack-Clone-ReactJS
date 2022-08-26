import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <AppBody>
          <Routes>
            <Route path="/" exact>
              <Route path="/" element={<Header />} />
            </Route>
            <Route path="/" exact>
              <Route path="/" element={<Sidebar />} />
            </Route>
          </Routes>
        </AppBody>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div``;
