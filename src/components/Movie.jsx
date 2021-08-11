import React, { useState, useEffect } from 'react'
import { LinearProgress } from '@material-ui/core';
import axios from "axios";

function Googlemap() {
    const [searchInput, setSearchInput] = useState('')
    const [isLoadingPosts, setIsLoadingPosts] = useState(false)
    const [movie, setMovie] = useState([])
    const [nominationList, setNominationList] = useState([])
    const [nominationCount, setNominationCount] = useState(0)

    
    useEffect(() => {
        setIsLoadingPosts(true)
      axios.get('http://localhost:3001/omdb/frozen')
        .then(res => {setMovie(res.data.Search)
            setIsLoadingPosts(false)})
        .catch(() => {setIsLoadingPosts(false)})
    }, [])

    function MovieContainer({movieObj}){
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
        setNominationList([...prevNominees, newMovie])
        setNominationCount(nominationCount + 1)
    }

    function unNominateClickHandle(i, currObj){
        let copyNominee = [...nominationList]
        let newList = copyNominee.filter(obj => {
            if(obj.title === currObj.title && 
                obj.Year ===currObj.Year && 
                obj.Poster === currObj.Poster ){
                    setNominationCount(nominationCount - 1)
                    return false
            }else{
                return true
            }
        })
        setNominationList(newList)

    }

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

    function handleSearch(i){
        i.preventDefault()
        axios.post()
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
                    placeholder="Movie Title" />

                <button onClick={(i) => {handleSearch(i)}} >Search</button>
            </form>

            <div className="movieBody">
                <div className="result">
                    <MovieContainer movieObj={movie} />
                </div>
                <div className="nomination">
                    <h2>Nominations:</h2>
                    <DisplayNominations />
                </div>
            </div>


        </div>
    )
}

export default Googlemap
