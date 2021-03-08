import React from "react"
import "./header.sass"

import bigStar from "../../img/star.svg"
import logout from "../../img/logout.svg"
import stars from "../../img/stars.svg"

const Header = () => {

    const handleDisabled = () => {
        document.querySelector(".auth-btn").classList.toggle("disabled")
        document.querySelector(".account").classList.toggle("disabled")
    }

    const handleVisibility = () => {
        document.querySelector(".favorite").classList.toggle("visibility")
        document.querySelector(".favorite-click").classList.toggle("visibility")
    }

    return (
        <div className="header">
            <img className="favorite" src={ bigStar } alt="star" onClick={ handleVisibility } />
            <img className="favorite-click visibility" src={ stars } alt="stars" onClick={ handleVisibility } />
            <span className="title">Электронная библиотека</span>
            <button className="auth-btn" onClick={ handleDisabled } >Sign in</button>
            <div className="account disabled" >
                <span className="name">Ирина Волотова</span>
                <img className="out" src={ logout } alt="logout" onClick={ handleDisabled } />
            </div>
        </div>
    )
}

export default Header