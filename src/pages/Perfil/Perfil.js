import React from "react";
import Navbar from "../../Components/Navbar";
import "./Perfil.css";
import Footer from "../../Components/Footer";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { MdLocationCity, MdLocationPin, MdWork, MdEditNote, MdCall, MdPerson} from "react-icons/md";

function Perfil() {
  return (
    <div className="baseP">
      <Navbar />
      <div className="profile">
        <h2 className="fraseP">Bem Vindo, </h2>
        <Avatar sx={{ width: 150, height: 150, bgcolor: "#fabe36" }}>
          <h1 className="iconeP">N</h1>
        </Avatar>
        <div className="informacoesP">
          <p> Nome: Matheus Profissional</p>
          <p> Email: matheusprofissional@gmail.com</p>
        </div>
        <div className="change">
        <Link to="alterardados" className="ChangeData"> Alterar dados </Link>
        <Link to="cadastro" className="ChangePassword"> Alterar senha </Link>
        </div>
      </div>
        <div className="dadosPerfil">
          <div className="lineP">
            <MdPerson className="iconperfil" />
            <p>Nome: <div>Matheus Portela Carvalho Bastos</div></p>
          </div> 
          <div className="lineP">
            <MdLocationPin className="iconperfil" />
            <p>Estado: <div>Minas Gerais</div> </p>
          </div> 
          <div className="lineP">
            <MdLocationCity className="iconperfil" />
            <p>Cidade: <div>Lavras</div> </p> 
          </div>
          <div className="lineP">
            <MdWork className="iconperfil" />
            <p>Tipo de Serviço: <div>Engenheiro</div> </p>
          </div>
          <div className="lineP">
            <MdEditNote className="iconperfil" />
            <p>Descrição: <div className="descricaop">Engenheiro recem formado, cursei engenharia de controle e automaçao na ufmg e blablablablablalablablablabla</div></p>
          </div>
          <div className="lineP">
            <MdCall className="iconperfil" />
            <p>Contato: <div>99 99999-9999</div></p>
          </div>
      </div>
      <Footer />
    </div>
  );
}
export default Perfil;
