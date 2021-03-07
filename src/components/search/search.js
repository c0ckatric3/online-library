import React from "react"

import "./search.sass"
import search from "../../img/search.svg"


const Search = () => {

    return (
        <div className="test">
            <input className="search" placeholder="Search" />
            <img className="what-is-it-i-dont-no" src={ search } alt="search" />
        </div>
    )
}

export default Search