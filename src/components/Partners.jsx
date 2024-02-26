import {useState, useEffect} from "react";
import PartnersList from "./PartnersList";
// import partners from "../assets/data/partners.json";
import partners from "../assets/data/partners.json";

export default function Partners() {

    // console.log(partners);

    const [partnerFilter, setPartnerFilter] = useState("foundation");
    const [partnersFiltered, setPartnersFiltered] = useState(partners.categories.find(category => category.name === "foundation").elements);

    useEffect(() => {
        setPartnersFiltered(partners.categories.find(category => category.name === partnerFilter).elements);
    }, [partnerFilter]);

    const foundationInfo = "In our database you will find a list of verified Foundations with which we cooperate. You can check what they do, who they help and what they need."

    return <section className="partners__container">
        <h2 className="partners__title">Whom do we support?</h2>
        <div className="decoration"></div>
        <div className="partner__filters">
            <button className={partnerFilter === "foundation" ? "active" : null} onClick={() => setPartnerFilter("foundation")}>Foundations</button>
            <button className={partnerFilter === "NGO" ? "active" : null} onClick={() => setPartnerFilter("NGO")}>Non Governmental Organisations</button>
            <button className={partnerFilter === "Local Donations Collection" ? "active" : null} onClick={() => setPartnerFilter("Local Donations Collection")}>Local Collections</button>
        </div>
        <p className="partners__note">In our database you will find a list of verified foundations, NGOs and Local Donations Collections with which we cooperate. You can check what they do, who they help and what they need.</p>
        <PartnersList partnersFiltered={partnersFiltered}/>
    </section>
}