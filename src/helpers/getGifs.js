
import axios from "axios";


export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=vMU4zhttx1wfnPvD857XYt2LZxsxz2sx&q=${category}`;
    const { data } = await axios.get(url);
    const gifs = data.data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url : gif.images.preview_gif.url,
        link : gif.images.original.url        
    }));

    return gifs;
}
