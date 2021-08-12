import React from 'react'
import MovieCard from '../MovieCard'

function Nomination({nominationList, onNominationListChange, nominationCount, onNominationCountChange}) {

    function DisplayNominations(){
        let nomineeList = nominationList.map(movi =>{
            return(<div className="movieDisplay">
                <MovieCard movi={movi} />
                <div className="cardButton">
                    <button onClick={(i) => unNominateClickHandle(i, movi)} >Remove</button>
                </div>
                </div>
            )
        })
        return nomineeList
    }

    function unNominateClickHandle(i, currObj){
        let copyNominee = [...nominationList]
        let newList = copyNominee.filter(obj => {
            if(obj.title === currObj.title && 
                obj.Year ===currObj.Year && 
                obj.Poster === currObj.Poster ){
                    nominationCount -= 1
                    onNominationCountChange(nominationCount)
                    return false
            }else{
                return true
            }
        })
        onNominationListChange([...newList])

    }
   

    return (
        <div className="nomination">
            <h2>Nominations:</h2>
            <DisplayNominations />
        </div>
    )
}

export default Nomination
