import React from 'react'

import './App.sass'
import Header from "../header/header"
import MainList from "../main-list/main-list"

const App = () => {
    return (
        <div className="app">
            <Header />
            <MainList />
        </div>
    )
}

export default App
