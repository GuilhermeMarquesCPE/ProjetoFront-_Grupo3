import React, { useEffect, useState } from "react";
import "./ProfissionalSS.css";
import { Button } from "react-bootstrap";
import { Avatar } from "@material-ui/core";
import { useHistory } from "react-router-dom";


function Profissionalprop({profissionalSS}){

    const history = useHistory();
    
    function perfilSelecionado(){
      history.push({
        pathname: "/perfil",
        state: {profissionalSS},
      })
    }
    return (

    <div className="profissionais">
        <br/>
    <div className="perfilLaranja">
          <Avatar className="avatar"
            sx={{ width: 150, height: 150, bgcolor: "#FFBF69", marginRight: 3 }}
          >
            <h1 className="iconeSS">{profissionalSS.nome[0]}</h1>
          </Avatar>
        <div className="caixa1">

              <p className="dadosSS">
                Nome: {profissionalSS.nome}
                <br />
                Estado: {profissionalSS.estado}
                <br />
                Cidade: {profissionalSS.cidade}
              </p>

              <Button variant="outline-dark" onClick={() => perfilSelecionado()} >Ver mais</Button>
          
          </div>
    </div>
    </div>
    
    );
}

export default Profissionalprop;