import React from "react";
import {Link} from "react-router-dom";

function Menu(){
    return (
        <div className="estiloCabecalho">
            <img src="/Images/logo.png" alt="logo" className="logo"></img>

            <div className="navbar">
                <Link to="home" className="navbarLink">Home</Link>
                <Link to="servicos" className="navbarLink">Servicos</Link>
                <Link to="perfil" className="navbarLink">Perfil</Link>
                <Link to="Cadastro" className="navbarLink">Cadastro</Link>
                <Link to="Login" className="navbarLink">Login</Link>
            </div>
        </div>
    )
}

export default Menu;