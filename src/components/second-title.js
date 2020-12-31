import styled from "styled-components"


const SecondTitle = styled.h2 `
    text-transform: lowercase;
    font-size: calc(1.5 * var(--dm));
    &::first-letter {
        text-transform: uppercase;
    }
`
export default SecondTitle