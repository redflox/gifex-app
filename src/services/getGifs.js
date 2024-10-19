import { API_KEY, URL } from "services/settings"

function fromApiResponseToGifs(apiResponse) {
    const { data = [] } = apiResponse
    if (Array.isArray(data)){
        const gifs = data.map( image => {
            const {images, title, id} = image
            const {url} = images.fixed_width_small
            return { title, id, img: url}
        } )
        return gifs
    }
    return []
}

export default function getGifs(
    {
        limit = 16,
        query = 'panda',
        page = 0,
        rating = "g",
    } = {}
) {
    const url = `${URL}/gifs/search?api_key=${API_KEY}&q=${query}&limit=${limit}&offset=${limit*page}&rating=${rating}&lang=es&bundle=messaging_non_clips`
    return fetch(url)
        .then(response => response.json())
        .then(fromApiResponseToGifs)
}