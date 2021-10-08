import React from "react";
import { Carousel } from "react-bootstrap";
import Navbar from "C:/Users/Guilherme/Desktop/CPE/RepoFront/ProjetoFront_Grupo3/src/Components/Navbar"
import "./Home.css"
import Footer from "../../Components/Footer";

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
        <Footer/>
    </div>
    )
}

export default Home;