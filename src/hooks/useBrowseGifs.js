import { useState } from 'react'
import { useLocation } from 'wouter'
export default function useBrowseGifs(){
    const [keyword, setKeyword] = useState('')
    const [, pushLocation] = useLocation()

    const handleSubmit = (e) => {
        e.preventDefault()
        pushLocation(`/search/${keyword}`)
    }
    const handleChange = (e) => { setKeyword(e.target.value) }

    return { keyword, handleChange, handleSubmit }

}