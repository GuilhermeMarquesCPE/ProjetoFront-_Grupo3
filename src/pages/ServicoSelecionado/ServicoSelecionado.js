import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "./ServicoSelecionado.css";
import { Avatar, IconButton } from "@material-ui/core";
import { Button } from "react-bootstrap";
import { BiSend } from "react-icons/bi";
import { getListItemAvatarUtilityClass } from "@mui/material";

import Profissionalprop from "../../Components/ProfissionalSS/ProfissionalSS";
import Comentarioprop from "../../Components/ComentarioSS/ComentarioSS";

function ServicoSelecionado() {

  const profissionalSS = [
    {
      nome:"Laura",
      estado: "Minas",
      cidade: "Belo Horizonte"
    },
    {
      nome:"Matheus",
      estado: "Minas",
      cidade: "Belo Horizonte"
    },
    {
      nome:"Gabriela",
      estado: "Minas",
      cidade: "Belo Horizonte"
    },
    {
      nome:"Guilherme",
      estado: "Minas",
      cidade: "Belo Horizonte"
    }
  ]

  const comentariosSS = [
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
    // {
    //   comentario:"Muito bom o servico"
    // },
    // {
    //   comentario:"Muito bom o servico"
    // },
    // {
    //   comentario:"Muito bom o servico"
    // }
  

  return (
    <div className="baseSS">
      <Navbar />
      <br/>
      <h1 className="titleSS">ServicoSelecionado</h1>
      <div className="especificacoes">
        <p className="description">Especificações</p>
      </div>
      <br />
      <br />
      <div className="profissionais">
      
        <div >
          
          {profissionalSS.map((element) => (
            <Profissionalprop className="dadosSS" key={profissionalSS.id} profissionalSS={element} />
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
        {comentariosSS.map((element) => (
            <>
            <Comentarioprop key={comentariosSS.id} comentariosSS={element} />
            
            </>
            ))} 
        
            
        </div>
        <div className="Comentarios1">
            <div className="C2">
                <p>" <br/><br/><br/><br/> "</p>
            </div>
            <div className="C2">
                <p>" <br/><br/><br/><br/> "</p>
            </div>
            <div className="C2">
                <p>" <br/><br/><br/><br/> "</p>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ServicoSelecionado;
