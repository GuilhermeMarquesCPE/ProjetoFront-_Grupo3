import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import "./Perfil.css";
import Footer from "../../Components/Footer";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { MdLocationCity, MdLocationPin, MdWork, MdEditNote, MdCall, MdPerson} from "react-icons/md";
import api from "../../services/api";

function Perfil() {

  const [elementos,setElementos] = useState([]);

  useEffect(async() => {
    const tipos = await api.get('/profissional/todos');
    const auxTipos = [];
    tipos.data.forEach((response) => {
        auxTipos.push(response.nome);
    });

    setElementos(auxTipos);

},[]);


  const usuarioPerfil = {
    nome: elementos,
    email: "laurapires@gmail.com",
    estado: "Minas Gerais",
    servico: "Babá",
    cidade: "Belo Horizonte",
    descricao: "Atuo há nos na profissão",
    contato: "99999-9999"

  }

  return (
    <div className="baseP">
      <Navbar />
      <div className="profile">
        <h2 className="fraseP">Bem Vindo! </h2>
        <Avatar sx={{ width: 150, height: 150, bgcolor: "#fabe36" }}>
          <h1 className="iconeP">{usuarioPerfil.nome[0]}</h1>
        </Avatar>
        <div className="informacoesP">
          <p> Nome: &nbsp;<div>{usuarioPerfil.nome} </div></p>
          <p> Email: &nbsp;<div>{usuarioPerfil.email}</div></p>
        </div>
        <div className="change">
        <Link to="alterardados" className="ChangeData"> Alterar dados </Link>
        <Link to="cadastro" className="ChangePassword"> Alterar senha </Link>
        </div>
      </div>
        <div className="dadosPerfil">
          <div className="lineP">
            <MdPerson className="iconperfil" />
            <p>Nome: <div>{usuarioPerfil.nome}</div></p>
          </div> 
          <div className="lineP">
            <MdLocationPin className="iconperfil" />
            <p>Estado: <div>{usuarioPerfil.estado}</div> </p>
          </div> 
          <div className="lineP">
            <MdLocationCity className="iconperfil" />
            <p>Cidade: <div>{usuarioPerfil.cidade}</div> </p> 
          </div>
          <div className="lineP">
            <MdWork className="iconperfil" />
            <p>Tipo de Serviço: <div>{usuarioPerfil.servico}</div> </p>
          </div>
          <div className="lineP">
            <MdEditNote className="iconperfil" />
            <p>Descrição: <div className="descricaop">{usuarioPerfil.descricao}</div></p>
          </div>
          <div className="lineP">
            <MdCall className="iconperfil" />
            <p>Contato: <div>{usuarioPerfil.contato}</div></p>
          </div>
      </div>
      <Footer />
    </div>
  );
}
export default Perfil;
