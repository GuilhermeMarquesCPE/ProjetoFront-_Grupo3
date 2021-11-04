import React from "react";
import {Link} from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "./Home.css";
import Cadastro from "../Cadastro";
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
                    src="/Images/helmet.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <Link to="/servicoselecionado?servico=7dee1b35-4990-48be-b6af-643125b629e9"><h3 className="nomeServico">Engenheiros</h3></Link>
                    <p className="descricaoSH">Elaboração de projetos diversificados</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carrosselItem">
                    <img
                    className="d-block w-100"
                    src="/Images/PINTAR.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <Link to="/servicoselecionado?servico=6a9a41d6-b598-4205-93c7-f6dfceabbcc6"><h3 className="nomeServico">Pintores</h3></Link>
                    <p className="descricaoSH">Decoração de paredes e outras superfícies</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carrosselItem">
                    <img
                    className="d-block w-100"
                    src="/Images/professor particular.png"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <Link to="/servicoselecionado?servico=de3d9596-ebcf-4f58-8786-b2427b5c0d3e"><h3 className="nomeServico">Professor Particular</h3></Link>
                    <p className="descricaoSH">Reforço para diferentes disciplinas</p>
                    </Carousel.Caption>
                </Carousel.Item>
    </Carousel>
        </div>
    <br/>
    <br/>
    <br/>
    <div className="bora">
            <p className="tituloH">#BoraFazerDiferente</p>
        <div className="textoLogoH">
               <p className="encontreH">Encontre os serviços que 
                <br/>
                você precisa e ajude a
                <br/> 
                divulgar os trabalhadores 
                <br/>
                autônomos de todo o Brasil</p> 
            <img src="/Images/logoescura.jfif" alt="logo" className="logoH"></img>
        </div>

        <div className="botoesH">
            <Link to="servicos">
                <button type="button" class="btn btn-outline-dark btn-lg" onClick={() => Servicos}>Encontrar profissional</button>
            </Link>
            <Link to="Cadastro">
                <button type="button" class="btn btn-outline-dark btn-lg" onClick={() => Cadastro}>Quero trabalhar</button>
            </Link>
        </div>
        </div>
    <br/>
    <br/>
    <br/>
    <div className="notasH">
        <div className="missao">
            <p className="titleMissao">MISSÃO <FaWrench/></p>
            <p className="notasMissao"> Divulgar trabalhadores 
                <br/>autônomos, a fim de 
                <br/>serem reconhecidos e 
                <br/>se tornarem referência 
                <br/>em sua área de atuação</p>
        </div>
        <div className="visao">
            <p className="titleVisao">VISÃO <FaRegEye/></p>
            <p className="notasVisao">Fornecer um suporte
                <br/> digital necessário  
                <br/>para difundir 
                <br/> capacidades profissionais
                <br/>pouco valorizadas</p>
        
        </div>
            <div className="valores">
            <p className="titleValores">VALORES <FaHandshake/> </p>
            <p className="notasValores">• Trabalho em equipe
                <br/> • Profissionalismo
                <br/> • Respeito
                <br/> • Diversidade
                <br/> • Disponibilidade</p>
        </div>  
    </div>
    <br/>
    <br/>
    <br/>
    <div className="historia">
        <div className="margemH">
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
                <img src="/Images/carrinho.jfif" alt="logo" className="desenhoH"></img>
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