import { API_KEY, URL } from "./settings"

function fromApiResponseToGif(apiResponse) {
    // If not data then data is []
    const { data = {} } = apiResponse
    const { images, title, id } = data
    const { url } = images.fixed_width_small
    return { title, id, img: url }

}

export default function getSingleGif({ id }) {
    return fetch(`${URL}/gifs/${id}?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(fromApiResponseToGif)
}