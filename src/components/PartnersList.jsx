export default function PartnerList({partnersShowing}) {
    return <div className="partners__list">
        {partnersShowing.map((partner, index) =>
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