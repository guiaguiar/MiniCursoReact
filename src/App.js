import React, { Component } from 'react';
import "./styles.css";

import Routes from "./routes";
import api from "./services/api";

import Header from './components/Header';
import Main from './pages/main';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
