import {Link} from 'react-router-dom';
// import {Link} from 'react-scroll';

export default function TopMenu() {
    return <div className="main__container">
        <div className="connection__panel">
            <Link to="/login">Log in</Link>
            <Link to="/signin" className="link__accent">Sign in</Link>
        </div>
        <navbar className="top__menu">
            <Link to="/">Home</Link>
            <Link to="/">How it works?</Link>
            <Link to="/">About us</Link>
            <Link to="/">Charity organizations</Link>
            <Link to="/">Contact</Link>
        </navbar>

    </div>

}