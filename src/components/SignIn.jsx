import TopMenu from "./TopMenu";
import {Outlet} from "react-router-dom";

export default function SignIn() {
    return <>
        <TopMenu />
        <Outlet />
    </>
}