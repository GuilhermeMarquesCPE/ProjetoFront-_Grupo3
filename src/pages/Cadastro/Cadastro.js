import React, { useEffect, useState } from "react";
import "./cadastro.css";
import { Form, Button, Dropdown, DropdownButton } from "react-bootstrap";
import { useHistory } from "react-router-dom"; 
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

import api from "../../services/api";


function Cadastro(){
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const history = useHistory();
    const [Nome, setNome] = useState();
    const [ConfirmSenha, setConfirmSenha] = useState();
    const [celular, setCelular] = useState();
    const [Cidade, setCidade] = useState();
    const [Estado, setEstado] = useState();
    const [descricaoo, setDescricaoo] = useState();
    const [trabalho, setTrabalho] = useState();
    const [elementos, setElementos] = useState([]);
    useEffect(async() => {
        const tipos = await api.get('/servico/tipos');
        const auxTipos = [];
        tipos.data.forEach((response) => {
            auxTipos.push({label:response.nome, value:response.servico_id});
        });
        
        setElementos(auxTipos);
        
    },[]);
    
    const profissional = 
        {
            profissional_servico_id: trabalho,
            nome: Nome,
            email: email,
            estado: Estado,
            cidade: Cidade,
            descricao: descricaoo,
            senha: senha,
            confirmarSenha: ConfirmSenha,
            contato: celular,
        };
    
    
    
    
    async function handleCadastro(e) {
        e.preventDefault();
        try {
            
          const response = await api.post('/profissional', profissional);
          
          history.push("/login");
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
                            <Form.Control type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="ConfirmPass">
                            <Form.Control type="password" placeholder="Confirmar senha" onChange={(e) => setConfirmSenha(e.target.value)} />
                        </Form.Group>
                    

                    <select class="form-control" aria-label="Default select example" onChange={(e) => setTrabalho(e.target.value)}>
                        <option >Escolha um trabalho oferecido</option>

                        {elementos.map((item) => (
                            
                            <option value={item.value}>{item.label}</option>
    
                        ))};
                    
                        </select>
                        </Form>
                    </div>
                    <p className="cadastre2"> Faça uma descrição sobre você! (Pontos fortes, anos de experiência, etc) :</p>
                    <textarea className="descricaoC" onChange={(e) => setDescricaoo(e.target.value)}> </textarea>

                    <div className="CadastrarButton">
                        <Button variant="outline-dark" onClick={handleCadastro}>Cadastrar</Button>
                    </div>  
            </div>
            <Footer/>
        </div>
    );
}

export default Cadastro;