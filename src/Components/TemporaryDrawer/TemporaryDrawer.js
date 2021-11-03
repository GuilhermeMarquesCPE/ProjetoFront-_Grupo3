import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import './TemporaryDrawer.css';
import {Link} from 'react-router-dom';
import {GiHamburgerMenu} from "react-icons/gi";


export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
    top: false,
    left: false,
    bottom: false,
});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab'|| event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="navbardrawer">
                <Link to="home" className="DrawerLink">Home</Link>
                <Link to="servicos" className="DrawerLink">Serviços</Link>
                <Link to="perfilPessoal" className="DrawerLink">Perfil</Link>
                <Link to="Cadastro" className="DrawerLink">Cadastro</Link>
                <Link to="Login" className="DrawerLink">Login</Link>          
      </List>
    </Box>
  );

  return (
    <div>
      {['abrir'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className="ButtonDrawer" onClick={toggleDrawer(anchor, true)}>
              <GiHamburgerMenu className="HamburguerIcon"/> 
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
