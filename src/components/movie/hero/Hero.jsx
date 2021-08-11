import React from 'react'


function Hero({searchString, setSearchString}) {

    return (<>
        <h1 className="pageH1"> Movie Nomination </h1>
            <form className="SearchBar">
                <input 
                    onChange={(e) => { setSearchString((e.target.value).toLowerCase())}} 
                    htmlFor="searchSpace" 
                    placeholder="Movie Title" value= {searchString}/>
            </form>
        </>
    )
}

export default Hero
