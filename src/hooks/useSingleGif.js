import { useContext, useState, useEffect } from "react"
import { GifsContext } from "context/GifsContext"
import getSingleGif from "services/getSingleGif"

export default function useSingleGif({ id }) {
    const context = useContext(GifsContext)
    const gifFromContext = context.gifs.find(g => g.id === id)

    const [gif, setGif] = useState(gifFromContext)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        if (!gif) {
            setIsLoading(true)
            getSingleGif({ id })
                .then( response => {
                    setGif(response)
                    setIsLoading(false)
                    setIsError(false)
                })
                .catch( error => {
                    setIsLoading(false)
                    setIsError(true)
                })
        }
    }, [id, gif])

    return { gif, isLoading, isError }

}