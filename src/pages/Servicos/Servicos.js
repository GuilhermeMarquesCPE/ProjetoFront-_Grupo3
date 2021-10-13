import React from "react";
import "./Servicos.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { BiSearchAlt } from "react-icons/bi";


function Servicos(){
    return (
    <div className="servico">
        <Navbar/>
        <div className="fundo">

            <form className="barraBusca">
                
                    <input class="form-control me-2" type="search" placeholder="Pesquisar por profissional" aria-label=" Pesquisar por profissional" className="pesquisa"></input>
                
                <div className="searchButton">
                    <button class="btn btn-outline-success" type="submit">
                    <BiSearchAlt className="icon"/> Buscar
                    </button>
                </div>
            </form>

            <p className="escrito">Encontre o 
            <br/>
            profissional 
            <br/> 
            ideal no serviço  
            <br/>
            que procura!
        </p>
        </div>
     <Footer/>    
    </div>  
         
    )
}

export default Servicos;