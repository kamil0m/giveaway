import {useState, useEffect} from "react";
import PartnersList from "./PartnersList";
import partners from "../assets/data/partners.json";

export default function Partners() {

    // console.log(partners);

    const [partnerFilter, setPartnerFilter] = useState("");
    const [partnersFiltered, setPartnersFiltered] = useState(partners);

    useEffect(() => {
        if (partnerFilter !== "") {
            setPartnersFiltered(partners.filter(function(element) {
                return element.category == partnerFilter
            }));
        };
    }, [partnerFilter]);

    return <section className="partners__container">
        <h2>Whom do we support?</h2>
        <div className="decoration"></div>
        <div className="partner__filters">
            <button onClick={() => setPartnerFilter("foundation")}>Foundations</button>
            <button onClick={() => setPartnerFilter("NGO")}>Non Governmental Organisations</button>
            <button onClick={() => setPartnerFilter("Local Donations Collection")}>Local Collections</button>
        </div>
        <p className="partners__note"></p>
        <PartnersList />
        <div className="carousel__container">
        </div>
    </section>
}