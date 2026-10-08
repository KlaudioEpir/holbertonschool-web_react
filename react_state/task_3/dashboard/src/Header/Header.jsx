import React, { Component } from "react";
import newContext from "../Context/context";
import logo from "../assets/holberton-logo.jpg";
import "./Header.css";

class Header extends Component {
    static contextType = newContext;

    render() {
        const { user, logOut } = this.context;

        return (
            <div className="App-header">
                <img src={logo} alt="holberton logo" />
                <h1 style={{ color: "#e1003c" }}>
                    School dashboard
                </h1>

                {user.isLoggedIn && (
                    <div id="logoutSection">
                        Welcome {user.email} (
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                logOut();
                            }}
                        >
                            logout
                        </a>
                        )
                    </div>
                )}
            </div>
        );
    }
}

export default Header;
