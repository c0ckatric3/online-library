import React from 'react'

import './App.sass'
import Header from "../header/header"
import MainList from "../main-list/main-list"
import Footer from "../footer/footer"

const App = () => {
    return (
        <div className="app">
            <Header />
            <MainList />
            <Footer />
        </div>
    )
}

export default App
