import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "./ServicoSelecionado.css";
import { Avatar } from "@material-ui/core";
import { Button } from "react-bootstrap";

function ServicoSelecionado() {
    return (
        <div className="base">
            <Navbar/>
            <h1 className="title">ServicoSelecionado</h1>
            <div className="especificacoes">
                <p className="description">Especificações</p>
            </div>
            <br/>
            <br/>
            <div className="profissionais">
                <div className="perfilLaranja">
                <Avatar sx={{ width: 150, height: 150, bgcolor: "#FFBF69" }}>
                    <h1 className="icone">N</h1>
                </Avatar>
                <div className="caixa1">
                    <p>Nome
                        <br/>
                        Estado
                        <br/>
                        Cidade
                    </p>
                </div>
                </div>
                <div className="perfilAzul">
                <Avatar sx={{ width: 150, height: 150, bgcolor: "#5FC2B0" }}>
          <h1 className="icone">N</h1>
        </Avatar>
                </div>
            </div>
            <Footer/>
        </div>
        
    );
}

export default ServicoSelecionado;