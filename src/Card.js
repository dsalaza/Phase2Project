import React from 'react'

function Card({ singlereview, onDeleteReview }) {

    function handleDelete() {
        fetch(`http://localhost:3000/reviews/${singlereview.id}`, {
            method: "DELETE",
        })
        .then((resp) => resp.json())
        .then((data) => onDeleteReview(singlereview))

    }

  return (
    <div className='card'>
        <img id='coverart' src={singlereview.url}/>
        <div className='cardtext'>
            <h2 id='titleheader'>{singlereview.title} - {singlereview.rating}</h2>
            <p className='cardtext'>Artist Name: {singlereview.artistname}</p>
            <p className='cardtext'>Release Date: {singlereview.releasedate}</p>
            <p className='cardtext'>Genre: {singlereview.genre}</p>
            <p className='cardtext'>Subgenre: {singlereview.subgenre}</p>
            <p className='cardtext'>Highlight: {singlereview.favoritesong}</p>
            <p className='cardtext'>Low point: {singlereview.leastfavoritesong}</p>
            <p className='cardtext'>Review: {singlereview.reviewbody}</p>
            <p className='cardtext'>Author: {singlereview.reviewauthor}</p>
        </div>
        <input className="deleteButton" type="button" value="Delete" onClick={handleDelete}/>
    </div>
  )
}

export default Card