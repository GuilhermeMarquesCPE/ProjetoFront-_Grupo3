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
            <div className="container">
                <p className="cadastre">Cadastre-se em Autonomeasy</p>
                <div className="Formulario">
                    <Form className="inputs">
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

                    <DropdownButton className="dropButton" title="Trabalhos oferiecidos" >
                        <Dropdown.Item as="button">Pintor</Dropdown.Item>
                        <Dropdown.Item as="button">Professor Particular</Dropdown.Item>
                        <Dropdown.Item as="button">Engenheiro</Dropdown.Item>
                        <Dropdown.Item as="button">Programador</Dropdown.Item>
                        <Dropdown.Item as="button">Cozinheiro</Dropdown.Item>
                        <Dropdown.Item as="button">Programador</Dropdown.Item>
                    </DropdownButton>
                    <p className="cadastre2"> Faça uma descrição sobre voce! (Pontos fortes, anos de experiência, etc) :</p>
                    <textarea className="descricao"> </textarea>

                    <div className="CadastrarButton">
                        <Button variant="outline-dark" onClick={cadastro}>Cadastrar</Button>
                    </div>  
            </div>
            <Footer/>
        </div>
    );
}

export default Cadastro;