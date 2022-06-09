import { createContext, useState } from 'react';

const CartContext = createContext()

const CartProvider = ({chidren}) => {
    const [cartListItem , setCartListItem] = useState([])
    const addProductCart = (comida) =>{
        setCartListItem(cartListItem =>[...cartListItem, comida])
    }

    const data = {
        cartListItem,
        addProductCart
    }

    return(
        <CartContext.Provider value={data}>
            {chidren}
        </CartContext.Provider>
    )
}

export default CartContext
export {CartProvider}