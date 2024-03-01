import {Link} from 'react-router-dom';
import ScrollNav from "./ScrollNav";
import NonScrollNav from "./NonScrollNav";

export default function TopMenu({isScrollAble}) {
    return <div className="main__container">
        <div className="top__menu">
            <div className="connection__panel">
                <Link to="/login">Log in</Link>
                <Link to="/signin" className="link__accent">Sign in</Link>
            </div>
            <nav className="navbar">
                {isScrollAble ? <ScrollNav/> : <NonScrollNav />}
            </nav>
        </div>
    </div>

}