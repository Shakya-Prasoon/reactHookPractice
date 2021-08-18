import React from "react";
import MovieCard from "../MovieCard";

function Nomination({ nominationList, onNominationListChange }) {
  function DisplayNominations() {
    let nomineeList = nominationList.map((movi) => {
      console.log(movi);
      return (
        <div className="movieDisplay">
          <MovieCard
            key={movi.imdbID}
            imdbID={movi.imdbID}
            title={movi.Title}
            poster={movi.Poster}
            year={movi.Year}
            imgClassName="imgBox"
            movieInfoClassName="movieInfo"
          />

          <div className="cardButton">
            <button onClick={(i) => unNominateClickHandle(i, movi)}>
              Remove
            </button>
          </div>
        </div>
      );
    });
    return nomineeList;
  }

  function unNominateClickHandle(i, currObj) {
    let copyNominee = [...nominationList];
    let newList = copyNominee.filter((obj) => {
      if (
        obj.title === currObj.title &&
        obj.Year === currObj.Year &&
        obj.Poster === currObj.Poster
      ) {
        return false;
      } else {
        return true;
      }
    });
    onNominationListChange([...newList]);
  }

  return (
    <div className="nomination">
      <h2>Nominations:</h2>
      <DisplayNominations />
    </div>
  );
}

export default Nomination;
