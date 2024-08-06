import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import AboutUs from "./AboutUs";
import Partners from "./Partners";
import Contact from "./Contact";
import Footnote from "./Footnote";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom"; // nie mozna go uzywac w useEffect
import {scroller} from "react-scroll";
export default function Home() {
    const [scrollTo] = useState(useLocation())

    useEffect(() => {
        if (scrollTo.state && scrollTo.state.scroll) {
            scroller.scrollTo(scrollTo.state.scroll, {
                delay: 50,
                duration: 500,
                smooth: true,
            });
        }
    }, [])

    return <>
        <HomeHeader />
        <HomeThreeColumns />
        <HomeSimpleSteps />
        <AboutUs />
        <Partners />
        <Contact />
        <Footnote />
    </>
}