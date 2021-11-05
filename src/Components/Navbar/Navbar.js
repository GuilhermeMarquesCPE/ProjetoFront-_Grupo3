import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import TemporaryDrawer from "../TemporaryDrawer";
import { Avatar } from "@mui/material";
import { BsFillPersonFill } from "react-icons/bs";
import api from "../../services/api";



function Navbar() {

    
    let icone = '';
    const usuarioID = sessionStorage.getItem("@autonomeasy-Id");
    const[usuario, setUsuario] = useState([]);
    
    

    useEffect(async() => {
        const info = await api.get(`/profissionalget/${usuarioID}`);
        setUsuario(info.data[0]);
        
        
      },[usuarioID]);
   
      if (usuario != null){
        {usuario.nome && (
        icone = usuario.nome[0]
        )}
    } 

    

    

    return (
    <div className="cabecalhoN">
            <div className="LogoButton">
            <div className="buttonNavbar"><TemporaryDrawer/></div>
            <Link to="home"><img src="/Images/logo.png" alt="logo" className="logoN"></img></Link>
            </div>
                         
            <div className="navbar">
                <Link to="home" className="navbarLink">Home</Link>
                <Link to="servicos" className="navbarLink">Serviços</Link>
                <Link to="perfilPessoal" className="navbarLink">Perfil</Link>
                <Link to="Cadastro" className="navbarLink">Cadastro</Link>
                <Link to="Login" className="navbarLink">Login</Link>
            </div>
            <div>
            <Avatar className="avatarN" sx={{  bgcolor: "#ffffff", borderColor: "#000000",}}>
            
            <h1 className="iconeN">{icone}</h1>
            
        </Avatar>   
        </div>    

     </div>
     
    );
}

export default Navbar;