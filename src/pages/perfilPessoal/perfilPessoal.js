import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import "./perfilPessoal.css";
import Footer from "../../Components/Footer";
import { Avatar } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import { MdLocationCity, MdLocationPin, MdWork, MdEditNote, MdCall, MdPerson} from "react-icons/md";
import api from "../../services/api";
import {logout} from "../../services/auth";


function PerfilPessoal() {
    const usuarioID = sessionStorage.getItem("@autonomeasy-Id");
    const[usuario, setUsuario] = useState([]);
    const[servicoID, setServicoID] = useState([]);
    const history = useHistory();
    
    useEffect(async() => {
      const info = await api.get(`/profissionalget/${usuarioID}`);
      setUsuario(info.data[0]);
      
      
    },[]);



    const servicoNome = usuario.profissional_servico_id;
    
    
    useEffect(async() => {
    const respostaget = await api.get(`/servicoget/${servicoNome}`);
    
    setServicoID(respostaget.data[0]);
    
     
  },[servicoNome]);

  async function handleLogout(e) {
    e.preventDefault();
    try {
      logout();
      history.push("/login");
    } catch (error) {
      if(error.response.status === 403){
        alert("Credenciais invalidas!");
      }
      else {
        alert(error.response.data.notification);
      }
    }
  }
  


  return (
    <div className="baseP">
      <Navbar />
      <div className="profile">
        <h2 className="fraseP">Bem Vindo! </h2>
        <Avatar sx={{ width: 150, height: 150, bgcolor: "#fabe36" }}>
          {usuario.nome && (
            <h1 className="iconeP">{usuario.nome[0]}</h1>
          )}
        </Avatar>
        <div className="informacoesP">
          <p> Nome: &nbsp;<div>{usuario.nome} </div></p>
          <p> Email: &nbsp;<div>{usuario.email}</div></p>
        </div>
        <div className="alterarPP">
        <div className="change">
        <Link to="alterardados" className="ChangeData" > Alterar dados </Link>
        <div to="alterardados" className="ChangeData" > Alterar senha </div>
        </div>
        <br/>
        <div className="change">
        <Link className="ChangeData" onClick={handleLogout}> Sair </Link>
        </div>
        </div>
      </div>
        <div className="dadosPerfil">
          <div className="lineP">
            <MdPerson className="iconperfil" />
            <p>Nome: <div>{usuario.nome}</div></p>
          </div> 
          <div className="lineP">
            <MdLocationPin className="iconperfil" />
            <p>Estado: <div>{usuario.email}</div> </p>
          </div> 
          <div className="lineP">
            <MdLocationCity className="iconperfil" />
            <p>Cidade: <div>{usuario.cidade}</div> </p> 
          </div>
          
          <div className="lineP">
          
            <MdWork className="iconperfil" />
              
              <p>Tipo de Serviço: <div>{servicoID?.nome}</div> </p>
              
          </div>
          
          <div className="lineP">
            <MdEditNote className="iconperfil" />
            <p>Descrição: <div className="descricaop">{usuario.descricao}</div></p>
          </div>
          <div className="lineP">
            <MdCall className="iconperfil" />
            <p>Contato: <div>{usuario.contato}</div></p>
          </div>
      </div>
      <Footer />
    </div>
  );
}
export default PerfilPessoal;
