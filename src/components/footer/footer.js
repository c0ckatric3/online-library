import React from "react"

import "./footer.sass"


const Footer = () => {

    return (
        <div className="footer">
            <div className="social">
                <ul>
                    <li><a href="#">Vkontakte</a></li>
                    <li><a href="#">Telegram</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </div>
            <div className="contacts">
                <ul>
                    <li><a href="#">Phone</a></li>
                    <li><a href="#">E-mail Google</a></li>
                    <li><a href="#">E-mail Yandex</a></li>
                </ul>
            </div>
            <div className="interesting">
                <ul>
                    <li><a href="#">Devourer</a></li>
                    <li><a href="#">FireBase</a></li>
                    <li><a href="#">GitHub</a></li>
                    <li><a href="#">Vercel</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer