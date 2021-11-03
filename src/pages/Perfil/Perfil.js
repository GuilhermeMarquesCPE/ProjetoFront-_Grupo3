import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import "./Perfil.css";
import Footer from "../../Components/Footer";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { MdLocationCity, MdLocationPin, MdWork, MdEditNote, MdCall, MdPerson} from "react-icons/md";

function Perfil(profissionalSS) {
  console.log(profissionalSS);

  return (
    <div className="baseP">
      <Navbar />
      <div className="profile">
        <h2 className="fraseP">Bem Vindo! </h2>
        <Avatar sx={{ width: 150, height: 150, bgcolor: "#fabe36" }}>
          <h1 className="iconeP">{profissionalSS.location.state.profissionalSS.nome[0]}</h1>
        </Avatar>
        <div className="informacoesP">
          <p> Nome: &nbsp;<div>{profissionalSS.location.state.profissionalSS.nome} </div></p>
          <p> Email: &nbsp;<div>{profissionalSS.location.state.profissionalSS.email}</div></p>
        </div>
      </div>
        <div className="dadosPerfil">
          <div className="lineP">
            <MdPerson className="iconperfil" />
            <p>Nome: <div>{profissionalSS.location.state.profissionalSS.nome}</div></p>
          </div> 
          <div className="lineP">
            <MdLocationPin className="iconperfil" />
            <p>Estado: <div>{profissionalSS.location.state.profissionalSS.estado}</div> </p>
          </div> 
          <div className="lineP">
            <MdLocationCity className="iconperfil" />
            <p>Cidade: <div>{profissionalSS.location.state.profissionalSS.cidade}</div> </p> 
          </div>
          <div className="lineP">
            <MdWork className="iconperfil" />
            <p>Tipo de Serviço: <div>{profissionalSS.location.state.profissionalSS.servico}</div> </p>
          </div>
          <div className="lineP">
            <MdEditNote className="iconperfil" />
            <p>Descrição: <div className="descricaop">{profissionalSS.location.state.profissionalSS.descricao}</div></p>
          </div>
          <div className="lineP">
            <MdCall className="iconperfil" />
            <p>Contato: <div>{profissionalSS.location.state.profissionalSS.contato}</div></p>
          </div>
      </div>
      <Footer />
    </div>
  );
}
export default Perfil;
