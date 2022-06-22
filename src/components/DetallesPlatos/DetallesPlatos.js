import { useEffect, useState} from "react"
import {Comida} from '../../utils/productsMock'
import { useParams } from "react-router-dom"
import PlatoDetail from "../PlatoDetail/PlatoDetail"
import { doc, getDocs } from "firebase/firestore"
import db from "../../utils/firebaseConfig"

const DetallesPlatos = () => {
    const {id} = useParams()
    const [plato , setPlato] = useState({})
    
    // const getItem = () => {
    //     return new Promise( (resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(Comida)
    //         }, 2000)
    //     })
    // }

    useEffect(() => {
        getComida()
        .then((com) =>{
            console.log("comida", com);
            setPlato(com)
        })
    //   (ComidaFilter)
    }, [id])

    const getComida = async() =>{
        const platosList = doc(db,"comida", id)
        const  comidaSnaptshop = await getDocs(platosList)
        console.log("comida",comidaSnaptshop.data())

        let comida = comidaSnaptshop.data()
        comida.id = comidaSnaptshop.id
        console.log("producto unico: ", comida)
        return comida
        // comidaSnapshot.map((doc) =>{
        //     let plato = doc.data()
        //     plato.id = doc.id
        //     console.log("dat:", doc.data)
        //     return plato
        // })
        // return platosList
    }

    

    const ComidaFilter = Comida.find((plato) =>{
        return plato.id == id
    })

    return(
        <>
            <PlatoDetail data={plato}/>
        </>
    )
}

export default DetallesPlatos