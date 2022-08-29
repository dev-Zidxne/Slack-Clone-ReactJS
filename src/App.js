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
        <Header />
        <AppBody>
          <Routes>
            {/* <Route path="/" element={} /> */}
            <Route path="/" element={<Sidebar />} />
          </Routes>
        </AppBody>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
