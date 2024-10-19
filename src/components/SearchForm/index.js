import React from 'react'
import { useLocation } from 'wouter'
import './style.css'
import useSearchForm from './useSearchForm'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

const SearchForm = ({ initialKeyword = '', initialRating = 'g' }) => {

    const { keyword, rating, times, updateKeyword, updateRating } = useSearchForm(
        { initialKeyword, initialRating }
    )

    const handleChangeKeyword = (e) => {updateKeyword(e.target.value)}
    const handleChangeRating = (e) => {updateRating(e.target.value)}

    const [, setPath] = useLocation()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (keyword !== '') {
            setPath(`/search/${keyword}/${rating}`)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="search">
            <button className="search__icon" >Buscar</button>
            <input id="search" type="text" value={decodeURIComponent(keyword)} onChange={handleChangeKeyword} className="search__input" placeholder="Buscar" />
            <select onChange={handleChangeRating} value={rating}>
                <option disabled>Rating type</option>
                {
                    RATINGS.map(rating => <option key={rating}>{rating}</option>)
                }
            </select>
            {times}
        </form>
    )
}

export default React.memo(SearchForm)