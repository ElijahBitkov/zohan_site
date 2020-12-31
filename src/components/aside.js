import styled from "styled-components"


const Aside = styled.aside `
    background-color: var(--0color);
    display: grid;
    grid-template-rows: auto auto;
    grid-gap: var(--grid-gap);
    @media (max-width: 600px) {
        display: none;
    }
`

export default Aside