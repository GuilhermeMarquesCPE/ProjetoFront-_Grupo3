import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Servicos from "./pages/Servicos";
import Perfil from "./pages/Perfil";
import Menu from "./pages/Menu";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ServicoSelecionado from "./pages/ServicoSelecionado";

function Routes(){
    return(
        <BrowserRouter>
            <Switch> 
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/servicos" component={Servicos} />
                <Route path="/perfil" component={Perfil} />
                <Route path="/temp" component={Menu} />
                <Route path="/navbar" component={Navbar} />
                <Route path="/footer" component={Footer} />
                <Route path="/servicoselecionado" component={ServicoSelecionado} />
            </Switch>
        </BrowserRouter>
    )    
}

export default Routes;