import { Sticker } from "components/Sticker/Sticker"
import { List } from "./StickerList.styled"


export const StickerList = ({stickers}) => {
    return (
        <List>
            {stickers.map(({img, label}, index) => {
                return (
                    <Sticker key={index} img={img} label={label}/>
                )
            })}
        </List>
    )
}