import { StickerList } from "./StickerList/StickerList";
import stickers from '../../src/stickers.json'
import { Clock } from "./Clock/Clock";
import { AppBar } from "./AppBar/AppBar";

export const App = () => {
  return (
    <div>
      <AppBar/>
      <StickerList stickers={stickers}/>
      <Clock/>
    </div>
  );
};
