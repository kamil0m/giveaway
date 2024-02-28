import {Link} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';

export default function TopMenu({scroll}) {

    return <div className="main__container">
        <div className="top__menu">
            <div className="connection__panel">
                <Link to="/login">Log in</Link>
                <Link to="/signin" className="link__accent">Sign in</Link>
            </div>
            <nav className="navbar">
                <LinkScroll smooth={true} duration={500} to="/">Home</LinkScroll>
                <LinkScroll smooth={true} duration={500} to="steps__headline">How it works?</LinkScroll>
                <LinkScroll smooth={true} duration={500} to="about">About us</LinkScroll>
                <LinkScroll smooth={true} duration={500} to="partners__container">Charity organizations</LinkScroll>
                <LinkScroll smooth={true} duration={500} to="contact">Contact</LinkScroll>
            </nav>
        </div>
    </div>

}