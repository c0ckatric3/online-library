import React from "react"

import "./main-list.sass"
import cover from "../../img/cover.jpg"
import star from "../../img/star.svg"
import stars from "../../img/stars.svg"
import LoadBtn from "../load-btn/load-btn"
import Search from "../search/search"

const MainList = () => {

    const handleDisabled = () => {
        document.querySelector(".star").classList.toggle("disabled")
        document.querySelector(".star-favorite").classList.toggle("disabled")
    }

    return (
        <div className="main-list">
            <LoadBtn />
            <Search />
            <div className="book">
                <img className="cover" src={ cover } alt="cover" />
                <div className="content-info">
                    <span className="title">Тонкое искусство пофигизма</span>
                    <span className="author">Марк Мэнсон</span>
                </div>
                <img className="star" src={ star } alt="star" onClick={ handleDisabled } />
                <img className="star-favorite disabled" src={ stars } alt="stars" onClick={ handleDisabled } />
            </div>
            <div className="book">
                <img className="cover" src={ cover } alt="cover" />
                <div className="content-info">
                    <span className="title">Тонкое искусство пофигизма</span>
                    <span className="author">Марк Мэнсон</span>
                </div>
                <img className="star" src={ star } alt="star" />
            </div>
            <div className="book">
                <img className="cover" src={ cover } alt="cover" />
                <div className="content-info">
                    <span className="title">Тонкое искусство пофигизма</span>
                    <span className="author">Марк Мэнсон</span>
                </div>
                <img className="star" src={ star } alt="star" />
            </div>
            <div className="book">
                <img className="cover" src={ cover } alt="cover" />
                <div className="content-info">
                    <span className="title">Тонкое искусство пофигизма</span>
                    <span className="author">Марк Мэнсон</span>
                </div>
                <img className="star" src={ star } alt="star" />
            </div>
            <div className="book">
                <img className="cover" src={ cover } alt="cover" />
                <div className="content-info">
                    <span className="title">Тонкое искусство пофигизма</span>
                    <span className="author">Марк Мэнсон</span>
                </div>
                <img className="star" src={ star } alt="star" />
            </div>
            <div className="book">
                <img className="cover" src={ cover } alt="cover" />
                <div className="content-info">
                    <span className="title">Тонкое искусство пофигизма</span>
                    <span className="author">Марк Мэнсон</span>
                </div>
                <img className="star" src={ star } alt="star" />
            </div>
            <div className="book">
                <img className="cover" src={ cover } alt="cover" />
                <div className="content-info">
                    <span className="title">Тонкое искусство пофигизма</span>
                    <span className="author">Марк Мэнсон</span>
                </div>
                <img className="star" src={ star } alt="star" />
            </div>
            <div className="book">
                <img className="cover" src={ cover } alt="cover" />
                <div className="content-info">
                    <span className="title">Тонкое искусство пофигизма</span>
                    <span className="author">Марк Мэнсон</span>
                </div>
                <img className="star" src={ star } alt="star" />
            </div>
            <div className="book">
                <img className="cover" src={ cover } alt="cover" />
                <div className="content-info">
                    <span className="title">Тонкое искусство пофигизма</span>
                    <span className="author">Марк Мэнсон</span>
                </div>
                <img className="star" src={ star } alt="star" />
            </div>
            <div className="book">
                <img className="cover" src={ cover } alt="cover" />
                <div className="content-info">
                    <span className="title">Тонкое искусство пофигизма</span>
                    <span className="author">Марк Мэнсон</span>
                </div>
                <img className="star" src={ star } alt="star" />
            </div>
            <div className="book">
                <img className="cover" src={ cover } alt="cover" />
                <div className="content-info">
                    <span className="title">Тонкое искусство пофигизма</span>
                    <span className="author">Марк Мэнсон</span>
                </div>
                <img className="star" src={ star } alt="star" />
            </div>
            <div className="book">
                <img className="cover" src={ cover } alt="cover" />
                <div className="content-info">
                    <span className="title">Тонкое искусство пофигизма</span>
                    <span className="author">Марк Мэнсон</span>
                </div>
                <img className="star" src={ star } alt="star" />
            </div>
            <div className="book">
                <img className="cover" src={ cover } alt="cover" />
                <div className="content-info">
                    <span className="title">Тонкое искусство пофигизма</span>
                    <span className="author">Марк Мэнсон</span>
                </div>
                <img className="star" src={ star } alt="star" />
            </div>
        </div>
    )
}

export default MainList