import React from "react"

import "./footer.sass"


const Footer = () => {

    return (
        <div className="footer">
            <div className="social">
                <ul>
                    <li className="title">Social</li>
                    <li><a href="#" className="vk">Vkontakte</a></li>
                    <li><a href="#" className="tg">Telegram</a></li>
                    <li><a href="#" className="inst">Instagram</a></li>
                </ul>
            </div>
            <div className="contacts">
                <ul>
                    <li className="title">Contacts</li>
                    <li><a href="#" className="phone">Phone</a></li>
                    <li><a href="#" className="google">E-mail Google</a></li>
                    <li><a href="#" className="yandex">E-mail Yandex</a></li>
                </ul>
            </div>
            <div className="interesting">
                <ul>
                    <li className="title">Interesting</li>
                    <li><a href="#" className="dev">Devourer</a></li>
                    <li><a href="#" className="fb">FireBase</a></li>
                    <li><a href="#" className="gh">GitHub</a></li>
                    <li><a href="#" className="ver">Vercel</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer