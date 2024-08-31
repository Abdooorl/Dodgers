
import './App.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import navData from './data/navData.json';
import MainContainer from './components/MainContainer';



function App() {

  return (
    <div className="App">
      <Sidebar data={navData.navigation}/>
      <MainContainer />
    </div>
  );
}

export default App;
