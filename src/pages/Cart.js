import { useContext } from "react"
import { Container, Button } from "@mui/material"
import { Delete } from "@mui/icons-material"
import CartContext from "../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cartListItem, totalPrice , deleteProduct } = useContext(CartContext)
    
    return(
        <Container className='general-container'> 
        <h2>Checkout: </h2>
        <div className='cart-section'>
            <div className='col-cart-table__head'>
                <h2>Producto</h2>
                <h2>Detalles</h2>
                <h2>Precio Unitario</h2>
                <h2>Cantidad</h2>
                <h2>Quitar</h2>
            </div>
            {cartListItem.map( (item) => {
                const {id, title, image, price, cantidad} = item
                return(
                    <div className='cart-table__content' key={id}>
                        <div className='img-cart'>
                            <img src={`/${image}`} width="100px"/>
                        </div>
                        <div className='cart-table__content-title'>
                            <p>{title}</p>
                        </div>
                        <div className='cart-table__content-price'>
                            <p>$ {price}</p>
                        </div>
                        <div className='cart-table__content-quantity'>
                            <p>{cantidad}</p>
                        </div>
                        <div className='cart-table__content-price'>
                        <button className="btn-delete" onClick={() => deleteProduct(item)}>
                                    <Delete />
                            </button>
                        </div>
                    </div>
                )
            })}
            <div className='cart-footer'>
                <Link to="/Carta">
                <Button className='btn-custom'>Continuar comprando</Button>
                </Link>
                <div className='cart-checkout-details'>
                    <div className='cart-checkout__subtotal'>
                        <p>Subtotal</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <div className='cart-checkout__total'>
                        <p>Total</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <Button className='btn-custom'>Completar Compra</Button>
                </div>
            </div>
        </div>
    </Container>
    )
}

export default Cart