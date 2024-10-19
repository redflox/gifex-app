import { URL, API_KEY } from 'services/settings'

export default function getTrendingSearch(){
    const url = `${URL}/trending/searches?api_key=${API_KEY}`
    return fetch(url)
        .then(response => response.json())
        .then(response => response.data)
        .catch(response => [])
}
