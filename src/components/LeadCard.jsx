import { mapsLink } from "../utils/helpers";

const LeadCard = ({ lead }) => {
  return (
    <div className="lead-card">
      <h3>{lead.name}</h3>
      <p>{lead.formatted_address}</p>

      {lead.rating && <p>⭐ {lead.rating}</p>}

      <a href={mapsLink(lead.place_id, lead.name)} target="_blank">
        View on Maps
      </a>
    </div>
  );
};

export default LeadCard;
