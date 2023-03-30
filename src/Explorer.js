import React from 'react'
import Card from './Card'

function Explorer({ initialReviews, setReviewArray }) {

    function deleteReview(deletedReview) {
        const updatedReviews = initialReviews.filter((review) => review.id !== deletedReview.id)
        setReviewArray(updatedReviews)
        console.log(`here`)
    }

    const updatedReviews = initialReviews.map((review) => {
        return(   
                <Card
                onDeleteReview={deleteReview}
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