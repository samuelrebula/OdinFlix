import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://see.fontimg.com/api/renderfont4/2Kge/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjRTJFMkUyIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/b2RpbmZsaXg/norse-bold.png" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://avatars.githubusercontent.com/u/4441966?s=280&v=4" alt="Usuário" />
                </a>
            </div>
        </header>
    )
}