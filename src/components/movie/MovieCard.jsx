import React from 'react'

function MovieCard({movi}) {
    return (
        <>
            <div className="imgBox">
                <img src={movi.Poster} alt = {movi.Title}/>
            </div>
            <div className="movieInfo">
                <h2>{movi.Title}</h2>
                <p>{`Year: ${movi.Year}`}</p>
            </div>
        </>
    )
}

export default MovieCard
