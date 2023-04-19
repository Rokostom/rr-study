import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./../src/components/Home/Home";
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
