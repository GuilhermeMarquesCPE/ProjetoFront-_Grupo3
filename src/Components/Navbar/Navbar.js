import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
    <div className="cabecalhoN">

            <img src="/Images/logo.png" alt="logo" className="logoN"></img>

            <div className="navbar">
                <Link to="home" className="navbarLink">Home</Link>
                <Link to="servicos" className="navbarLink">Serviços</Link>
                <Link to="perfil" className="navbarLink">Perfil</Link>
                <Link to="Cadastro" className="navbarLink">Cadastro</Link>
                <Link to="Login" className="navbarLink">Login</Link>
            </div>

     </div>
     
    );
}

export default Navbar;