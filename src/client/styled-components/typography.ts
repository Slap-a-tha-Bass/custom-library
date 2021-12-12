import styled from "styled-components";

export const H1 = styled.h1`
    font-size: calc(3.5rem + 1vw);
    color: ${props => props.color};
    padding-top: calc(3rem + 1vw);
    margin-left: calc(1rem + 1vw);
`
export const H2 = styled(H1)`
    font-size: calc(3rem + 1vw);
`
export const H3 = styled(H1)`
    font-size: calc(2.5rem + 1vw);
`
export const H4 = styled(H1)`
    font-size: calc(2rem + 1vw);
`
export const H5 = styled(H1)`
    font-size: calc(1.5rem + 1vw);
`