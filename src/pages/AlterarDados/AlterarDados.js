import React, { useState, useEffect } from "react";
import "./AlterarDados.css";
import { Form, Button } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom"; 
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import api from "../../services/api";


function AlterarDados(){
    
    function cancelar(){
        history.push("home");
    }

    const [descricaoo, setDescricaoo] = useState();
    const history = useHistory();
    const [Nome, setNome] = useState();
    const [celular, setCelular] = useState();
    const [Cidade, setCidade] = useState();
    const [Estado, setEstado] = useState();
    const [elementos, setElementos] = useState([]);
    const [trabalho, setTrabalho] = useState();
    const[usuario, setUsuario] = useState([]);
    const[servicoID, setServicoID] = useState([]);
    const userId = sessionStorage.getItem("@autonomeasy-Id");

    useEffect(async() => {
        const tipos = await api.get('/servico/tipos');
        const auxTipos = [];
        tipos.data.forEach((response) => {
            auxTipos.push({label:response.nome, value:response.servico_id});
        });
        
        setElementos(auxTipos);
        
    },[]);

    
    const usuarioID = sessionStorage.getItem("@autonomeasy-Id");
    
    useEffect(async() => {
      const info = await api.get(`/profissionalget/${usuarioID}`);
      setUsuario(info.data[0]);
    },[usuarioID]);
    

    const servicoNome = usuario.profissional_servico_id;
    
    useEffect(async() => {
    const respostaget = await api.get(`/servicoget/${servicoNome}`);
    
    setServicoID(respostaget.data[0]);
    
     
  },[servicoNome]);
    
    const profissional = 
        {
            profissional_servico_id: trabalho,
            nome: Nome,
            estado: Estado,
            cidade: Cidade,
            contato: celular,
            descricao: descricaoo,
        };
    
    
    
    
    async function handleAlterarDados(e) {
        e.preventDefault();
        try {
            const response = await api.put(`/profissionalUpdate/${userId}`, profissional);
            history.push("/perfilPessoal");
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
        <div className="cadastroAlterar">
            <Navbar/>
            <div className="containerAD">
                <p className="cadastreAD">Altere os dados do seu perfil</p>
                <div className="FormularioAD">
                    <Form className="inputsAD">
                        <Form.Group className="mb-3" controlId="Nome">
                        <br/>
                            <Form.Control type="nome" placeholder={usuario.nome} onChange={(e) => setNome(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Celular">
                            <Form.Control type="Celular" placeholder={usuario.contato} onChange={(e) => setCelular(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Estado">
                            <Form.Control type="Estado" placeholder={usuario.estado} onChange={(e) => setEstado(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Cidade">
                            <Form.Control type="Cidade" placeholder={usuario.cidade} onChange={(e) => setCidade(e.target.value)} />
                        </Form.Group>
                    

                        <select class="form-control" aria-label="Default select example" onChange={(e) => setTrabalho(e.target.value)}>
                        <option >{servicoID?.nome}</option>

                        {elementos.map((item) => (
                            
                            <option value={item.value}>{item.label}</option>
    
                        ))};
                    
                        </select>
                    </Form>
                    </div>
                    <br/>
                    <p className="cadastre2AD"> Altere sua descrição! (Pontos fortes, anos de experiência, etc) :</p>
                    <textarea className="descricaoAD" placeholder={usuario.descricao} onChange={(e) => setDescricaoo(e.target.value)}></textarea>

                    <div className="CadastrarButtonAD">
                        <Button variant="outline-dark" onClick={cancelar}>Cancelar</Button>
                        <Button variant="outline-dark" onClick={handleAlterarDados}>Salvar alterações</Button>
                    </div>  
            </div>
            <Footer/>
        </div>
    );
}

export default AlterarDados;