import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import "./perfilPessoal.css";
import Footer from "../../Components/Footer";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { MdLocationCity, MdLocationPin, MdWork, MdEditNote, MdCall, MdPerson} from "react-icons/md";
import api from "../../services/api";


function PerfilPessoal() {
    const usuarioID = sessionStorage.getItem("@autonomeasy-Id");
    const[usuario, setUsuario] = useState([]);
    
    useEffect(async() => {
      const info = await api.get(`/profissional/${usuarioID}`);
      console.log(info);
      setUsuario(info.data[0]);
      console.log(usuario);
      
    },[]);

  return (
    <div className="baseP">
      <Navbar />
      <div className="profile">
        <h2 className="fraseP">Bem Vindo! </h2>
        <Avatar sx={{ width: 150, height: 150, bgcolor: "#fabe36" }}>
          <h1 className="iconeP">{}</h1>
        </Avatar>
        <div className="informacoesP">
          <p> Nome: &nbsp;<div>{} </div></p>
          <p> Email: &nbsp;<div>{}</div></p>
        </div>
        <div className="change">
        <Link to="alterardados" className="ChangeData"> Alterar dados </Link>
        <Link to="cadastro" className="ChangePassword"> Alterar senha </Link>
        </div>
      </div>
        <div className="dadosPerfil">
          <div className="lineP">
            <MdPerson className="iconperfil" />
            <p>Nome: <div>{}</div></p>
          </div> 
          <div className="lineP">
            <MdLocationPin className="iconperfil" />
            <p>Estado: <div>{}</div> </p>
          </div> 
          <div className="lineP">
            <MdLocationCity className="iconperfil" />
            <p>Cidade: <div>{}</div> </p> 
          </div>
          <div className="lineP">
            <MdWork className="iconperfil" />
            <p>Tipo de Serviço: <div>{}</div> </p>
          </div>
          <div className="lineP">
            <MdEditNote className="iconperfil" />
            <p>Descrição: <div className="descricaop">{}</div></p>
          </div>
          <div className="lineP">
            <MdCall className="iconperfil" />
            <p>Contato: <div>{}</div></p>
          </div>
      </div>
      <Footer />
    </div>
  );
}
export default PerfilPessoal;
