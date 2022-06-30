import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    // Peticion
    // Al no poner ninguna dependencia en el useEffect
    // Solo se ejecuta cuando se renderiza el componente

    useEffect(() => {
     
        setIsLoading(true);
        // GetGifs realiza la peticion

        getGifs(category).then(res => {
            setGifs(res);
            setIsLoading(false);
        }).catch(err => {
            console.log(err);
        })
    }, [])

    return {
        gifs,
        isLoading 
    }
}
