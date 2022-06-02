import { useEffect, useState} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import lugares from '../../utils/productsMock'
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [sitio , setSitio] = useState({})
    
    // const getItem = () => {
    //     return new Promise( (resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(lugares)
    //         }, 2000)
    //     })
    // }

    useEffect(() => {
      setSitio(lugaresFilter)
    }, [])

    const lugaresFilter = lugares.find((sitio) =>{
        return sitio.id == id
    })

    return(
        <>
            <ItemDetail data={sitio}/>
        </>
    )
}

export default ItemDetailContainer