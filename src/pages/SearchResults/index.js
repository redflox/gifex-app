//Components
import Spinner from '../../components/Spinner'
import ListOfGifs from '../../components/ListOfGifs'
import SearchForm from 'components/SearchForm'
//CustomHooks
import { useGifs } from '../../hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import { useEffect, useCallback } from 'react'
import debounce from 'just-debounce-it'


const SearchResults = ({ params }) => {
    const { query, rating = 'g' } = params
    const { loading, gifs, setPage } = useGifs({ query, rating })

    const { isNearScreen, elementRef } = useNearScreen({ disconnect: false, distance: '500px' })

    const debounceHandleNextPage = useCallback(debounce(() => setPage(prevPage => (prevPage + 1)), 200), [])

    useEffect(() => {
        if (isNearScreen) debounceHandleNextPage()
    }, [isNearScreen])


    return (
        <>
            <SearchForm initialKeyword={query} initialRating={rating}/>
            {loading ?
                <Spinner />
                :
                <>
                    <ListOfGifs gifs={gifs} title={query} />
                    <div ref={elementRef}></div>
                </>
            }
        </>
    )

}

export default SearchResults