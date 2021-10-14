import React from "react";
import Navbar from "../../Components/Navbar";
import "./Perfil.css";
import Footer from "../../Components/Footer";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { MdLocationCity, MdLocationPin, MdWork, MdEditNote, MdCall, MdPerson} from "react-icons/md";

function Perfil() {
  return (
    <div className="base">
      <Navbar />
      <div className="profile">
        <h2 className="frase">Bem Vindo, </h2>
        <Avatar sx={{ width: 150, height: 150, bgcolor: "#fabe36" }}>
          <h1 className="icone">N</h1>
        </Avatar>
        <div className="informacoes">
          <p> Nome: Matheus Profissional</p>
          <p> Email: matheusprofissional@gmail.com</p>
        </div>
        <div className="change">
        <Link to="alterardados" className="ChangeData"> Alterar dados </Link>
        <Link to="cadastro" className="ChangePassword"> Alterar senha </Link>
        </div>
      </div>
        <div className="dados">
          <div className="line">
            <MdPerson className="iconperfil" />
            <p>Nome: </p>
          </div>
          <div className="line">
            <MdLocationPin className="iconperfil" />
            <p>Estado: </p>
          </div>
          <div className="line">
            <MdLocationCity className="iconperfil" />
            <p>Cidade: </p>
          </div>
          <div className="line">
            <MdWork className="iconperfil" />
            <p>Tipo de Serviço: </p>
          </div>
          <div className="line">
            <MdEditNote className="iconperfil" />
            <p>Descrição: </p>
          </div>
          <div className="line">
            <MdCall className="iconperfil" />
            <p>Contato: </p>
          </div>
      </div>
      <Footer />
    </div>
  );
}
export default Perfil;
