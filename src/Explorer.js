import React from 'react'
import Card from './Card'

function Explorer({ initialReviews }) {

   

    const updatedReviews = initialReviews.map((review) => {
        return(   
                <Card
                singlereview={review}
                key={review.id}
                />
        )
    });

  return (
    <div>
        <h1 id='exploreheader'>Explore Reviews</h1>
        <span id='mainexpcontainer'>{updatedReviews}</span>
    </div>
  )
}

export default Explorer