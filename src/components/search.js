import styled from "styled-components"
import React from "react"


const Line = styled.input`
margin: 0;
padding: 0 calc(.6 * var(--dm));
text-align: right;
background-color: var(--1color);
color: var(--0color);
height: calc(1.6 * var(--dm));

`
const Button = styled.button`
margin: 0;
height: calc(1.6 * var(--dm));
border: none;
padding: 0 calc(.6 * var(--dm));
background-color: var(--0color);
color: var(--1color);
border: 1px solid var(--1color);


`
const Search = ({className}) => (
    <form style={{textAlign: "end", margin: "0 var(--mr) 0 0"}} className={className}>
        <Line type="text"></Line>
        <Button>Поиск</Button>
    </form>
)

export default Search