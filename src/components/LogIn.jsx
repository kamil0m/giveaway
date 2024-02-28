import TopMenu from "./TopMenu";
import {NavLink, Outlet} from "react-router-dom";

export default function LogIn() {
    return <>
        <TopMenu />
        <div className="main__container login__container">
            <h2 className="login__title">Log in</h2>
            <div className="decoration"></div>
            <form className="login__form">
                <label>Email</label>
                <input className="account__email" id="account__email" />
                <label>Password</label>
                <input className="account__password" id="account__email" />
            </form>
            <div className="login__buttons">
                <NavLink to="/signin" className="button__redirect">Create an account</NavLink>
                <button className="button__submit" type="submit">Log in</button>
            </div>
        </div>

        <Outlet />
    </>
}