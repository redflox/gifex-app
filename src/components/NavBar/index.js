import { Link } from 'wouter'
import './style.css'
import BxMenu from 'assets/icons/bx-menu.svg'
import BxX from 'assets/icons/bx-x.svg'

export default function NavBar ({ routes }) {
    return (
        <header className="header">
            <Link to="/" className="logo">GifEx</Link>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="icons">
                <img src={BxMenu} id="menu-icon" alt='Bx-menu' width="48" height="48" />
                <img src={BxX} alt="Bx-X" id="close-icon" width="48" height="48" />
            </label>

            <nav className="navbar">
                {routes.map((route, index) => {
                    return (
                    route.external ?
                        <a key={route.id} href={route.url} className="nav-item" target='_black' style={{ "--i": {index} }}>{route.name}</a>
                    :
                        <Link key={route.id} to={route.url} className="nav-item" style={{ "--i": {index} }}>{route.name}</Link>
                    )
                })}
            </nav>
        </header>
    )
}