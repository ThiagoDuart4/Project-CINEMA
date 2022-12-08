import React from "react";
import { Link } from "react-router-dom";
import  "../../Components/HeaderMain/headermain.css";
function HeaderMain() {

    return(
        <header>
            <div className="logo">
                <h1>Filmes brasileiros</h1>
            </div>

            <div className="btn-header-main">
                <Link to= "/post">
                     <button>New Post</button>
                </Link>
                
            </div>
        </header>
    )
    
}

export default HeaderMain