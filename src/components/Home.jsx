import TopMenu from "./TopMenu";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import {Outlet} from "react-router-dom";
export default function Home() {
    return <>
        <TopMenu />
        <Outlet />
        <HomeHeader />
        <HomeThreeColumns />
        <HomeSimpleSteps />
    </>
}