import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useState, useContext } from 'react';
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom';

const CartWidget = () =>{
    const { cartListItem } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <div className='cart-container-icon'>
        <ShoppingBasketIcon 
            color={'primary'} 
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        />
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <div className='container-item-list-cart'>
                {cartListItem.length === 0 && (
                    <>
                        <p>No hay productos agregados al carrito</p>
                        <Link to="/Carta" >Empezar a comprar</Link>
                    </>
                )}
                {cartListItem.map( (item) => {
                    return(
                    <div className='item-cart-prod' key={item.id}>
                        <div className='cart-prod__image'>
                            <img src={`/${item.image}`} alt="prod carrito" />
                        </div>
                        <div className='cart-prod__info'>
                            <p>{item.title}</p>
                        </div>
                        <div className='cart-prod__action'>
                            <button>
                                <DeleteIcon />
                            </button>
                        </div>
                    </div>
                    )
                })}
                
            </div>
        </Menu>
    </div>
    )
}

export default CartWidget;