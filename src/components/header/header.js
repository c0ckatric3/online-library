import React from 'react'
import './header.sass'

import bigStar from '../../img/star.svg'
import logout from '../../img/logout.svg'
import logo from '../../img/logo.jpeg'

const Header = () => {
    return (
        <div className="header">
            <img className="favorite" src={ bigStar } alt='star' />
            <span className="title">Электронная библиотека</span>
            <button className="auth-btn">Sign in</button>
            {/*<div className="account">*/}
            {/*    <img className="logo" src={ logo } alt='logo' />*/}
            {/*    <span className="name">Ирина</span>*/}
            {/*    <img className="out" src={ logout } alt='logout' />*/}
            {/*</div>*/}
        </div>
    )
}

export default Header