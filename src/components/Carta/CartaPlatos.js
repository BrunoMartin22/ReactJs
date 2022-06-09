import './CartaPlatos.css'
import CountPlatos from '../count/Count';
import { Card, CardContent } from '@mui/material';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext'
import { useContext } from 'react';

const CartaItem = ({image, title, id}) => {
    
    const {addProductCart} = useContext(CartContext)
    return(
        <Card sx={{ minWidth: 275 }} className="card-item-container fotos">
            <CardContent>
                <div className='card-item'>
                    <div>
                        <img src={`./${image}`} alt={"producto"}/>
                    </div>
                    <p>{title}</p>
                    <CountPlatos/>
                    <Button variant='outlined' onClick={() => addProductCart({image, title, id})}> Añadir al carrito</Button>
                    <Button className='boton-detalle' variant={'contained'} >
                        <Link to={`/Comida/${id}`}>Detalle</Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default CartaItem;