import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "./ServicoSelecionado.css";
import api from "../../services/api";
import { IconButton } from "@material-ui/core";
import { BiSend } from "react-icons/bi";
import Profissionalprop from "../../Components/ProfissionalSS/ProfissionalSS";
import Comentarioprop from "../../Components/ComentarioSS/ComentarioSS";
import { useLocation } from "react-router";

function ServicoSelecionado() {

  const location = useLocation();
  const {search} = location;
  const params = new URLSearchParams(search);
  const servicoID = params.get("servico");

  const[profissionais, setProfissionais] = useState([]);
  const[servico, setServico] = useState([]);

  useEffect(async() => {

    const resposta = await api.get(`/profissional/${servicoID}`);
    setProfissionais(resposta.data);
     
  },[]);

  useEffect(async() => {
    
    const resposta = await api.get(`/servicoget/${servicoID}`);
    setServico(resposta.data[0]);
     
  },[]);


  
  const comentariosSS = [
    {
      comentario:"Muito bom o servico"
    },
    {
      comentario:"Muito bom o servico"
    },
    {
      comentario:"Muito bom o servico"
    },
 
     {
       comentario:"Muito bom o servico"
     },
     {
       comentario:"Muito bom o servico"
     },
    {
      comentario:"Muito bom o servico"
    }
  ]

  return (
    <div className="baseSS">
      <Navbar />
      <br/>
      <h1 className="titleSS">{servico.nome}</h1>
      <div className="especificacoes">
        <p className="description">{servico.especificacoes}</p>
      </div>
      <br />
      <br />
      <div className="profissionais">
      
        <div >
          
          {profissionais.map((element) => (
            <Profissionalprop className="dadosSS" key={profissionais.id} profissionalSS={element} />
          ))}

      </div>
      </div>
      <div className="tudoComentarios">
      
        <div className="barraConteAqui">
          <p className="perguntaSS">Qual a sua opinião sobre esse serviço?</p>
          <div className="barraIcon">
          <input
            type="text"
            placeholder="Conte aqui"
            className="textoConteAqui"
          />
          <IconButton aria-label="upload picture" component="span">
            <BiSend />
          </IconButton>
          </div>
        </div>
         
        <div className="Comentarios1">
        {comentariosSS.map((element, index) => (
            <>
            <Comentarioprop key={comentariosSS.id} comentariosSS={element} />
             <br/>
            </>
          ))}
        
            
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ServicoSelecionado;
