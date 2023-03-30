import React from "react"
import { Routes, Route } from 'react-router-dom'
import Homepage from "./Homepage.js"
import Explorer from "./Explorer.js"
import Review from "./Review.js"
import Navbar from "./Navbar.js"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route 
        path='/'
        element={<Homepage/>} 
        />
        <Route 
        path='/review'
        element={<Review />}
        />
        <Route 
        path='/explore'
        element={<Explorer />}
        />
     </Routes>
    </div>
  );
}

export default App;
