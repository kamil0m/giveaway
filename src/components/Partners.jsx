import {useState, useEffect} from "react";
import PartnersList from "./PartnersList";
// import partners from "../assets/data/partners.json";
import partners from "../assets/data/partners.json";

export default function Partners() {

    const [partnerFilter, setPartnerFilter] = useState("foundation");
    const [partnersFiltered, setPartnersFiltered] = useState(partners.categories.find(category => category.name === "foundation").elements);
    const numPages = Math.ceil(partnersFiltered.length / 3);
    const [currentPage, setCurrentPage] = useState(1);
    const [partnersShowing, setPartnersShowing] = useState(partnersFiltered.slice(0, 3));

    useEffect(() => {
        setPartnersFiltered(partners.categories.find(category => category.name === partnerFilter).elements);
        setPartnersShowing(partners.categories.find(category => category.name === partnerFilter).elements.slice(0, 3));
        setCurrentPage(1);
    }, [partnerFilter]);

    const renderPageNumbers = () => {
        const pageNumbers = [<button key={1} className={currentPage === 1 ? "active" : null } onClick={() => handlePageChange(1)}>{1}</button>];
        for (let i = 2; i <= numPages; i++) {
            pageNumbers.push(
                <button key={i} className={currentPage === i ? "active" : null} onClick={() => handlePageChange(i)}>{i}</button>
            );
        }
        return pageNumbers;
    };

    const handlePageChange = (pageNumber) => {
        const startIndex = (pageNumber - 1) * 3;
        const endIndex = Math.min(startIndex + 3, partnersFiltered.length);
        setPartnersShowing(partnersFiltered.slice(startIndex, endIndex));
        setCurrentPage(pageNumber);
    };

    return <section className="partners__container">
        <h2 className="partners__title">Whom do we support?</h2>
        <div className="decoration"></div>
        <div className="partner__filters">
            <button
                className={partnerFilter === "foundation" ? "active" : null}
                onClick={() => setPartnerFilter("foundation")}
            >Foundations</button>
            <button
                className={partnerFilter === "NGO" ? "active" : null}
                onClick={
                () => setPartnerFilter("NGO")}
            >Non Governmental Organisations</button>
            <button
                className={partnerFilter === "Local Donations Collection" ? "active" : null}
                onClick={
                () => setPartnerFilter("Local Donations Collection")}
            >Local Collections</button>
        </div>
        <p className="partners__note">In our database you will find a list of verified foundations, NGOs and Local Donations Collections with which we cooperate. You can check what they do, who they help and what they need.</p>
        <PartnersList partnersShowing={partnersShowing}/>
        <div className="pagination">
            {renderPageNumbers()}
        </div>
    </section>
}