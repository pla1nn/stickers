import { Component } from "react"
import { Item, Image, Text } from "./Sticker.styled"

    


export class Sticker extends Component {
    state = {
        visible: false
    }

    handleClick = () => {
        this.setState({visible : true})
    }

    render() {
        const {img, label} = this.props;

        return (
            <Item onClick={this.handleClick}>
                <Image src={img} alt={label} />
                {
                    this.state.visible && <Text>{label}</Text>
                }
            </Item>
        )
    }
}