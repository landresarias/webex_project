import React from 'react';

export default function Nav(){
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark justify-content-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Book_icon_1.png" width="25" height="25"/>
            <a className="navbar-brand text-center m-3" href="/">Home</a>
            <div className="collapse navbar-collapse" id="navbarsExample04">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/Setup">Setup</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Contact">Contact Us</a>
                    </li>
                </ul>
            </div>

        </nav>
    )
}