import React from "react"

import "./main-list.sass"
import cover from "../../img/cover.jpg"
import star from "../../img/star.svg"
import LoadBtn from "../load-btn/load-btn"
import Search from "../search/search"

const MainList = () => {

    return (
        <div className="main-list">
            <LoadBtn />
            <Search />
            <div className="book">
                <img className="cover" src={ cover } alt="cover" />
                <div className="content-info">
                    <span className="title">Тут типо название книги</span>
                    <span className="author">А тут типо автор</span>
                </div>
                <img className="star" src={ star } alt="star" />
            </div>
            <div className="book">
                <img className="cover" src={ cover } alt="cover" />
                <div className="content-info">
                    <span className="title">Тут типо название книги</span>
                    <span className="author">А тут типо автор</span>
                </div>
                <img className="star" src={ star } alt="star" />
            </div>
            <div className="book">
                <img className="cover" src={ cover } alt="cover" />
                <div className="content-info">
                    <span className="title">Тут типо название книги</span>
                    <span className="author">А тут типо автор</span>
                </div>
                <img className="star" src={ star } alt="star" />
            </div>
            <div className="book">
                <img className="cover" src={ cover } alt="cover" />
                <div className="content-info">
                    <span className="title">Тут типо название книги</span>
                    <span className="author">А тут типо автор</span>
                </div>
                <img className="star" src={ star } alt="star" />
            </div>
            <div className="book">
                <img className="cover" src={ cover } alt="cover" />
                <div className="content-info">
                    <span className="title">Тут типо название книги</span>
                    <span className="author">А тут типо автор</span>
                </div>
                <img className="star" src={ star } alt="star" />
            </div>
            <div className="book">
                <img className="cover" src={ cover } alt="cover" />
                <div className="content-info">
                    <span className="title">Тут типо название книги</span>
                    <span className="author">А тут типо автор</span>
                </div>
                <img className="star" src={ star } alt="star" />
            </div>
            <div className="book">
                <img className="cover" src={ cover } alt="cover" />
                <div className="content-info">
                    <span className="title">Тут типо название книги</span>
                    <span className="author">А тут типо автор</span>
                </div>
                <img className="star" src={ star } alt="star" />
            </div>
            <div className="book">
                <img className="cover" src={ cover } alt="cover" />
                <div className="content-info">
                    <span className="title">Тут типо название книги</span>
                    <span className="author">А тут типо автор</span>
                </div>
                <img className="star" src={ star } alt="star" />
            </div>
            <div className="book">
                <img className="cover" src={ cover } alt="cover" />
                <div className="content-info">
                    <span className="title">Тут типо название книги</span>
                    <span className="author">А тут типо автор</span>
                </div>
                <img className="star" src={ star } alt="star" />
            </div>
            <div className="book">
                <img className="cover" src={ cover } alt="cover" />
                <div className="content-info">
                    <span className="title">Тут типо название книги</span>
                    <span className="author">А тут типо автор</span>
                </div>
                <img className="star" src={ star } alt="star" />
            </div>
            <div className="book">
                <img className="cover" src={ cover } alt="cover" />
                <div className="content-info">
                    <span className="title">Тут типо название книги</span>
                    <span className="author">А тут типо автор</span>
                </div>
                <img className="star" src={ star } alt="star" />
            </div>
            <div className="book">
                <img className="cover" src={ cover } alt="cover" />
                <div className="content-info">
                    <span className="title">Тут типо название книги</span>
                    <span className="author">А тут типо автор</span>
                </div>
                <img className="star" src={ star } alt="star" />
            </div>
            <div className="book">
                <img className="cover" src={ cover } alt="cover" />
                <div className="content-info">
                    <span className="title">Тут типо название книги</span>
                    <span className="author">А тут типо автор</span>
                </div>
                <img className="star" src={ star } alt="star" />
            </div>
        </div>
    )
}

export default MainList