import { useState, useEffect, useContext } from 'react'
import getGifs from '../services/getGifs'
import { GifsContext } from '../context/GifsContext'

const INITIAL_PAGE = 0;

export const useGifs = ({ query, rating } = { query: null }) => {
    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const [page, setPage] = useState(INITIAL_PAGE)
    const { gifs, setGifs } = useContext(GifsContext)

    const queryToUse = query || localStorage.getItem('lastQuery') || "random"

    useEffect(() => {

        setLoading(true)

        getGifs({ query: queryToUse, rating })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                if (queryToUse !== undefined && queryToUse !== null) {
                    localStorage.setItem('lastQuery', queryToUse)
                }
            })
    }, [query, setGifs, queryToUse, rating])

    useEffect(() => {
        if (page === INITIAL_PAGE || loading) return

        setLoadingNextPage(true)
        getGifs({ query: queryToUse, page })
            .then(nextGifs => {
                setGifs((prevGifs) => prevGifs.concat(nextGifs))
                setLoadingNextPage(false)
            })


    }, [page, queryToUse, setGifs, loading])


    return { loading, loadingNextPage, gifs, setPage }
}