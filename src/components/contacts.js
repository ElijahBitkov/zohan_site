import React from "react"
import styled from "styled-components"
import SecondTitle from "./second-title"
import Paragraph from "./paragraph"

const Block = styled.section`
`

const ContTitle = styled(SecondTitle)
`   padding-bottom: calc(.4 * var(--dm));
    font-size: calc(1.2 * var(--dm));
`
const ContText = styled(Paragraph)
`   font-size: 1em;
    padding: calc(.2 * var(--dm)) 0;

`
const ContLink = styled.a `
    text-decoration: none;
    color: inherit;
    font-weight: 600;
`

const Contacts = () => (
    <Block>
        <ContTitle>Контакты</ContTitle>
        <ContText>Телефон</ContText>
        <ContLink href="tel:+79041061584">+79041061584</ContLink>
        <ContText>Email</ContText>
        <ContLink href="mailto:zohan@gmail.com">zohan@gmail.com</ContLink>
        <ContText>Telegram</ContText>
        <ContLink href="mailto:zohan@gmail.com">telegram</ContLink>
    </Block>
)

export default Contacts