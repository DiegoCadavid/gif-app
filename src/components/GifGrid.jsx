import { useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { gifs , isLoading } = useFetchGifs(category);
    console.log({ gifs, isLoading} );

    return (
        <li className="gifGrid">
            <div>
                <h4>{category}</h4>
                { isLoading && (<h5 className="loadingText"> Cargando ... </h5>)}
                <div className="gifsContainer">
                    {
                        gifs.length > 0 ? (gifs.map(gif => (<GifGridItem key={gif.id} title={gif.title} url={gif.url} link={ gif.link }/>)))
                       : <h6> No se encontro ningun gif </h6>
                    }
                </div>
            </div>
        </li>
    )
}

