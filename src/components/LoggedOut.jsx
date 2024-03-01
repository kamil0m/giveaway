import {Link} from "react-router-dom";

export default function LoggedOut() {
    return <div className="main__container login__container">
        <h2 className="login__title">Successfully logged out!</h2>
        <div className="decoration"></div>
        <Link to="/" className="button__gohome">Home page</Link>

    </div>
}