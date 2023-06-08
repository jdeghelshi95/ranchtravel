import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom'
import Home from './pages/Home';
import Nav from './Elements/Nav'
import Res from './pages/Reservations'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/reserve' element={<Res/>}/>
        


      </Routes>
    </div>
  );
}

export default App;
