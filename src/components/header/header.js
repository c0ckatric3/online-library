import React from 'react'
import './header.sass'

import bigStar from '../../img/star.svg'
import logout from '../../img/logout.svg'

const Header = () => {

    const handleDisabled = () => {
        document.querySelector(".auth-btn").classList.add("disabled")
        document.querySelector(".account").classList.remove("disabled")
    }
    const handleVisibility = () => {
        document.querySelector(".account").classList.add("disabled")
        document.querySelector(".auth-btn").classList.remove("disabled")
    }

    return (
        <div className="header">
            <img className="favorite" src={ bigStar } alt='star' />
            <span className="title">Электронная библиотека</span>
            <button className="auth-btn" onClick={ handleDisabled } >Sign in</button>
            <div className="account disabled" >
                <span className="name">Ирина Волотова</span>
                <img className="out" src={ logout } alt='logout' onClick={ handleVisibility } />
            </div>
        </div>
    )
}

export default Header