import React from "react";
import "./Servicos.css";
import { Button } from "react-bootstrap";
import { BiSearchAlt } from "react-icons/bi";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";


function Servicos(){
    const data= [
        "Professores Particulares", "Fotógrafos", "Engenheiros", "Encanadores", "Programadores", "Editores de Vídeo", "Pintores", "Cuidadores de Pet", "Cozinheiros", "Costureiros", "Babás", "Enfermeiros"
    ]
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
            <div className="conteudoS">
                
                <div className="textoS">
                        
                    <p className="textS">
                        Encontre o <br/>Profissional <br/> ideal no serviço<br/> que procura!
                    </p>

                </div>
                <div className="trabalhos">
                    {data.map((element, index) => (
                        <>
                        <Button variant="outline-dark" className="emprego">{element}</Button> 
                    {(index%2) ? (<br/>):<></>}
                        </>
                    ))}
                    
                        
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Servicos;