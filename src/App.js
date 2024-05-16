import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Nav from './components/Nav'
import ManufactorsSection from './components/ManufactorsSection';


function App() {
  return (
    <div>
      <Nav />
      <ManufactorsSection/>
    </div>
  )
}

export default App
