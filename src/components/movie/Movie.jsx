import React, { useState, useEffect } from "react";
// import { LinearProgress } from '@material-ui/core';
import Hero from "./hero/Hero";
import axios from "axios";
import Nomination from "./nomination/Nomination";
import MovieList from "./list/MovieList";
import "./movie.css";

function Movie() {
  // const [isLoadingPosts, setIsLoadingPosts] = useState(false)
  const [movie, setMovie] = useState([]);
  const [nominationList, setNominationList] = useState([]);
  // const [nominationCount, setNominationCount] = useState(0)
  const [searchString, setSearchString] = useState("");
  //apikey=dadd11c2
  // `http://www.omdbapi.com/?apikey=dadd11c2&s="${searchString}"`
  useEffect(() => {
    axios
      .get(`http://localhost:4001/v1/movies/getMovies?search=${searchString}`)
      .then((res) => {
        setMovie(res.data);
      });
  }, [searchString]);

  return (
    <div className="movie">
      <Hero searchString={searchString} setSearchString={setSearchString} />
      <div className="movieBody">
        <MovieList
          movieObj={movie}
          nominationList={nominationList}
          onNominationListChange={setNominationList}
        />
        <Nomination
          nominationList={nominationList}
          onNominationListChange={setNominationList}
        />
      </div>
    </div>
  );
}

export default Movie;
