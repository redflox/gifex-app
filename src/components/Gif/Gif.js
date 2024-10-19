import React from 'react'
import { Link } from 'wouter'
import './style.css'

const Gif = ({ id, title, img }) => {
    return (
        <div className="gif">
            <Link to={`/gif/${id}`} className='gif-link'>
                <h4>{title}</h4>
                <img src={img} alt="giphy" />
            </Link>

        </div>
    )
}

export default React.memo(Gif, (prevProps, nextProps) => {
    return prevProps.id === nextProps.id
})