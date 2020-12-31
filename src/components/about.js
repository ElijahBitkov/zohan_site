import React from "react"
import styled from "styled-components"
import SecondTitle from "./second-title"
import Paragraph from "./paragraph"
import Strong from "./strong"
import Section from "./section"



const Block = styled(Section) `
    display: grid;
    grid-template-areas: "titl" "para";
    grid-auto-rows: max-content;
    grid-gap: var(--dm);
`
const AboutTitle = styled(SecondTitle)`
    grid-area: titl;
`

const AboutText =styled(Paragraph)`
    grid-area: para;
    font-size: max(15px, 1.2em);
    border: 1px solid var(--1color);
    padding: var(--dm);
    height: min-content;
    display: block;
    line-height: calc(1.4 * var(--dm));
`


const About = () => ( 
    <Block>
        <AboutTitle>Сайт frontend разработчика</AboutTitle>
        <AboutText>Меня зовут <Strong>Зохан</Strong>, Вы находитесь на персональном блоге, посвещенном <Strong>frontend</Strong> разработке.</AboutText>
    </Block>
)

export default About;