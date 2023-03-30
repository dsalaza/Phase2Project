import React, {useEffect, useState} from "react"
import { Routes, Route } from 'react-router-dom'
import Homepage from "./Homepage.js"
import Explorer from "./Explorer.js"
import Review from "./Review.js"
import Navbar from "./Navbar.js"

function App() {

  const [reviewArray, setReviewArray] = useState([])
  function addReview(newReview) {
    const newReviewArray = [...reviewArray, newReview]
    setReviewArray(newReviewArray)
  }

  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then(resp => resp.json())
      .then(data => setReviewArray(data))
  }, [])
 
  console.log(reviewArray)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route 
        path='/'
        element={<Homepage/>} 
        />
        <Route 
        path='/review'
        element={<Review onAddReview={addReview}/>}
        />
        <Route 
        path='/explore'
        element={<Explorer initialReviews={reviewArray}/>}
        />
     </Routes>
    </div>
  );
}

export default App;
