import React, { useState } from "react";
import "./Login.css";
import { Form, Button } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom"; 
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import api from "../../services/api";
import {login} from "../../services/auth";

function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post('/login', {email, senha});
      alert("Bem vindo ", response.data.profissional.nome);
      login(response.data.accessToken)
      history.push("/home");
    } catch (error) {
      if(error.response.status === 403){
        alert("Credenciais invalidas!");
      }
      else {
        alert(error.response.data.notification);
      }
    }
  }

    return (
     <div className="baseL">
       <Navbar/>
        <div className="containerL">
               <img className="imagemL" src="/images/image.png" alt="Entre"/>
               <Form className="inputsL">
                <Form.Group className="mb-3" controlId="Email">
                <br/>
                  <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="senha">
                  <Form.Control type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
                </Form.Group>
                </Form>
                <div className="LoginButton">
                  <Button variant="outline-dark" onClick={handleLogin}>Entrar</Button>
                </div>
                
                <p className="novoL"> Novo no AutonomEASY? <Link to="cadastro" className="CadastroLinkL"> Cadastre-se</Link> </p>
            </div>
            <Footer/>
        </div>
    );
}

export default Login;