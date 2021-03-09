import React from "react"

import "./search.sass"
import { ReactComponent as SearchSvg } from "../../img/search.svg"


const Search = () => {

    return (
        <div className="test">
            <input className="search" placeholder="Search" />
            <SearchSvg className="what-is-it-i-dont-no" />
        </div>
    )
}

export default Search