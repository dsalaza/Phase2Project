import React from 'react'

function Card(props) {
  return (
    <div className='card'>
        <img id='coverart' src={props.singlereview.url}/>
        <div className='cardtext'>
            <h2 id='titleheader'>{props.singlereview.title} - {props.singlereview.rating}</h2>
            <p className='cardtext'>Artist Name: {props.singlereview.artistname}</p>
            <p className='cardtext'>Release Date: {props.singlereview.releasedate}</p>
            <p className='cardtext'>Genre: {props.singlereview.genre}</p>
            <p className='cardtext'>Subgenre: {props.singlereview.subgenre}</p>
            <p className='cardtext'>Highlight: {props.singlereview.favoritesong}</p>
            <p className='cardtext'>Low point: {props.singlereview.leastfavoritesong}</p>
            <p className='cardtext'>Review: {props.singlereview.reviewbody}</p>
            <p className='cardtext'>Author: {props.singlereview.reviewauthor}</p>
        </div>
    </div>
  )
}

export default Card