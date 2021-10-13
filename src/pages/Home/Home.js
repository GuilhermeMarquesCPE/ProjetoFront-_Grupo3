import React from "react";
import {Link} from "react-router-dom";
import { Carousel, Button } from "react-bootstrap";
import "./Home.css";
import Cadastro from "../Cadastro";
import Login from "../Login/Login";
import Servicos from "../Servicos/Servicos";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import {FaRegEye, FaWrench, FaHandshake} from "react-icons/fa";

function Home(){
    return (
    <div className="home" >
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <div className="areaCarrossel">
            <Carousel className="carrossel">
                <Carousel.Item className="carrosselItem">
                    <img
                    className="d-block w-100"
                    src="/Images/imagem3.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Engenheiros</h3>
                    <p>Elaboração de projetos diversificados</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carrosselItem">
                    <img
                    className="d-block w-100"
                    src="/Images/pintor.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Pintores</h3>
                    <p>Decoração de paredes e outras superfícies</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carrosselItem">
                    <img
                    className="d-block w-100"
                    src="/Images/professor.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Professor Particular</h3>
                    <p>Reforço para diferentes disciplinas</p>
                    </Carousel.Caption>
                </Carousel.Item>
    </Carousel>
        </div>
    <br/>
    <br/>
    <br/>
    <div className="bora">
            <p className="titulo">#BoraFazerDiferente</p>
        <div className="textoLogo">
               <p className="encontre">Encontre os serviços que 
                <br/>
                você precisa e ajude a
                <br/> 
                divulgar os trabalhadores 
                <br/>
                autônomos de todo o Brasil</p> 
            <img src="/Images/logoescura.jfif" alt="logo" className="logo"></img>
        </div>

        <div className="botoes">
            <Link to="servicos">
                <button type="button" class="btn btn-outline-dark btn-lg" onClick={Servicos}>Encontrar profissional</button>
            </Link>
            <Link to="Cadastro">
                <button type="button" class="btn btn-outline-dark btn-lg" onClick={Cadastro}>Quero trabalhar</button>
            </Link>
        </div>
        </div>
    <br/>
    <br/>
    <br/>
    <div className="notas">
        <div className="missao">
            <p className="titleMissao">MISSÃO <FaWrench/></p>
            <p className="notasMissao"> Divulgar trabalhadores
                <br/> autônomos 
                <br/>competentes, a fim de 
                <br/>serem reconhecidos e 
                <br/>se tornarem referência 
                <br/>em sua área de atuação</p>
        </div>
        <div className="visao">
            <p className="titleVisao">VISÃO <FaRegEye/></p>
            <p className="notasVisao">Fornecer o suporte
                <br/> digital necessário para 
                <br/>difundir capacidades 
                <br/>pouco valorizadas</p>
        
        </div>
            <div className="valores">
            <p className="titleValores">VALORES <FaHandshake/> </p>
            <p className="notasValores">• Trabalho em equipe
                <br/> • Profissionalismo
                <br/> • Respeito
                <br/> • Disponibilidade</p>
        </div>  
    </div>
    <br/>
    <br/>
    <br/>
    <div className="historia">
        <div className="margem">
            <div className="textoHist">
            <p>A AutonomEASY é uma empresa do ramo de
                <br/>
                serviços fundada por Júlia em 2000. Conta com
                <br/> 
                a divulgação dos melhores trabalhadores 
                <br/>
                autônomos de diferentes áreas, ofertando
                <br/>
                excelência no atendimento ao cliente e no
                <br/>
                suporte a todos os membros. Júlia é uma 
                <br/>
                empresária bem sucedida e apaixonada pelo 
                <br/>
                potencial impacto positivo que o trabalho 
                <br/>
                independente pode causar.</p>
        </div>
                <img src="/Images/carrinho.jfif" alt="logo" className="desenho"></img>
    </div>
        </div>
    <br/>
    <br/>
    <br/>
    <Footer/>
    </div>
    )
}

export default Home;