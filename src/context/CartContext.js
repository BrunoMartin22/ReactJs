import { createContext, useState } from 'react';
import { Comida } from '../utils/productsMock';

const CartContext = createContext()

const CartProvider = ({chidren}) => {
    const [cartListItem , setCartListItem] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const addProductCart = (comida) =>{
        let isInCart = cartListItem.find(cartItem => cartItem.id === Comida.id)
        if(!isInCart) {
            setTotalPrice(totalPrice + comida.price)
            return setCartListItem(cartListItem =>[...cartListItem, comida])
        }
    }

    const data = {
        cartListItem,
        addProductCart,
        totalPrice
    }

    return(
        <CartContext.Provider value={data}>
            {chidren}
        </CartContext.Provider>
    )
}

export default CartContext
export {CartProvider}