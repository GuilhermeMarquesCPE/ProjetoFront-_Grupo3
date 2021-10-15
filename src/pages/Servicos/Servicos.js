import React from "react";
import "./Servicos.css";
import { Button } from "react-bootstrap";
import { BiSearchAlt } from "react-icons/bi";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";


function Servicos(){
    return (
        <div className="Servicos">
            <Navbar/>
            <form className="barraBusca">
                <input class="form-control me-2" type="search" placeholder="Pesquisar por profissional" className="pesquisa"></input>
                    <div className="searchButton">
                        <button class="btn btn-outline-success btn-sm" type="button">
                             <BiSearchAlt className="iconservicos"/>Buscar
                        </button>
                    </div>
            </form>
            <div className="conteudo">
                
                <div className="texto">
                        
                    <p className="text">
                        Encontre o <br/>Profissional <br/> ideal no serviço<br/> que procura!
                    </p>

                </div>
                <div className="trabalhos">
                    <Button variant="outline-dark" className="emprego">Professores particulares</Button>
                    <Button variant="outline-dark" className="emprego">Fotógrafos</Button> <br/>
                    <Button variant="outline-dark" className="emprego">Engenheiros</Button>
                    <Button variant="outline-dark" className="emprego">Encanador</Button> <br/>
                    <Button variant="outline-dark" className="emprego" >Programador</Button>
                    <Button variant="outline-dark" className="emprego">Editor de vídeo</Button> <br/>
                    <Button variant="outline-dark" className="emprego">Pintor</Button> 
                    <Button variant="outline-dark" className="emprego">Cuidador de pets</Button> <br/>
                    <Button variant="outline-dark" className="emprego">Cozinheiro</Button> 
                    <Button variant="outline-dark" className="emprego">Costureiro</Button><br/> 
                    <Button variant="outline-dark" className="emprego">Babá</Button>
                    <Button variant="outline-dark" className="emprego">Enfermeiro</Button><br/>
                        
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Servicos;