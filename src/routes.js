import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Servicos from "./pages/Servicos";
import Perfil from "./pages/Perfil";
import Menu from "./pages/Menu";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ServicoSelecionado from "./pages/ServicoSelecionado";
import AlterarDados from "./pages/AlterarDados";
import TemporaryDrawer from "./Components/TemporaryDrawer";
import { isAuthenticated } from "./services/auth";
import perfilPessoal from "./pages/perfilPessoal";

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect
               to={{ pathname: "/login", state:{from: props.location}}}
            />
        )
    }
    />
);

function Routes(){
    return(
        <BrowserRouter>
            <Switch> 
                <Route exact path="/login" component={Login} />
                <Route exact path="/cadastro" component={Cadastro} />
                <Route exact path="/servicos" component={Servicos} />
                <Route exact path="/perfil" component={Perfil} />
                <Route exact path="/temp" component={Menu} />
                <Route exact path="/navbar" component={Navbar} />
                <Route exact path="/footer" component={Footer} />
                <PrivateRoute path="/alterardados" component={AlterarDados} />
                <Route exact path="/servicoselecionado" component={ServicoSelecionado} />
                <Route exact path="/temporarydrawer" component={TemporaryDrawer}/>
                <PrivateRoute path="/perfilPessoal" component={perfilPessoal} />
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    );  
}


export default Routes;