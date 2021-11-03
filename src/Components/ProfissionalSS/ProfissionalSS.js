import React from "react";
import "./ProfissionalSS.css";
import { Button } from "react-bootstrap";
import { Avatar } from "@material-ui/core";

function Profissionalprop({profissionalSS}){
    console.log(profissionalSS);
    return (
    <div className="perfilLaranja">
        {/* <p className="dadosSSprop">
            <div className="nomeprossional">{profissionalSS.nome}</div>
            <div className="estadoprossional">{profissionalSS.estado}</div>
            <div className="cidadeprossional">{profissionalSS.cidade}</div>

        </p> */}
        <div className="perfilLaranja">
          

          <Avatar className="avatar"
            sx={{ width: 150, height: 150, bgcolor: "#FFBF69", marginRight: 3 }}
          >
            <h1 className="iconeSS">G</h1>
          </Avatar>
        <div className="caixa1">

              <p className="dadosSS">
                Nome: {profissionalSS.nome}
                <br />
                Estado: {profissionalSS.estado}
                <br />
                Cidade: {profissionalSS.cidade}
              </p>

            
            <Button variant="outline-dark">Ver mais</Button>{" "}
          
          </div>
          </div>
    </div>
    );
}

export default Profissionalprop;