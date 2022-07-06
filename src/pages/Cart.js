import { useContext, useState } from "react"
import { Container, Button } from "@mui/material"
import { Delete } from "@mui/icons-material"
import Modal from "../components/Modal/Modal"
import CartContext from "../context/CartContext"
import { Link } from "react-router-dom"
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom"
import {addDoc, collection} from 'firebase/firestore'
import db from '../utils/firebaseConfig'

const Cart = () => {
    const { cartListItem, totalPrice , deleteProduct } = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)
    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const [order, setOrder] = useState({
        buyer: {},
        items: cartListItem.map( item => {
            return {
                id: item.id,
                title: item.title,
                price: item.price,
            }
        } ),
        total: totalPrice
    })
    const [success, setSuccess] = useState()
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        setOrder({...order, buyer: formValue})
        saveData({...order, buyer: formValue})
    }
    const handleChange = (e) => {
        setFormValue({...formValue, [e.target.name]: e.target.value})
    }
    
    const finishOrder = () => {
        navigate('/')
    }

    const saveData = async (newOrder) => {
        const orderFirebase = collection(db, 'ordenes')
        const orderDoc = await addDoc(orderFirebase, newOrder)
        console.log("orden generada: ", orderDoc.id)
        setSuccess(orderDoc.id)
        deleteProduct()
    }

    return(
        <Container className='general-container'> 
        {console.log("order:", order)}
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
                    <Button className='btn-custom' onClick={() => setShowModal(true)}>Completar Compra</Button>
                </div>
            </div>
        </div>
        <Modal title={success ? 'Compra exitosa' : 'Contacto'} open={showModal} handleClose={() => setShowModal(false)}>
            {success ? (
                <div>
                    La order se genero con exito!
                    Numero de orden: {success}
                    <button className="btn-order" onClick={finishOrder}>Aceptar</button>
                </div>
            ) : (
        <form className="form-contact" onSubmit={handleSubmit}>
                    <TextField 
                        id="outlined-basic" 
                        name="name"
                        label="Nombre y Apellido" 
                        variant="outlined" 
                        value={formValue.name}
                        onChange={handleChange}
                    />
                    <TextField 
                        id="outlined-basic" 
                        name="phone"
                        label="Telefono" 
                        variant="outlined" 
                        value={formValue.phone}
                        onChange={handleChange}
                    />
                    <TextField 
                        id="outlined-basic" 
                        name="email"
                        label="Mail" 
                        value={formValue.email}
                        variant="outlined" 
                        onChange={handleChange}
                    />
                    <button type="submit">Enviar</button>
                </form>
                 )}
        </Modal>
    </Container>
    )
}

export default Cart