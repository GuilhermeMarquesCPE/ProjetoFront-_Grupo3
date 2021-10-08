import React from "react";
import {Link} from "react-router-dom";
import { Carousel, Button } from "react-bootstrap";
import "./Home.css";
import Navbar from "../Navbar";
import Cadastro from "../Cadastro";
import Login from "../Login/Login";
import Servicos from "../Servicos/Servicos";

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
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carrosselItem">
                    <img
                    className="d-block w-100"
                    src="/Images/pintor.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carrosselItem">
                    <img
                    className="d-block w-100"
                    src="/Images/professor.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
    </Carousel>
        </div>
    <br/>
    <br/>
    <br/>
    <div className="bora">
        <div className="titulo">
            <h1>#BoraFazerAcontecer</h1>
        </div>
        <div className="textoLogo">
            <p>Encontre os serviços que 
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
                <Button variant="outline-dark" onClick={Servicos}>Encontrar profissional</Button>
            </Link>
            <Link to="Cadastro">
                <Button variant="outline-dark" onClick={Cadastro}>Quero trabalhar</Button>
            </Link>
        </div>
        </div>
    <br/>
    <br/>
    <br/>
    <div className="historia">
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
                <img src="/Images/carrinho.jfif" alt="logo" className="logo"></img>
        </div>

    </div>
    </div>
    )
}

export default Home;