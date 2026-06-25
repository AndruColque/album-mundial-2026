import { useEffect, useState } from "react";
import { stickers } from "./data/stickers";
import StickerCard from "./components/StickerCard";
import AlbumSummary from "./components/AlbumSummary";

function App() {
  const [collectionStatus, setCollectionStatus] = useState({});
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("todas");

  useEffect(() => {
    const savedStatus = localStorage.getItem("collectionStatus");

    if (savedStatus) {
      setCollectionStatus(JSON.parse(savedStatus));
    } else {
      const initialStatus = {};

      stickers.forEach((sticker) => {
        initialStatus[sticker.id] = "falta";
      });

      setCollectionStatus(initialStatus);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(collectionStatus).length > 0) {
      localStorage.setItem(
        "collectionStatus",
        JSON.stringify(collectionStatus)
      );
    }
  }, [collectionStatus]);

  function handleStatusChange(id) {
    setCollectionStatus((previousStatus) => {
      const currentStatus = previousStatus[id];

      let newStatus = "falta";

      if (currentStatus === "falta") {
        newStatus = "tengo";
      } else if (currentStatus === "tengo") {
        newStatus = "repetida";
      } else {
        newStatus = "falta";
      }

      return {
        ...previousStatus,
        [id]: newStatus,
      };
    });
  }

  const filteredStickers = stickers.filter((sticker) => {
    const text = searchText.toLowerCase();

    const matchesSearch =
      sticker.name.toLowerCase().includes(text) ||
      sticker.code.toLowerCase().includes(text);

    const matchesStatus =
      statusFilter === "todas" ||
      collectionStatus[sticker.id] === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Álbum Mundial 2026</h1>

      <AlbumSummary
        stickers={stickers}
        collectionStatus={collectionStatus}
      />

      <input
        type="text"
        placeholder="Buscar por nombre o número"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />

      <select
        value={statusFilter}
        onChange={(event) => setStatusFilter(event.target.value)}
        style={{ padding: "8px" }}
      >
        <option value="todas">Todas</option>
        <option value="tengo">Tengo</option>
        <option value="repetida">Repetidas</option>
        <option value="falta">Faltan</option>
      </select>

      <p>Total visibles: {filteredStickers.length}</p>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredStickers.map((sticker) => (
          <StickerCard
            key={sticker.id}
            number={sticker.code}
            name={sticker.name}
            group={sticker.group}
            status={collectionStatus[sticker.id]}
            onClick={() => handleStatusChange(sticker.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;