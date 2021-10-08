import React, { useState } from "react";
import "./Login.css";
import { Form, Button } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom"; 
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  function login() {
    alert("Bem vindo!\n" + email);
    history.push("home");
  }

    return (
     <div className="base">
       <Navbar/>
        <div className="container">
               <img src="/images/image.png" alt="Entre"/>
               <Form className="inputs">
                <Form.Group className="mb-3" controlId="Email">
                <br/>
                    <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="senha">
                    <Form.Control type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                  </Form.Group>
                </Form>
                <div className="LoginButton">
                  <Button variant="outline-dark" onClick={login}>Entrar</Button>
                </div>
                <div className="Escrito">
                  <p>Novo no AutonomEASY?  <Link to="cadastro" className="CadastroLink">Cadastre-se</Link> </p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Login;