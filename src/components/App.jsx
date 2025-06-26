import { StickerList } from "./StickerList/StickerList";
import stickers from '../../src/stickers.json'
import { Clock } from "./Clock/Clock";

export const App = () => {
  return (
    <div>
      <StickerList stickers={stickers}/>
      <Clock/>
    </div>
  );
};
