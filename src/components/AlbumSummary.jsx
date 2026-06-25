function AlbumSummary({ stickers, collectionStatus }) {
  const total = stickers.length;

  const tengo = Object.values(collectionStatus).filter(
    (status) => status === "tengo"
  ).length;

  const repetidas = Object.values(collectionStatus).filter(
    (status) => status === "repetida"
  ).length;

  const faltan = Object.values(collectionStatus).filter(
    (status) => status === "falta"
  ).length;

  const porcentaje = Math.round((tengo / total) * 100);

  return (
    <div>
      <h2>Resumen del álbum</h2>
      <p>Total de figuritas: {total}</p>
      <p>Tengo: {tengo}</p>
      <p>Repetidas: {repetidas}</p>
      <p>Faltan: {faltan}</p>
      <p>Completitud: {porcentaje}%</p>
    </div>
  );
}

export default AlbumSummary;