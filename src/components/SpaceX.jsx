import React, { useState } from 'react'
import SpaceXcontent from './SpaceXcontent'
import { v4 as uuidv4 } from "uuid";



function SpaceX() {
    
    const [spaceContent, setSpaceContent] = useState(0)
    const [search, setSearch] = useState('')    //Passed into the spaceXComponent call
    const [searchInput, setSearchInput] = useState('')  //Input bar input

    function handleSearch(i){
        i.preventDefault()
        setSearch(searchInput)
    }

    function handleClear(i){
        i.preventDefault()
        setSearch('')
    }

    return (
        <>
        <ul className="spaceXNav">
            <li key={uuidv4()} onClick={() => setSpaceContent(0)}>History</li>
            <li key={uuidv4()} onClick={() => setSpaceContent(1)}>Rockets</li>
            <li key={uuidv4()} onClick={() => setSpaceContent(2)}>Ships</li>
        </ul>

        <form className="SearchBar">
            <input 
                onChange={(e) => setSearchInput((e.target.value).toLowerCase())} 
                htmlFor="searchSpace" 
                placeholder="Search context" />

            <button onClick={(i) => handleSearch(i)} >Search</button>
            <button onClick={(i) => handleClear(i)} >clear</button>
        </form>

        <div className="spaceXbody">
            <SpaceXcontent filterContent={search} content={spaceContent}/>
        </div>
        </>
    )
}

export default SpaceX
