import React from 'react'

function MovieList({movieObj, nominationList, onNominationListChange, nominationCount, onNominationCountChange}) {

    function checkDisable(title, year){
        let checkArr = nominationList.filter(i => (
            i.Title === title && i.Year === year
        ))
        if(checkArr.length > 0 || nominationList.length > 4){
            return true
        }
        else{
            return false
        }
    }

    function nominateClickHandle(i, newMovie){
        let prevNominees = [...nominationList]
        onNominationListChange([...prevNominees, newMovie])
        nominationCount += 1 
        onNominationCountChange(nominationCount)
    }

    function MovieContainer({movieObj}){
        if(movieObj){
            let newMvList = movieObj.map(movi => {
                return(
                    <div className="movieDisplay">
                        <div className="imgBox">
                            <img src={movi.Poster} alt = "pic"/>
                        </div>
                        <div className="movieInfo">
                            <h2>{movi.Title}</h2>
                            <p>{`Year: ${movi.Year}`}</p>
                            <button
                                disabled={checkDisable (movi.Title, movi.Year)}  
                                onClick={(i) => nominateClickHandle(i, movi)} >Nominate</button>
                        </div>
                    </div>)
            })
            return newMvList
        }
        else{
            return('')
        }
    }

    return (
        <div className="result">
            <MovieContainer movieObj={movieObj} />
        </div>
    )
}

export default MovieList
