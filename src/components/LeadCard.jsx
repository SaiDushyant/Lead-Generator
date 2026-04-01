const LeadCard = ({ lead }) => {
  return (
    <div className="lead-card">
      <h3>{lead.name}</h3>
      <p>{lead.formatted_address}</p>

      {lead.rating && <p>⭐ {lead.rating}</p>}

      {lead.place_id && (
        <a
          href={`https://www.google.com/maps/place/?q=place_id:${lead.place_id}`}
          target="_blank"
        >
          View on Maps
        </a>
      )}
    </div>
  );
};

export default LeadCard;
