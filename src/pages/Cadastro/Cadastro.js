import React, { useState } from "react";
import "./cadastro.css";
import { Form, Button, Dropdown, DropdownButton } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom"; 
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";


function Cadastro(){
    
    function cadastro(){
        history.push("login");
    }

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();
    const [Nome, setNome] = useState();
    const [ConfirmPassword, setConfirmPassword] = useState();
    const [celular, setCelular] = useState();
    const [Cidade, setCidade] = useState();
    const [Estado, setEstado] = useState();

    return (
        <div className="cadastro">
            <Navbar/>
            <div className="containerC">
                <p className="cadastre">Cadastre-se em AutonomEASY</p>
                <div className="Formulario">
                    <Form className="inputsC">
                        <Form.Group className="mb-3" controlId="Nome">
                        <br/>
                            <Form.Control type="nome" placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Email">
                            <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Celular">
                            <Form.Control type="Celular" placeholder="Contato" onChange={(e) => setCelular(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Estado">
                            <Form.Control type="Estado" placeholder="Estado" onChange={(e) => setEstado(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Cidade">
                            <Form.Control type="Cidade" placeholder="Cidade" onChange={(e) => setCidade(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="senha">
                            <Form.Control type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="ConfirmPass">
                            <Form.Control type="password" placeholder="Confirmar senha" onChange={(e) => setConfirmPassword(e.target.value)} />
                        </Form.Group>
                    </Form>
                    </div>

                    <DropdownButton className="dropButton" title="Trabalhos oferecidos" >
                        <Dropdown.Item as="button">Pintor</Dropdown.Item>
                        <Dropdown.Item as="button">Professor Particular</Dropdown.Item>
                        <Dropdown.Item as="button">Engenheiro</Dropdown.Item>
                        <Dropdown.Item as="button">Fotógrafo</Dropdown.Item>
                        <Dropdown.Item as="button">Cozinheiro</Dropdown.Item>
                        <Dropdown.Item as="button">Programador</Dropdown.Item>
                        <Dropdown.Item as="button">Babá</Dropdown.Item>
                        <Dropdown.Item as="button">Encanador</Dropdown.Item>
                        <Dropdown.Item as="button">Cuidador de Pets</Dropdown.Item>
                        <Dropdown.Item as="button">Editor de Video</Dropdown.Item>
                        <Dropdown.Item as="button">Costureiro</Dropdown.Item>
                        <Dropdown.Item as="button">Enfermeiro</Dropdown.Item>

                    </DropdownButton>
                    <p className="cadastre2"> Faça uma descrição sobre você! (Pontos fortes, anos de experiência, etc) :</p>
                    <textarea className="descricaoC"> </textarea>

                    <div className="CadastrarButton">
                        <Button variant="outline-dark" onClick={cadastro}>Cadastrar</Button>
                    </div>  
            </div>
            <Footer/>
        </div>
    );
}

export default Cadastro;