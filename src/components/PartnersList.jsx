export default function PartnerList({partnersFiltered}) {
    return <div className="partners__list">
        {partnersFiltered.map((partner, index) =>
            <div key={index} className="partner__entry">
                <div className="partner__about">
                    <div className="partner__name">{partner.name}</div>
                    <div className="partner__purpose">{partner.purpose}</div>
                </div>
                <div className="partner__collection">{partner.donations}</div>
            </div>)
        }
    </div>
}