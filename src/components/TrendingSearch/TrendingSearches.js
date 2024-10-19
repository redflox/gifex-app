import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import getTrendingSearch from 'services/getTrendingSearch'
import './style.css'

function TrendingSearch() {
    const [trendingSearch, setTrendingSearch] = useState([])

    useEffect(() => {
        getTrendingSearch().then(data => setTrendingSearch(data))
    }, [])
    return (
        <div className='TrendingSearch'>
            <h2>Tendencias</h2>
            <ul className='TrendingSearch-content'>
                {
                    trendingSearch.map(trending => <Link to={`/search/${trending}`} key={trending}><li>{trending}</li></Link>)
                }
            </ul>
        </div>
    )
}

export default TrendingSearch