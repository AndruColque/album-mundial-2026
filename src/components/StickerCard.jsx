function StickerCard({ number, name, group, status, onClick }) {
  const colors = {
    tengo: "lightgreen",
    repetida: "khaki",
    falta: "lightgray",
  };

  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: colors[status],
        border: "1px solid gray",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        width: "160px",
        textAlign: "center",
        cursor: "pointer",
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