import React, { useEffect, useState } from "react";
import "./Servicos.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { BiSearchAlt } from "react-icons/bi";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import api from "../../services/api";


function Servicos(){

    const[elementos, setElementos] = useState([]);

    useEffect(async() => {
        const tipos = await api.get('/servico/tipos');
        const auxTipos = [];
        tipos.data.forEach((response) => {
            auxTipos.push({label:response.nome, value:response.servico_id});
        });
        
        setElementos(auxTipos);
        
    },[]);
    
    return (
        <div className="Servicos">
            <Navbar/>
            <form className="barraBusca">
                <input class="form-control me-2" type="search" placeholder="Pesquisar por profissional" className="pesquisa"></input>
                    <div className="searchButton">
                        <button class="btn btn-outline-success btn-sm" type="button">
                             <BiSearchAlt className="iconservicos"/><p className="buscarS">Buscar</p>
                        </button>
                    </div>
            </form>
            <div className="conteudoS">
                
                <div className="textoS">
                        
                    <p className="textS">
                        Encontre o Profissional ideal no serviço que procura!
                    </p>

                </div>
                <div className="trabalhos">
                    {elementos.map((element, index) => (
                        <>
                        {<Link to={`/servicoselecionado?servico=${element.value}`} >
                            <Button variant="outline-dark" className="emprego" value={element.value}>{element.label}</Button>
                        </Link>}
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