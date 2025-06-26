import { Button, Container, Text } from "./Clock.styled"
import { useState, useRef, useEffect } from "react"

// export class Clock extends Component {
//     state = {
//         time: new Date()
//     }

//     intervalId = null;

//     componentDidMount() {
//         this.intervalId = setInterval(() => {
//             this.setState({time: new Date()})
//         }, 1000)
//     }

//     componentWillUnmount() {
//         this.stop()
//     }

//     stop = () => {
//         clearInterval(this.intervalId)
//     }

//     render() {
//         return (
//             <Container>
//                 <Text>Current time: {this.state.time.toLocaleTimeString()}</Text>
//                 <Button onClick={this.stop} type="button">Stop</Button>
//             </Container>
//         )
//     }
// }

export const Clock = () => {
    const [time, setTime] = useState(() => new Date())
    const intervalId = useRef(null)

    useEffect(() => {
        intervalId.current = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {
           stop() 
        };
    }, []);

    const stop = () => {
        clearInterval(intervalId.current)
    }

    return (
            <Container>
                <Text>Current time: {time.toLocaleTimeString()}</Text>
                <Button onClick={stop} type="button">Stop</Button>
            </Container>
        )
}