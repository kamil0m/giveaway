import ButtonGiveAway from "./Buttons/ButtonGiveAway";
import ButtonCollection from "./Buttons/ButtonCollection";


export default function HomeHeader() {
    return <div className="header__container">
        <div className="header__intro">
            <h1 className="intro__slogan">
                Start helping!<br/>
                Entrust your donations in safe hands
            </h1>
            <div className="decoration"></div>
            <div className="main__buttons">
                <ButtonGiveAway />
                <ButtonCollection />
            </div>
        </div>
    </div>
}