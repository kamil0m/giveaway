import TopMenu from "./TopMenu";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import AboutUs from "./AboutUs";
import Partners from "./Partners";
import Contact from "./Contact";
import Footnote from "./Footnote";
export default function Home() {
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