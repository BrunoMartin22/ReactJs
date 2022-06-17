import { createContext, useState } from 'react';

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartListItem , setCartListItem] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const addProductCart = (comida) =>{
        let isInCart = cartListItem.find(cartItem => cartItem.id === comida.id)
        if(!isInCart) {
            setCartListItem(
                cartListItem.map((cartItem) => {
                    if(cartItem.id === comida.id){
                        return{...isInCart, cantidad:isInCart.cantidad + 1}
                    }else return cartItem;
                })
            )
            setTotalPrice(totalPrice + comida.price)
            return setCartListItem(cartListItem =>[...cartListItem, comida])
        }
    }
    const deleteProduct = (comida) => {
        setCartListItem(cartListItem.filter( (cartProduct) => cartProduct.id !== comida.id) )
        return setTotalPrice(totalPrice - comida.price)
    }

    const data = {
        cartListItem,
        addProductCart,
        totalPrice,
        deleteProduct
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export {CartProvider}