import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const NavBar = () =>{
    return(
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
    )
}

export default NavBar;