import ButtonGiveAway from "./Buttons/ButtonGiveAway";

export default function HomeSimpleSteps() {
    return <>
        <div className="steps__headline">
            <h2 className="steps__slogan">Only 4 simple steps</h2>
            <div className="decoration"></div>
        </div>
        <div className="steps__cards columns-4">
            <div className="step">
                <div className="step__icon1"></div>
                <div className="step__title">Pick things</div>
                <p className="step__text">Clothes, toys, equipment or other</p>
            </div>
            <div className="step">
                <div className="step__icon2"></div>
                <div className="step__title">Pack them up</div>
                <p className="step__text">Use trash bags</p>
            </div>
            <div className="step">
                <div className="step__icon3"></div>
                <div className="step__title">Chose the charity</div>
                <p className="step__text">Chose one of our trustful partners</p>
            </div>
            <div className="step">
                <div className="step__icon4"></div>
                <div className="step__title">Send your package</div>
                <p className="step__text">The delivery will be set at your convenience</p>
            </div>
        </div>
        <div className="button__centered main__container">
            <ButtonGiveAway />
        </div>
    </>
}