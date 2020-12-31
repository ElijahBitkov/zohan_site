import styled from "styled-components"
import React from "react"
import SecondTitle from "./second-title"
import Img from "gatsby-image"
import {Link} from "gatsby"
import Paragraph from "./paragraph"
import Section from "./section"

const Block = styled.article`
    background-color: var(--0color);

    
`
const ArticleTitle = styled(SecondTitle)`
    grid-area: titl;
`
const ArticleText = styled(Paragraph)`
    grid-area: text;
`

const ArticleSection = styled(Section)`
    display: grid;
    grid-template-areas: "titl titl" "text imag" "link imag";
    grid-gap: .8em;
    grid-template-rows:  max-content auto auto;
    grid-template-columns: 1fr auto;
`
const ArticleImg = styled(Img)`
    grid-area: imag;
    width: calc(12.8 * var(--dm));
    height:  calc(9.6 * var(--dm));
`
const ArticleLink = styled(Link)`
    grig-area: link;
    align-self: end;
    justify-self: start;
    padding: var(--dm) calc(2 * var(--dm));
    font-size: calc(1.2 * var(--dm));
    border: 2px solid var(--1color);
    text-decoration: none;
    color: inherit;
`

const Article = ({title, text, image, link, className}) => (
    <Block className={className}>
        <ArticleSection>
            <ArticleTitle>{title}</ArticleTitle>
            <ArticleText>{text}</ArticleText>
            <ArticleImg fluid = {image}></ArticleImg>
            <ArticleLink to={link}>Читать</ArticleLink>
        </ArticleSection>
    </Block>
)

export default Article