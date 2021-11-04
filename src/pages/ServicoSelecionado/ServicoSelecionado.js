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
import { useHistory } from "react-router-dom";

function ServicoSelecionado() {

  const location = useLocation();
  const {search} = location;
  const params = new URLSearchParams(search);
  const servicoID = params.get("servico");

  const[profissionais, setProfissionais] = useState([]);
  const[servico, setServico] = useState([]);
  const[comentarios, setComentarios] = useState([]);
  const [conte, setConte] = useState();
  const[conteudo, setConteudo] = useState("");
  console.log(conte)

  const history = useHistory();

  useEffect(async() => {

    const resposta = await api.get(`/profissional/${servicoID}`);
    setProfissionais(resposta.data);
     
  },[]);

  useEffect(async() => {
    
    const resposta = await api.get(`/servicoget/${servicoID}`);
    setServico(resposta.data[0]);
     
  },[]);

  useEffect(async() => {
    
    const resposta = await api.get(`/comentario/${servicoID}`);
    setComentarios(resposta.data);
     
  },[]);


 
  const conteAqui = {
      corpo: conte,
      comentario_servico_id: servicoID
      
  };

  async function handleConteAqui(e) {
    e.preventDefault();
    try {
        const response = await api.post('/comentario', conteAqui);
        // history.push(`/servicoselecionado?servico=${servicoID}`);
        const resposta = await api.get(`/comentario/${servicoID}`);
        setComentarios(resposta.data);
        setConte("");
    } catch (error) {
      if(error.response.status === 403){
        alert("Comentário inválido!");
      }
      else {
        alert(error.response.data.notification);
      }
    }
  }

  return (
    <div className="baseSS">
      <Navbar />
      <br/>
      <h1 className="titleSS">{servico?.nome}</h1>
      <div className="especificacoes">
        <p className="description">{servico?.especificacoes}</p>
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
            onChange={(e) => setConte(e.target.value)}
            value= {conte}
            
          />
          <IconButton aria-label="upload picture" component="span" onClick={handleConteAqui}>
            <BiSend />
          </IconButton>
          </div>
        </div>
         
        <div className="Comentarios1">
        {comentarios.map((element) => (
            <>
            <Comentarioprop key={comentarios.id} comentariosSS={element} />
            </>
            
            
          ))}
        
            
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ServicoSelecionado;
