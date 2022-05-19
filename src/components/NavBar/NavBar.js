import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () =>{
    return(
        <AppBar position="static" className='header-primary'>
          <Toolbar>
            <div className="container-logo">
              <img src="./walkers.webp" />
            </div>
            <ul className='navbar'>
              <li>
                <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='text' className='navbar__btn' >Home</Button>
              </li>
              <li>
              <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='text' className='navbar__btn' >Mesas</Button>
              </li>
              <li>
              <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='text' className='navbar__btn' >Reservas</Button>
              </li>
              <li>
              <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='text' className='navbar__btn' >Carta</Button>
              </li>
            </ul>
            <CartWidget/>
          </Toolbar>
        </AppBar>
    )
}

export default NavBar;