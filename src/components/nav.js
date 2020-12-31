import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"



const Ul = styled.ul`
    list-style: none;
    display: flex;
    font-size: max(15px, 1.2em);
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
`
const Li = styled.li`
    flex: 1;
`

const Link_Nav = styled(Link)`
    text-align: center;
    text-decoration: none;
    padding: calc(.8 * var(--dm)) calc(.4 * var(--dm));
    color: inherit;
    display: block;
    font-weight: 600;
    transition: .3s;
    
    &:hover {

        color: var(--0color);
        background-color: var(--1color);
        transform: scale(1.05, 1.05);
        
    }
`

const Nav = ({className}) => (
    <nav className={className}>
        <Ul>
            <Li><Link_Nav to="/">
                блог
            </Link_Nav></Li>
            <Li><Link_Nav to="/blog/my-first-post">портфолио</Link_Nav></Li>
            <Li><Link_Nav to="/">Всякое</Link_Nav></Li>
        </Ul>
    </nav>
)

export default Nav