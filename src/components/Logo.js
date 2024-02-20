import React from "react";
//import logo from '../placeholder.svg';

function Logo(props) {
    return (
        <div className="logoContainer">
            <img className="logo" src={props.src} alt="Logo" />
        </div>
    );
}

export default Logo;