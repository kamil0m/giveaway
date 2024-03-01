import TopMenu from "./TopMenu/TopMenu";
import {Outlet} from "react-router-dom";

export default function MainLayout({isScrollAble}) {
    return <>
        <TopMenu isScrollAble={isScrollAble} />
        <Outlet />
    </>
}