import TopMenu from "./TopMenu";
import {Outlet} from "react-router-dom";

export default function MainLayout() {
    return <>
        <TopMenu />
        <Outlet />

    </>
}