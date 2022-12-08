import React from "react";
import { Link } from "react-router-dom";
import  "../../Components/Headers/headers.css";
function Header() {

    return(
        <header>
       

            <div className="btn-header">
                <Link to="/">
                        <button>Voltar Feed</button>
                </Link>
            </div>
        </header>
    )
    
}

export default Header