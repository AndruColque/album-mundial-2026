import { stickers } from "./data/stickers";

function App() {
  console.log(stickers);

  return (
    <div>
      <h1>Álbum Mundial 2026</h1>
      <p>Total de figuritas: {stickers.length}</p>
    </div>
  );
}

export default App;