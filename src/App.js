import React from "react";
import Spin from "./Spin";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import RocketsList from "./RocketsList";
import './App.css';
import Rocket from "./Rocket";
import Login from "./Login";
import './fireBase'
import Registration from "./Register";

function App() {
  return ( 
    <div className="App">
      <Spin/>
      <Router>
        <Routes>
            <Route path="/" element={<RocketsList />} exact/>
            <Route path="/login" element={<Login />} exact/>
            <Route path="/register" element={<Registration />} exact/>
            <Route path="/rocket/:id" element={<Rocket />} exect/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
