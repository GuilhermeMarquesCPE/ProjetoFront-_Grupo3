import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "./ServicoSelecionado.css";
import { Avatar, IconButton } from "@material-ui/core";
import { Button } from "react-bootstrap";
import { BiSend } from "react-icons/bi";

function ServicoSelecionado() {
  return (
    <div className="baseSS">
      <Navbar />
      <h1 className="title">ServicoSelecionado</h1>
      <div className="especificacoes">
        <p className="description">Especificações</p>
      </div>
      <br />
      <br />
      <div className="profissionais">
        <div className="perfilLaranja">
          <Avatar
            sx={{ width: 150, height: 150, bgcolor: "#FFBF69", marginRight: 3 }}
          >
            <h1 className="iconeSS">G</h1>
          </Avatar>
          <div className="caixa1">
            <p className="dadosSS">
              Nome
              <br />
              Estado
              <br />
              Cidade
            </p>
            <Button variant="outline-dark">Ver mais</Button>{" "}
          </div>
        </div>
        <br />
        <div className="perfilAzul">
          <Avatar
            sx={{ width: 150, height: 150, bgcolor: "#5FC2B0", marginRight: 3 }}
          >
            <h1 className="iconeSS">L</h1>
          </Avatar>
          <div className="caixa2">
            <p className="dadosSS">
              Nome
              <br />
              Estado
              <br />
              Cidade
            </p>
            <Button variant="outline-dark">Ver mais</Button>{" "}
          </div>
        </div>
        <br />
        <div className="perfilClaro">
          <Avatar
            sx={{ width: 150, height: 150, bgcolor: "#FABE36", marginRight: 3 }}
          >
            <h1 className="iconeSS">M</h1>
          </Avatar>
          <div className="caixa3">
            <p className="dadosSS">
              Nome
              <br />
              Estado
              <br />
              Cidade
            </p>
            <Button variant="outline-dark">Ver mais</Button>{" "}
          </div>
        </div>
        <br />
        <div className="perfilLaranjaClaro">
          <Avatar
            sx={{ width: 150, height: 150, bgcolor: "#CBF3F0", marginRight: 3 }}
          >
            <h1 className="iconeSS">N</h1>
          </Avatar>
          <div className="caixa4">
            <p className="dadosSS">
              Nome
              <br />
              Estado
              <br />
              Cidade
            </p>
            <Button variant="outline-dark">Ver mais</Button>{" "}
          </div>
        </div>
      </div>
      <div className="tudoComentarios">
        <div className="barraConteAqui">
          <p className="perguntaSS">Qual a sua opinião sobre esse serviço?</p>
          <input
            type="text"
            placeholder="Conte aqui"
            className="textoConteAqui"
          />
          <IconButton aria-label="upload picture" component="span">
            <BiSend />
          </IconButton>
        </div>
        <div className="Comentarios1">
            <div className="C1">
                <p>" <br/><br/><br/><br/><br/> "</p>
            </div>
            <div className="C1">
                <p>" <br/><br/><br/><br/><br/> "</p>
            </div>
            <div className="C1">
                <p>" <br/><br/><br/><br/><br/> "</p>
            </div>
        </div>
        <div className="Comentarios1">
            <div className="C1">
                <p>" <br/><br/><br/><br/><br/> "</p>
            </div>
            <div className="C1">
                <p>" <br/><br/><br/><br/><br/> "</p>
            </div>
            <div className="C1">
                <p>" <br/><br/><br/><br/><br/> "</p>
            </div>
        </div>
        <div className="Comentarios2"></div>
      </div>
      <Footer />
    </div>
  );
}

export default ServicoSelecionado;
