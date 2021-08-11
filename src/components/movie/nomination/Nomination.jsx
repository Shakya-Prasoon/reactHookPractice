import React from 'react'

function Nomination({nominationList, onNominationListChange, nominationCount, onNominationCountChange}) {

    function DisplayNominations(){
        let nomineeList = nominationList.map(movi =>{
            return(
                <div className="movieDisplay">
                    <div className="imgBox">
                        <img src={movi.Poster} alt = "pic"/>
                    </div>
                    <div className="movieInfo">
                        <h2>{movi.Title}</h2>
                        <p>{`Year: ${movi.Year}`}</p>
                        <button
                            onClick={(i) => unNominateClickHandle(i, movi)} >Remove</button>
                    </div>
                </div>)
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
