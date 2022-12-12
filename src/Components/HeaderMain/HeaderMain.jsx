import React from "react";
import { Link } from "react-router-dom";
import  "../../Components/HeaderMain/headermain.css";
import  search from "../../Images/search.png";
import  config from "../../Images/configuracao.png";


function HeaderMain() {

    return(
        <header>
            <div className="logo">
                <Link to="/" className="text-logo"><h1>Filmes brasileiros</h1></Link>
                
            </div>
            
            <div className="serch-headerMain">
                <input type="text" />
                <img src={search} alt="" />
            </div>

            <div className="btn-header-main">
                <Link to= "/post">
                     <img src={config}></img>
                </Link>
            </div>
            
        </header>
    )
    
}

export default HeaderMain