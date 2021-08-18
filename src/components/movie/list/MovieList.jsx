import React from "react";
import MovieCard from "../MovieCard";
import axios from "axios";

function MovieList({ movieObj, nominationList, onNominationListChange }) {
  function checkDisable(title, year) {
    let checkArr = nominationList.filter(
      (i) => i.Title === title && i.Year === year
    );
    if (checkArr.length > 0 || nominationList.length > 4) {
      return true;
    } else {
      return false;
    }
  }

  function nominateClickHandle(newMovie) {
    let prevNominees = [...nominationList];
    onNominationListChange([...prevNominees, newMovie]);
    axios
      .post(
        `http://localhost:4001/v1/nominations/setnominations?nominatedMovie=${newMovie.imdbID}`
      )
      .then(console.log("MOVIE NOMINATED:", newMovie))
      .catch((err) => console.log(err));
  }

  function MovieContainer({ movieObj }) {
    if (movieObj) {
      let newMvList = movieObj.map((movi) => {
        return (
          <div className="movieDisplay">
            <MovieCard
              title={movi.Title}
              poster={movi.Poster}
              year={movi.Year}
              imgClassName="imgBox"
              movieInfoClassName="movieInfo"
            />

            <div className="cardButton">
              <button
                disabled={checkDisable(movi.Title, movi.Year)}
                onClick={() => nominateClickHandle(movi)}
              >
                Nominate
              </button>
            </div>
          </div>
        );
      });
      return newMvList;
    } else {
      return "";
    }
  }

  return (
    <div className="result">
      <MovieContainer movieObj={movieObj} />
    </div>
  );
}

export default MovieList;
