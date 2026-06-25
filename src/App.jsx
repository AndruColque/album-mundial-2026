import { useState } from "react";
import { stickers } from "./data/stickers";
import StickerCard from "./components/StickerCard";

function App() {
  const initialStatus = {};

  stickers.forEach((sticker) => {
    initialStatus[sticker.id] = "falta";
  });

  const [collectionStatus, setCollectionStatus] = useState(initialStatus);

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

  return (
    <div>
      <h1>Álbum Mundial 2026</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {stickers.map((sticker) => (
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