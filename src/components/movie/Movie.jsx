import React, { useState, useEffect } from 'react'
// import { LinearProgress } from '@material-ui/core';
import Hero from './hero/Hero';
import axios from "axios";
import Nomination from './nomination/Nomination';
import MovieList from './list/MovieList';

function Movie() {
    // const [isLoadingPosts, setIsLoadingPosts] = useState(false)
    const [movie, setMovie] = useState([])
    const [nominationList, setNominationList] = useState([])
    const [nominationCount, setNominationCount] = useState(0)
    const [searchString, setSearchString] = useState('')

    useEffect(() => {
        // setIsLoadingPosts(true)
      axios.get(`http://www.omdbapi.com/?apikey=dadd11c2&s="${searchString}"`)
        .then(res => {setMovie(res.data.Search)})
        // .then (setIsLoadingPosts(false))
        // .catch(() => {setIsLoadingPosts(false)})
    }, [searchString])

    // if(isLoadingPosts){ 
    //     return(<>
    //     <LinearProgress />
    //     <LinearProgress color="secondary" />
    //     </>)
    // }

    return (
        <div className="movie">
            <Hero 
                searchString={searchString}
                setSearchString={setSearchString}
            />
            <div className="movieBody">
                <MovieList 
                    movieObj={movie} 
                    nominationList={nominationList} 
                    onNominationListChange={setNominationList}
                    nominationCount={nominationCount}
                    onNominationCountChange={setNominationCount}
                />
                <Nomination
                    nominationList={nominationList} 
                    onNominationListChange={setNominationList}
                    nominationCount={nominationCount}
                    onNominationCountChange={setNominationCount}/>    
            </div>
        </div>
    )
}

export default Movie
