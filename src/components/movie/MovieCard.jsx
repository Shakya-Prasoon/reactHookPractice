import React from 'react'
import PropTypes from 'prop-types'

function MovieCard({title, poster, year, imgClassName, movieInfoClassName}) {
    return (
        <>
            <div className={imgClassName}>
                <img src={poster} alt = {title}/>
            </div>
            
            <div className={movieInfoClassName}>
                <h2>{title}</h2>
                <p>Year: {year}</p>
            </div>
        </>
    )
}

// MovieCard.defaultProps={
//     width:200,
//     height:140,
// }

MovieCard.propTypes ={
    title: PropTypes.string,
    poster: PropTypes.string,
    year: PropTypes.string,
}

export default MovieCard
