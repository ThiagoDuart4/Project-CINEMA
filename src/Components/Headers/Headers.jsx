import React from "react";
import { Link } from "react-router-dom";
import  "../../Components/Headers/headers.css";
import voltar from  "../../Images/voltar.png"
function Header() {

    return(
        <header>
       

            <div className="btn-header">
                <Link to="/">
                        <img src={voltar}></img>
                </Link>
            </div>
        </header>
    )
    
}

export default Header