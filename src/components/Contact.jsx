import Footnote from "./Footnote";

export default function Contact() {
    return <section className="contact">
        <div className="main__container contact__container">
            <h2 className="contact__title">Contact us</h2>
            <div className="decoration"></div>
            <div className="contact__info">
                <div className="contact__name">
                    <label className="name">Type your name</label>
                    <input id="name" placeholder="Christopher" />
                </div>
                <div className="contact__email">
                    <label className="email">Type your email</label>
                    <input id="email" placeholder="abc@xyz.com" />
                </div>
            </div>
            <div className="contact__message">
                <label className="message">Type your message</label>
                <textarea id="message" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
            </div>
            <button className="button__submit" type="submit">Send</button>
        </div>
    </section>
}