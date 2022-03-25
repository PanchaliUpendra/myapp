import React from "react";
import image from "./images/airbnb-logo2.png";
function Navbar()
{
    return(
        <header>
            <nav>
                <img src={image} className="logo-el"/>
            </nav>
        </header>
    )
}
export default Navbar;