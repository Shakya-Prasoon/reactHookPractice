import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from "uuid";
import { LinearProgress } from '@material-ui/core';
import axios from "axios";

function Googlemap() {
    const [searchInput, setSearchInput] = useState('')
    const [search, setSearch] = useState('')
    const [isLoadingPosts, setIsLoadingPosts] = useState(false)
    const [movie, setMovie] = useState([])

    
    useEffect(() => {
        setIsLoadingPosts(true)
      axios.get('http://localhost:3001/omdb')
        .then(res => {setMovie(res.data)
            setIsLoadingPosts(false)})
        .catch(() => {setIsLoadingPosts(false)})
    }, [])

    function MovieContainer({movi}){
        return(
        <div className="movieDisplay">
            <h2>{movi.Title}</h2>
            <p className="pactors">{`Actors: ${movi.Actors}`}</p>
            <p>{`Genre: ${movi.Genre}`}</p>
            <p>{`Resease Date: ${movi.Released}`}</p>
            <p>{`Rating: ${movi.Rated}`}</p>
            <button>Nominate</button>
        </div>)
    }

    function handleSearch(i){
        i.preventDefault()
        setSearch(searchInput)
    }

    if(isLoadingPosts){ 
        return(<>
        <LinearProgress />
        <LinearProgress color="secondary" />
        </>)
    }


    return (
        <div className="movie">
            <h1 className="pageH1"> Movie Nomination </h1>
            <form className="SearchBar">
                <input 
                    onChange={(e) => setSearchInput((e.target.value).toLowerCase())} 
                    htmlFor="searchSpace" 
                    placeholder="Movie Name" />

                <button onClick={(i) => {handleSearch(i)}} >Search</button>
            </form>

            <div className="movieBody">
                <div className="result">
                    <MovieContainer movi={movie} />
                </div>
                <div className="nomination">
                    <h2>Nominations:</h2>
                </div>
            </div>


        </div>
    )
}

export default Googlemap
