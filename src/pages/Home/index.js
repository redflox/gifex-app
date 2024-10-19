import './style.css'
import { useCallback } from 'react'
import TrendingSearch from "components/TrendingSearch"
import SearchForm from "components/SearchForm"
import ListOfGifs from "components/ListOfGifs"
import { useGifs } from "hooks/useGifs"
import { GifsContextProvider } from "../../context/GifsContext"

const Home = () => {
    const { gifs } = useGifs()


    return (
        <GifsContextProvider>
            <>
                <SearchForm />
                <div className="container">
                    <div className="main-content">
                        {
                            localStorage.getItem("lastQuery") ? <>
                                <h4>Ultima busqueda</h4>
                                <ListOfGifs gifs={gifs} title={localStorage.getItem("lastQuery")} />
                            </>
                                : <></>
                        }
                    </div>
                    <div className="sidebar">
                        <TrendingSearch />
                    </div>
                </div>

            </>
        </GifsContextProvider>
    )
}
export default Home