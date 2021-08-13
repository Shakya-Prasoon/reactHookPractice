import React from 'react'


function Hero({searchString, setSearchString}) {

    // Debounce function doesnt work properly
    const debounce= (fn, delay) => {
        let timeout
        return function(){
            clearTimeout(timeout)
            timeout = setTimeout(fn, delay)
        }
    }


    return (<>
        <h1 className="pageH1"> Movie Nomination </h1>
            <form className="SearchBar">
                <input 
                    // onChange={(e) => { setSearchString((e.target.value).toLowerCase())}} 
                    onChange={e => {
                        debounce(setSearchString((e.target.value).toLowerCase()), 500000)
                    }}
                    htmlFor="searchSpace" 
                    placeholder="Movie Title"
                    value= {searchString}/>
            </form>
        </>
    )
}

export default Hero
