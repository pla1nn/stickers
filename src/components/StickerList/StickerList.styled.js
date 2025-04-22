import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 850px;
    margin: 0 auto;
    margin-top: 100px;
    gap: 20px;
    list-style: none;
    color: #BE5985;
    background-color: #FFEDFA;
    border-radius: 25px;
    padding: 20px;
    transition: all 0.4ms  ease-in;

    :hover {
        transform: scale(1.005);
    }
`