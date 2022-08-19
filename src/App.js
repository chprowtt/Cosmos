import { Routes , Route } from 'react-router-dom';
import React from 'react'
import Home from './components/Home'
import NasaPhoto from './components/NasaPhoto'



function App() {
  return (
    
    <Routes>
      
      <Route path="/" element={<Home />}>
      </Route>
      <Route path="/nasaPhoto" element={<NasaPhoto />}>

      </Route>

      
    </Routes>
   
  );
}

export default App;
