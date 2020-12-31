import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import Title from "./title"
import Nav from "./nav"
import Search from "./search"


const HeaderInnerStyle = createGlobalStyle`
    .header__nav {
        grid-area: navi;
        margin-right: var(--mr);
        @media(max-width: 900px) {
            display: none;
        }
    }
    .header__search {
        grid-area: sear;
        padding-top: calc(.5 * var(--dm));
    }
`
const TitleContainer =styled.div`
    grid-area: titl;
    margin-left: var(--ml);
    display: flex;
    align-items: center;
    height: calc(4.5 * var(--dm));;
`
const Block = styled.header `
    display: grid;
    grid-template-areas: "titl sear" "titl navi";
    grid-template-columns: var(--two-cols);
    background-color: var(--0color);
    align-items: center;
    grid-column-gap: var(--grid-gap);
    grid-row-gap: calc(.5 * var(--dm));
`
const Title_Header = styled(Title)`
    font-size: calc(2 * var(--dm));
    font-weight: 600;
    transform: scaleY(2);
`

const Header = ({className}) => (
    <Block className={className}>
        <HeaderInnerStyle/>
        <Search className={"header__search"}></Search>
        <TitleContainer><Title_Header>Zohan</Title_Header></TitleContainer>
        <Nav className={"header__nav"}></Nav>
    </Block>
)

export default Header