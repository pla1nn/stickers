import { StickerList } from "./StickerList/StickerList";
import stickers from '../../src/stickers.json'

export const App = () => {
  return (
    <div>
      <StickerList stickers={stickers}/>
    </div>
  );
};
