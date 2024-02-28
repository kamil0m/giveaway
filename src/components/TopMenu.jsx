import {NavLink} from 'react-router-dom';
import {Link} from 'react-scroll';

export default function TopMenu() {
    return <div className="main__container">
        <div className="top__menu">
            <div className="connection__panel">
                <NavLink to="/login">Log in</NavLink>
                <NavLink to="/signin" className="link__accent">Sign in</NavLink>
            </div>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="steps__headline">How it works?</Link>
                <Link to="about">About us</Link>
                <Link to="partners__container">Charity organizations</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    </div>

}