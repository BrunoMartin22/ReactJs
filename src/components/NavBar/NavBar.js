import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'

const NavBar = () =>{
    return(
        <AppBar position="static" className='header-primary nav-top'>
          <Toolbar>
            <div className="container-logo">
              <img src="./walkers.jpeg" alt='logo walkers' />
            </div>
            <ul className='navbar'>
              <li>
                <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='text' className='navbar__btn' ><Link to="/">Home</Link></Button>
              </li>
              <li>
              <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='text' className='navbar__btn' >Mesas</Button>
              </li>
              <li>
              <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='text' className='navbar__btn' >Reservas</Button>
              </li>
              <li>
              <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='text' className='navbar__btn' ><Link to="/Carta">Carta</Link></Button>
              </li>
            </ul>
            <CartWidget/>
          </Toolbar>
        </AppBar>
    )
}

export default NavBar;