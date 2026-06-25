function StickerCard({ number, name, group, status }) {
  const colors = {
    tengo: "lightgreen",
    repetida: "khaki",
    falta: "lightgray",
  };

  return (
    <div
      style={{
        backgroundColor: colors[status],
        border: "1px solid gray",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        width: "160px",
        textAlign: "center",
      }}
    >
      <h3>{number}</h3>
      <p>{name}</p>
      <p>{group || "Especial"}</p>
      <strong>{status}</strong>
    </div>
  );
}

export default StickerCard;