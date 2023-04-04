import React, {useState, useEffect} from 'react'



function Review({ onAddReview }) {

    const [title, setTitle] = useState('')
    const [rating, setRating] = useState('')
    const [artist, setArtist] = useState('')
    const [releaseDate, setReleaseDate] = useState('')
    const [genre, setGenre] = useState('')
    const [subgenre, setSubgenre] = useState('')
    const [imageurl, setImageurl] = useState('')
    const [author, setAuthor] = useState('')
    const [body, setBody] = useState('')
    const [highlight, setHighlight] = useState('')
    const [lowpoint, setLowpoint] = useState('')

    function handleSubmit(event) {
        event.preventDefault()

        const newObj =  {
            "rating": rating,
            "title": title,
            "artistname": artist,
            "url": imageurl,
            "genre": genre,
            "subgenre": subgenre,
            "releasedate": releaseDate,
            "favoritesong": highlight,
            "leastfavoritesong": lowpoint,
            "reviewbody": body,
            "reviewauthor": author
            }

            fetch("http://localhost:3000/reviews", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newObj)
            })
            .then(resp => resp.json())
            .then(data => onAddReview(data))
            setTitle("")
            setRating("")
            setArtist("")
            setReleaseDate("")
            setGenre("")
            setSubgenre("")
            setHighlight("")
            setLowpoint("")
            setImageurl("")
            setAuthor("")
            setBody("")
            
        }

  return (
    <div id="review">
        <h2 id="reviewHeader">Enter Your Review:</h2>
            <form id='newReviewForm' onSubmit={handleSubmit}>

                <label htmlFor='albumTitle'>Album Title</label>
                <input value={title} type='text' id='albumTitle'  onChange={e => setTitle(e.target.value)}/>

                <label htmlFor='rating'>Rating</label>
                <input value={rating} type='text' id='rating' onChange={e => setRating(e.target.value)}/>
                
                <label htmlFor='bandName'>Artist Name</label>
                <input value={artist} type='text' id='bandName' onChange={e => setArtist(e.target.value)}/>
                
                <label htmlFor='releaseDate'>Release Date</label>
                <input value={releaseDate} type='text' id='releaseDate' onChange={e => setReleaseDate(e.target.value)}/>

                <label htmlFor='genre'>Genre</label>
                <select value={genre} id='genre' onChange={e => setGenre(e.target.value)}>
                    <option></option>
                    <option value='Alternative'>Alternative</option>
                    <option value='Blues'>Blues</option>
                    <option value='Country'>Country</option>
                    <option value='Electronic'>Electronic</option>
                    <option value='Hip-Hop'>Hip-Hop</option>
                    <option value='Metal'>Metal</option>
                    <option value='Pop'>Pop</option>
                    <option value='Punk'>Punk</option>
                    <option value='R&B'>R&B</option>
                    <option value='Rock'>Rock</option>
                </select>

                <label htmlFor='subgenre'>Subgenre</label>
                <input value={subgenre} type='text' id='subgenre' onChange={e => setSubgenre(e.target.value)}/>

                <label htmlFor='highlight'>Highlight</label>
                <input value={highlight} type='text' id='highlight' onChange={e => setHighlight(e.target.value)}/>

                <label htmlFor='lowpoint'>Low Point</label>
                <input value={lowpoint} type='text' id='lowpoint' onChange={e => setLowpoint(e.target.value)}/>
                
                <label htmlFor='imgURL'>Album Cover URL</label>
                <input value={imageurl} type='text' id='imgURL' onChange={e => setImageurl(e.target.value)}/>

                <label htmlFor='authorname'>Author Name</label>
                <input value={author} type='text' id='reviewBody' onChange={e => setAuthor(e.target.value)}/>
                
                <label htmlFor='reviewbody'>Your Review</label>
                <input value={body} type='text' id='reviewBody' onChange={e => setBody(e.target.value)}/>

                <button type="submit">Post</button>
            </form>
    </div>
  )
}

export default Review