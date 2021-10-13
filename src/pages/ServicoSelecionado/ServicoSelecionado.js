import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "./ServicoSelecionado.css";

function ServicoSelecionado() {
    return (
        <div className="base">
            <Navbar/>
            <h1 className="title">ServicoSelecionado</h1>
            <div className="especificacoes">
                <p className="description">Especificações</p>
            </div>
            <Footer/>
        </div>
        
    );
}

export default ServicoSelecionado;