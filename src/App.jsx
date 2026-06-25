import { stickers } from "./data/stickers";
import StickerCard from "./components/StickerCard";

function App() {
  return (
    <div>
      <h1>Álbum Mundial 2026</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {stickers.slice(0, 5).map((sticker) => (
          <StickerCard
            key={sticker.id}
            number={sticker.code}
            name={sticker.name}
            group={sticker.group}
            status="falta"
          />
        ))}
      </div>
    </div>
  );
}

export default App;