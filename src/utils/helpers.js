export const mapsLink = (placeId, name) => {
  if (placeId) {
    return `https://www.google.com/maps/place/?q=place_id:${placeId}`;
  }
  return `https://www.google.com/maps/search/${encodeURIComponent(name)}`;
};

export const exportCSV = (data) => {
  if (!data.length) return;

  const headers = ["Name", "Address", "Rating", "Maps Link"];

  const rows = data.map((l) => [
    l.name,
    l.formatted_address,
    l.rating || "",
    mapsLink(l.place_id, l.name),
  ]);

  const csv = [headers, ...rows]
    .map((row) =>
      row.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(","),
    )
    .join("\n");

  const blob = new Blob(["\uFEFF" + csv], {
    type: "text/csv;charset=utf-8;",
  });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `leads_${Date.now()}.csv`;
  link.click();
};
