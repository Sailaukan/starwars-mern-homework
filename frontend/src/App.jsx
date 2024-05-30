import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import Collection from './components/collection/collection';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <div>
          <Routes>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/collection" element={<Collection/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;