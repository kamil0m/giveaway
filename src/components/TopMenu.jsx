// import {Link} from 'react-router-dom';
import {Link} from 'react-scroll';

export default function TopMenu() {
    return <div className="main__container">
        <div className="top__menu">
            <div className="connection__panel">
                <Link to="/login">Log in</Link>
                <Link to="/signin" className="link__accent">Sign in</Link>
            </div>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="steps__headline">How it works?</Link>
                <Link to="/">About us</Link>
                <Link to="/">Charity organizations</Link>
                <Link to="/">Contact</Link>
            </nav>
        </div>
    </div>

}